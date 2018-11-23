<template>
  <h5 class="common-title" @mouseenter="changeActive" @mouseout="changeActive" :class="{'hover':isActive}">
    {{titleName}}</h5>
</template>

<script>
  export default {
    props:
      {
        "titleName": String
      }
    ,
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      changeActive() {
        this.isActive = !this.isActive
      }
    },
    created: function () {

    },
    mounted() {
    },
    components: {}
  }
</script>
<style scoped>
  .hover {
    cursor: pointer;
    color: #2b85e4;
  }

  .common-title {
    font-size: 0.9rem;
    margin-top: .2rem;
  }
</style>
