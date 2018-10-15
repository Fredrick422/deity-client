<template>
    <div class="error-icon">
        <svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            viewBox="0 0 198.486 198.486" 
            enable-background="new 0 0 198.486 198.486"
            xml:space="preserve">
            <path id="icon-circle" fill="none" stroke="#1E2739" stroke-width="10" stroke-miterlimit="10" d="M192.486,99.243
            c0,51.497-41.746,93.243-93.243,93.243S6,150.74,6,99.243C6,47.747,47.746,6,99.243,6S192.486,47.747,192.486,99.243z"/>
            <path id="icon-x" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="bevel" stroke-miterlimit="10" d="
            M66.5,66.499l63.001,63.001 M129.501,66.499L66.5,129.5"/>
            <g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {mapState, mapMutations} from 'vuex'

    export default Vue.extend({

        created() {
           this.$emit('countdown')           
        },

    })
</script>

<style lang="scss">
    .error-icon{
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

    #icon-x{
       animation-name: zoomIcon;
       -webkit-animation-fill-mode: both;
       animation-fill-mode: both;
       animation-duration: 1s;
       animation-delay: 1s;
       animation-timing-function: ease-in-out;
       //transform-origin: center;
    }

    @keyframes iconanim {
        to{
            stroke-dashoffset: 0;
        }
    }

    @keyframes jello {
        from,
        11.1%,
        to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }

        22.2% {
            transform: skewX(-12.5deg) skewY(-12.5deg);
        }

        33.3% {
            transform: skewX(6.25deg) skewY(6.25deg);
        }

        44.4% {
            transform: skewX(-3.125deg) skewY(-3.125deg);
        }

        55.5% {
            transform: skewX(1.5625deg) skewY(1.5625deg);
        }

        66.6% {
            transform: skewX(-0.78125deg) skewY(-0.78125deg);
        }

        77.7% {
            transform: skewX(0.390625deg) skewY(0.390625deg);
        }

        88.8% {
            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        }
    }

    @keyframes zoomIcon {
        from {
            opacity: 0;
            transform: scale3d(1, 1, 1);
        }

        50% {
            opacity: 1;
        }
    }
</style>