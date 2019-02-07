<template>
  <div>
    <IntroHeader
            Title="Something"
            introHeaderClass="intro-header-comments"
            subTitle="interesting or not"
            :isProjectPage="false"/>
    <Comment/>
  </div>
</template>

<script>
  import IntroHeader from '../components/IntroHeader.vue'
  import Comment from '../components/CommentsBoard.vue'
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {IntroHeader,Comment}
    }
</script>
<style>

</style>
