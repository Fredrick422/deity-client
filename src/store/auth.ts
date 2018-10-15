
import HTTP from '../http'

export default {
    namespaced: true,
    state:{
        auth: {
            state: null,
        },
        input:{
            phone: null,
            pin: null,
        },
        readonly:{
            pin: false
        },
        disabled: {
            pin: false
        },
        token: null,
        valid: {
            pin: null,
            phone: null
        },
        retry: {
            retry: false,
            text: 'Retry',
            count: null,
            retry_in: null,
        },
        error: {},
        feedback: {
            phone: null,
            pin: null
        },
        verify:{
            sent: false,
            code: null,
        }
    },

    getters:{ 
        
    },

    actions:{
        onContinue({state}){
            //Submit phone to server
            return HTTP().post('auth/code', {
                phone: state.input.phone
            }).then((res) => {
                state.valid.phone = null
                if (res.data.status === 'SUCCESS') {
                    state.auth.state = 'pending'
                    state.input.phone = res.data.phone
                    state.token = res.data.token
                    state.retry.retry_in = res.data.retry_in

                    return
                }

                if (res.data.status === 'ERROR') {
                    let errormessage = res.data.message.replace(/_/g, " ")
                    state.auth.state = 'failed'
                    state.input.phone = res.data.phone
                    state.error.title = res.data.status.toLowerCase()
                    state.error.message = errormessage.toLowerCase()

                    return
                }

                return

            }).catch((err) => {
                state.valid.phone = false
                if (err.response.status == 404 || err.response.status == 401) {
                    state.feedback.phone = err.response.data.error
                    return
                }
                state.feedback.phone = err.response.data[0].message
                return
            })
        },

        onResend({state}){
            return HTTP().post('auth/code', {
                phone: state.input.phone
            }).then((res) => {
                state.valid.phone = null
                if (res.data.status === 'SUCCESS') {
                    state.auth.state = 'pending'
                    state.input.phone = res.data.phone
                    state.token = res.data.token
                    state.retry.retry_in = res.data.retry_in

                    return
                }

                if (res.data.status === 'ERROR') {
                    let errormessage = res.data.message.replace(/_/g, " ")
                    state.auth.state = 'failed'
                    state.input.phone = res.data.phone
                    state.error.title = res.data.status.toLowerCase()
                    state.error.message = errormessage.toLowerCase()

                    return
                }

                return

            }).catch((err) => {
                state.valid.phone = false
                if (err.response.status == 404 || err.response.status == 401) {
                    state.feedback.phone = err.response.data.error
                    return
                }
                state.feedback.phone = err.response.data[0].message
                return
            })
        }
    },

    mutations:{
        setPhone(state: any, phone: any){
            state.input.phone = phone
            if (!state.valid.phone && state.valid.phone != null) {

                let r = new RegExp('\\d', 'g'),
                    count = 0
                while (r.exec(phone)) count++

                state.valid.phone = (count == 12) ? null : false

            }

            return
            
            //console.log("g66ghy7".replace(/[^0-9]/g,"").length)
        },
        setfeedback(state: any, feedback: any) {
            state.feedback.phone = feedback
        },
        setRetry(state: any) {
            let time = state.retry.retry_in
            setInterval(function () {
                if (time > 0) {
                    time -= 1
                    state.retry.retry = true
                    state.retry.text = 'Retry in ' + time + ' Seconds...'
                } else {
                    state.retry.retry = false
                    state.retry.text = 'Retry'
                }
            }, 1000);
            
        },
        setPin(state: any, pin: any){
            let authpin = pin.replace(/\s/g, "").length 
            if (authpin == 4) {

                state.input.pin = pin 
                state.readonly.pin = true

                return HTTP().post('auth/verify', {
                    phone: state.input.phone,
                    code: state.input.pin,
                    token: state.token
                }).then((res) => {
                    state.valid.pin = null
                    state.verify.sent = true
                    if (res.data.success === true) { 
                        state.auth.state = true
                        state.auth.token = res.data.token.token
                        console.log(state.auth)
                        return
                    }

                    if (res.data.status === 'ERROR') {
                        state.valid.pin = false

                        let errormessage = res.data.message.replace(/_/g, " ")
                        state.feedback.pin = errormessage.toLowerCase()

                        return
                    }

                    return

                }).catch((err) => {
                    state.valid.pin = false
                    state.readonly.pin = false
                    state.disabled.pin = false

                    if (err.response.status == 500) {
                        state.feedback.pin = 'Request failed'
                        return
                    }
                    
                    if (err.response.status == 404 || err.response.status == 401 || err.response.status == 400) {
                        if (typeof err.response.data.error === 'undefined') {
                            state.feedback.pin = err.response.data.message
                            return 
                        }
                        state.feedback.pin = err.response.data.error
                        return
                    }
                    state.feedback.pin = err.response.data[0].message
                    return
                })
            }
        }
    }
}