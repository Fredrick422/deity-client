
import HTTP from '../http'

export default {
    namespaced: true,
    state:{
        auth: {
            state: null,
            token: null,
            user: {
                role: null,
            }
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
        onContinue({commit}){
            commit('sendCode')
        },

        onResend({commit}){
            commit('sendCode')
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
        async setPin(state, pin: any){
            let authpin = pin.replace(/\s/g, "").length 
            if (authpin == 4) {

                state.input.pin = pin 
                state.readonly.pin = true

                return await HTTP().post('auth/verify', {
                    phone: state.input.phone,
                    code: state.input.pin,
                    token: state.auth.token
                }).then((res) => {
                    state.valid.pin = null
                    state.verify.sent = true
                    if (res.data.success === true) {
                        state.auth.state = 'logged'
                        state.input.pin = null
                        state.auth.token = res.data.token.token
                    }

                    if (res.data.status === 'ERROR') {
                        state.valid.pin = false

                        let errormessage = res.data.message.replace(/_/g, " ")
                        state.feedback.pin = errormessage.toLowerCase()
                    }

                }).catch((err) => {
                    state.valid.pin = false
                    state.readonly.pin = false
                    state.disabled.pin = false

                    if (err.response.status == 500) {
                        state.feedback.pin = 'Request failed'
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
        },

        async sendCode(state: any){
            //Submit phone to server
            return await HTTP().post('auth/code', {
                phone: state.input.phone
            }).then((res) => {
                if (res.data.status === 'SUCCESS') {
                    state.auth.state = 'pending'
                    state.auth.token = res.data.token
                    state.retry.retry_in = res.data.retry_in
                }

                if (res.data.status === 'ERROR') {
                    let errormessage = res.data.message.replace(/_/g, " ")
                    state.auth.state = 'failed'
                    state.error.title = res.data.status.toLowerCase()
                    state.error.message = errormessage.toLowerCase()

                }

            }).catch((err) => {
                state.valid.phone = false
                if (err.response.status == 404 || err.response.status == 401) {
                    state.feedback.phone = err.response.data.error
                }else{
                    state.feedback.phone = err.response.data[0].message
                }
            })

        }
    },
}