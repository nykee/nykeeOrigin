<template>
  <div class="ref-art-box">

    <ul class="ref-art-content">
      <h3 class="ref-art-box-title"><i class="fa fa-bookmark bookmark "></i>相关参考文章</h3>
      <li v-for="art in articles" class="ref-art-items">
        <a :href="art.href" target="_blank">{{art.name}}</a>
      </li>
    </ul>
  </div>

</template>

<script>

    export default {
      props:["articles"],
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
<style lang="sass" scoped>
.ref-art-box
    margin-top: 1.3rem

.ref-art-box-title
     margin-bottom: .6rem
     color: #7c8186
.ref-art-content
    border: 1px solid #8391a5
    border-radius: 10px
    padding: .4rem .6rem
.ref-art-items
    margin-top: .4rem
.bookmark
  margin-right: .4rem
</style>
