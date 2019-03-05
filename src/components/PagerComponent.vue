<template>
  <div>
    <section>
      <Divider dashed></Divider>
    </section>
    <section>
      <Row class="pager">
        <i-col span="12">
          <PagerItem
            v-if="iSPrevShow"
            Label="Previous Post"
            :BlogTitle="prvBlogTitle"
            :BlogUrl="prvUrl"
            :bg-src="prvBgSrc">
          </PagerItem>
        </i-col>
        <i-col span="12">
          <PagerItem
            v-if="isNextShow"
            Label="Next Post"
            :BlogTitle="nextBlogTitle"
            :blog-url="nextUrl"
            :bg-src="nextBgSrc">
          </PagerItem>
        </i-col>
      </Row>
    </section>
  </div>
</template>

<script>
  import PagerItem from "./PagerItem"
    export default {
      props:["prvUrl","nextUrl","prvBgSrc","nextBgSrc","prvBlogTitle","nextBlogTitle"],
        data() {
            return {
              isNextShow:true,
              iSPrevShow:true,
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {
        if(!this.nextUrl){
          this.isNextShow =false
        }
        if(!this.prvUrl){
          this.iSPrevShow =false
        }

        },
        components: {PagerItem}
    }
</script>
<style>

</style>
