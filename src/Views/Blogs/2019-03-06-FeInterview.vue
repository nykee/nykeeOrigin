<template>
    <div>
        <Row type="flex" align="center" justify="center" class="blog-container">
            <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
                <section>
                    <ul class="title-list">
                        <li>
                            <h1 class="title">前端面试题总结</h1>

                        </li>
                    </ul>
                </section>
                <section>
                    <PostTag :postTime="postTime"/>
                </section>
                <section>
                    <PagerComponent

                            next-url="Ayada"
                            next-bg-src="https://image.nykee.cn/back.jpg"
                            next-blog-title="阿雅达蜜月旅行"
                    >
                    </PagerComponent>
                </section>
            </i-col>
        </Row>

    </div>
</template>
<script>
    import mixin_PV from "../../mixins/index";
    import PostTag from '../../components/PostTag.vue'
    import PagerComponent from '../../components/PagerComponent'
    export default {
        mixins:[mixin_PV],
        data() {
            return {
                postTime: '2019-03-06',
                b_id:"13"
            }
        },
        mounted() {
            let getPV_promise =mixin_PV.methods.getPV(this.b_id);
            let pvs;
            getPV_promise.then((v)=>{
                pvs=v;
                pvs+=1;
                let updatePV_promise= mixin_PV.methods.updatePV(this.b_id,pvs.toString());
                updatePV_promise.then((v)=>{
                    console.log(v);
                })
            });
        },
        components: {
            PostTag,
            PagerComponent
        }
    }
</script>
<style>

</style>
