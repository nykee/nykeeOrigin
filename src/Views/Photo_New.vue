<template>
    <div>
        <IntroHeader
                Title="Photos"
                introHeaderClass="intro-header-photo"
                subTitle=""
                :isProjectPage="false"/>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <i-col span="18">
                <ul class="photo-intro" >
                    <li class="photo-intro-items" v-for="intro in intros" :key="intro.id">{{intro.content}}</li>
                </ul>
            </i-col>
        </Row>

    </div>
</template>
<script>
    import IntroHeader from "../components/IntroHeader"
    export default {
        data() {
            return {}
        },
        computed:{
            intros:function () {
                return this.$t("message.photoPage.intro")
            },
        },
        components: {IntroHeader}
    }
</script>
<style lang="sass">
    .photo-intro
        text-align: left
        margin-top: 1.5rem
        width: 80%
        border: 1px solid #E9EBED
        padding: 1rem 1rem
        -webkit-border-radius: 2px
        -moz-border-radius: 2px
        border-radius: 2px


    .photo-intro-items
        margin-top: .3rem
        /*padding: .2rem;*/

</style>
