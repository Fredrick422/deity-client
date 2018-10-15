<template>
    <div v-bind:class="['school-badge', BadgeSm]">
        <badge-top></badge-top>
        <div class="school-badge-middle">
            <badge-outline></badge-outline>
            <badge-books></badge-books>
        </div>
        <badge-bottom></badge-bottom>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import badgeBooks from '@/components/badge/books.vue';
    import badgeBottom from '@/components/badge/bottom.vue';
    import badgeOutline from '@/components/badge/outline.vue';
    import badgeTop from '@/components/badge/top.vue';

export default Vue.extend({

    data(){
        return {
            BadgeSm:  '',
        }
    },

    components:{
        'badge-books': badgeBooks,
        'badge-bottom': badgeBottom,
        'badge-top': badgeTop,
        'badge-outline': badgeOutline
    },

    beforeMount(){
        setTimeout(() => {  
            this.BadgeSm = 'school-badge-sm'
        } , 3000)
    }

})
</script>

<style lang="scss">
    .school-badge{
        width: 30%;
        margin: auto;
        text-align: center;
        vertical-align: middle;
        -webkit-animation-duration: 1500ms;
        animation-duration: 1500ms;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        animation-name: slideInUp;
    }

    .school-badge-middle{
        position: relative;
        width: 100%;
        margin-top: -5%;
    }

    @media screen and (min-width: 961px){
        .school-badge-sm{
            animation-name: resizeBadge;
        }
        @keyframes resizeBadge {
            0% {
                width: 30%;
                margin-top:0
                /*transform: translate3d(0, 0, 0) scale(1.0);
                -webkit-transform: translate3d(0, 0, 0) scale(1.0);*/
            }
            100% {
                width: 18%;
                margin-top: -50px;
                /*transform: translate3d(0, -35%, 0) scale(.7);
                -webkit-transform: translate3d(0, -35%, 0) scale(.7);*/
            }
        }
    }

    @media screen and (max-width: 960px) and (min-width: 720px){
        .school-badge{
            width: 50%;
        }

        .school-badge-sm{
            animation-name: resizeBadge;
        }
        @keyframes resizeBadge {
            0% {
                width: 50%;
                margin-top:0;
                /*transform: translate3d(0, 0, 0) scale(1.0);
                -webkit-transform: translate3d(0, 0, 0) scale(1.0);*/
            }
            100% {
                width: 40%;
                margin-top: -40px;
                /*transform: translate3d(0, -35%, 0) scale(.7);
                -webkit-transform: translate3d(0, -35%, 0) scale(.7);*/
            }
        }
    }

    @media screen and (max-width: 720px) and (min-width: 420px){
        .school-badge{
            width: 60%;
        }

        .school-badge-sm{
            animation-name: resizeBadge;
        }
        @keyframes resizeBadge {
            0% {
                width: 60%;
                margin-top:0
                /*transform: translate3d(0, 0, 0) scale(1.0);
                -webkit-transform: translate3d(0, 0, 0) scale(1.0);*/
            }
            100% {
                width: 50%;
                margin-top: -30px;
                /*transform: translate3d(0, -35%, 0) scale(.7);
                -webkit-transform: translate3d(0, -35%, 0) scale(.7);*/
            }
        }
    }

    @media(max-width: 420px) {
        .school-badge{
            width: 70%;
        }

        .school-badge-sm{
            animation-name: resizeBadge;
        }
        @keyframes resizeBadge {
            0% {
                width: 70%;
                margin-top: 0;
                /*transform: translate3d(0, 0, 0) scale(1.0);
                -webkit-transform: translate3d(0, 0, 0) scale(1.0);*/
            }
            100% {
                width: 60%;
                margin-top: -50px;
                /*transform: translate3d(0, -35%, 0) scale(.7);
                -webkit-transform: translate3d(0, -35%, 0) scale(.7);*/
            }
        }
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 20%, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
   
</style>