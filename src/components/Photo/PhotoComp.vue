<template>

            <i-col :lg="{span:8}"
                   :md="{span:8}"
                   :sm="{span:8}"
                   :xs="{span:8}" class="img-container">
                <img :src="imgSrc" alt="">
            </i-col>

</template>
<script>

    export default {
        props:["imgSrc"],
        data() {
            return {}
        },
        components: {

        }
    }
</script>
<style lang="sass" >
    .img-container
        over-flow: hidden
    img
        height: 16rem
        with: 100%
    img:hover
        scale(1.2)

</style>
