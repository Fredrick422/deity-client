<template>
    <div class="success-icon">
        <svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            viewBox="0 0 198.486 198.487" 
            enable-background="new 0 0 198.486 198.487"
            xml:space="preserve">
            <path id="icon-circle" fill="none" stroke="#1E2739" stroke-width="10" stroke-miterlimit="10" d="M192.486,99.243
                c0,51.497-41.746,93.244-93.243,93.244S6,150.74,6,99.243S47.746,6,99.243,6S192.486,47.747,192.486,99.243z"/>
            <path id="icon-check" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-miterlimit="10" d="M133.114,80.018
                l-45.476,38.451L67.205,94.301"/>
            <g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

export default Vue.extend({

    created() {
        this.$emit('countdown')           
    },
})
</script>

<style lang="scss">
    .success-icon{
        width: 25%;
        margin-left: auto;
        margin-right: auto;
    }
    #icon-circle{
       stroke-dashoffset: 800;
       stroke-dasharray: 800;
       -webkit-animation-fill-mode: both;
       animation-fill-mode: both;
       animation-name: iconanim; 
       animation-duration: 1s;
       animation-timing-function: ease-in-out;
    }

    #icon-check{
       stroke-dashoffset: 800;
       stroke-dasharray: 800;
       -webkit-animation-fill-mode: both;
       animation-fill-mode: both;
       animation-name: checkanim;
       animation-duration: 1s;
       //animation-delay: 1.5s;
       animation-timing-function: ease-in-out;
    }

    @keyframes iconanim {
        to{
            stroke-dashoffset: 0;
        }
    }

    @keyframes checkanim {
        to{
            stroke-dashoffset: 1600;
        }
    }
</style>