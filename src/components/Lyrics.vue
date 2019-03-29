<template>
  <div class="lyric-box">
    <div class="lyric-mask">
      <p class="lyric-items" v-for="value,index in lyrics" :key="index">{{value}}</p>
    </div>

  </div>
</template>

<script>
    export default {
      props:["lyrics"],
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style lang="sass">
.lyric-box
    position: fixed
    bottom: 0
    right: 8%
    max-width: 100%
    text-align: center
    max-height: 4rem
    overflow: hidden
    width: 82%
.lyric-mask
  transform: translateY(10px)
  background-color: transparent
  opacity: .95
  padding: 1rem
  border-radius: 16px


.lyric-items
  margin-bottom: .4rem
  font-size: 1rem
  color: #e18310

</style>
