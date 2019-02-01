<template>
  <div>
    <Card>
        <Row>
          <i-col :span="11">
            <ul>
              <li>
                <PostTime></PostTime>
              </li>
              <li></li>
              <li></li>
            </ul>
          </i-col>
          <i-col :span="13">
            <img src="https://image.nykee.cn/sakura.webp" alt="" class="img-thumb">
          </i-col>
        </Row>
    </Card>
  </div>
</template>

<script>
  import PostTime from "../components/PostTime"
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {PostTime}
    }
</script>
<style scoped="scoped">
  .img-thumb{
    width: 25.8rem;
    height: 20rem;
    vertical-align: bottom;
  }
  .ivu-card-body{
    padding:0 !important;
  }
</style>
