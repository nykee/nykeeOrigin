<template>
  <div class="comment-item-container">
    <Row>
      <i-col span="3">
        <Avatar icon="ios-person" size="large" :src="avatar"/>
      </i-col>
      <i-col span="21">
        <ul>
          <li>
            {{nickName}}
          </li>
          <li>
            {{postTime | fomatTime}}
          </li>
        </ul>
      </i-col>
    </Row>
    <Row>
      <div class="comment-detail" v-html="content">
        <!--{{content}}-->
      </div>
    </Row>
  </div>
</template>

<script>

    export default {
      props:["nickName","postTime","avatar","content"],
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
<style>
  .comment-item-container{margin:1rem 0}
  .comment-detail{
    padding: .6rem .5rem 2rem .5rem;
    border-bottom: 1px solid #DCDEE2}
</style>
