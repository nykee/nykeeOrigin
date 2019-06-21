<template>
  <div>
    <IntroHeader
            Title="Comments"
            introHeaderClass="intro-header-comments"
            subTitle=""
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
