<template>
  <div>
    <FeaturedTags></FeaturedTags>
    <AboutMe></AboutMe>
    <Friends></Friends>

  </div>
</template>

<script>
  import AboutMe from './AboutMe.vue'
  import FeaturedTags from './FeaturedTags.vue'
  import Friends from './Friends.vue'
    export default {
        data() {
            return {

            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          AboutMe,FeaturedTags,Friends
        }
    }
</script>
<style>

</style>
