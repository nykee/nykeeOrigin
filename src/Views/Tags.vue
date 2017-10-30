<template>
  <div>
    <Row>
      <i-col>
        <IntroHeader></IntroHeader>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <i-col>

        <Row>
          <i-col>
            <Tag color="blue">标签一</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
          </i-col>
          <i-col>
            <Tag>标签一</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
            <Tag>标签二</Tag>
          </i-col>
        </Row>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import IntroHeader from '../components/IntroHeader.vue'
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {IntroHeader}
    }
</script>
<style>

</style>
