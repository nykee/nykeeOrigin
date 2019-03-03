<template>
    <Row type="flex" align="center" justify="center" class="blog-container">
        <i-col :lg="{span:18}" class="blog-content">
            <section>
                <ul class="title-list">
                    <li>
                        <h1 class="title">阿雅达蜜月旅行</h1>
                    </li>
                </ul>
            </section>
            <section class="main-body">
                under construction!


                <PostTag :postTime="postTime"/>
            </section>
        </i-col>

    </Row>
</template>

<script>
    import PostTag from '../../components/PostTag.vue'

    export default {
        data() {
            return {
                postTime: '2019-03-03',
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {PostTag}
    }
</script>
<style>

</style>
