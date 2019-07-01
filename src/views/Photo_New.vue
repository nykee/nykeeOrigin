<template>
    <div>
        <IntroHeader
                Title="Photos"
                introHeaderClass="intro-header-photo"
                subTitle=""
                :isProjectPage="false"></IntroHeader>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <i-col span="18">
                <ul class="photo-intro" >
                    <li class="photo-intro-items" v-for="intro in intros" :key="intro.id">{{intro.content}}</li>
                </ul>
            </i-col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="photo-box">
            <i-col span="18">
                <Row>
                    <PhotoComp v-for="photo in photos" :key="photo.id" :imgSrc="photo.imgSrc" @PhotoPreview="PhotoPreview"></PhotoComp>
                </Row>

            </i-col>
        </Row>
        <PhotoPreview :previewImgSrc="previewImgSrc" v-if="isPreviewShow"></PhotoPreview>

    </div>
</template>
<script>
    import IntroHeader from "../components/IntroHeader"
    import PhotoComp from "../components/Photo/PhotoComp.vue"
    import PhotoPreview from "../components/Photo/PhotoPreview.vue"
    import EventBus from "../utils/EventBus";
    export default {
        data() {
            return {
                photos:[
                    {"webSrc":"https://image.nykee.cn/yuyuan.webp","imgSrc":"https://image.nykee.cn/yuyuan.jpg"},
                    {"webSrc":"https://image.nykee.cn/maitian.webp","imgSrc":"https://image.nykee.cn/maitian.jpg"},
                    {"webSrc":"https://image.nykee.cn/nightrain.webp","imgSrc":"https://image.nykee.cn/nightrain.jpg"},
                    {"webSrc":"https://image.nykee.cn/puppy.webp","imgSrc":"https://image.nykee.cn/puppy.jpg"},
                    {"webSrc":"https://image.nykee.cn/szmuseum.webp","imgSrc":"https://image.nykee.cn/szmuseum.jpg"},
                    {"webSrc":"https://image.nykee.cn/sakura.webp","imgSrc":"https://image.nykee.cn/sakura.jpg"},
                    {"webSrc":"https://image.nykee.cn/sea.webp","imgSrc":"https://image.nykee.cn/sea.jpg"},
                    {"webSrc":"https://image.nykee.cn/boat.webp","imgSrc":"https://image.nykee.cn/boat.jpg"},
                    {"webSrc":"https://image.nykee.cn/bird.webp","imgSrc":"https://image.nykee.cn/bird.jpg"},
                    {"webSrc":"https://image.nykee.cn/car.webp","imgSrc":"https://image.nykee.cn/car.jpg"},
                    {"webSrc":"https://image.nykee.cn/sky.webp","imgSrc":"https://image.nykee.cn/sky.jpg"},
                    {"webSrc":"https://image.nykee.cn/ayada.webp","imgSrc":"https://image.nykee.cn/ayada.jpg"},
                    {"webSrc":"https://image.nykee.cn/sunset.webp","imgSrc":"https://image.nykee.cn/sunset.jpg"},
                    {"webSrc":"https://image.nykee.cn/building.webp","imgSrc":"https://image.nykee.cn/building.jpg"},
                    {"webSrc":"https://image.nykee.cn/building2.webp","imgSrc":"https://image.nykee.cn/building2.jpg"},
                    {"webSrc":"https://image.nykee.cn/towercrane.webp","imgSrc":"https://image.nykee.cn/towercrane.jpg"},
                    {"webSrc":"https://image.nykee.cn/windmill.webp","imgSrc":"https://image.nykee.cn/windmill.jpg"},
                    {"webSrc":"https://image.nykee.cn/yellow.webp","imgSrc":"https://image.nykee.cn/yellow.jpg"},
                    {"webSrc":"https://image.nykee.cn/look.webp","imgSrc":"https://image.nykee.cn/look.jpg"},
                    {"webSrc":"https://image.nykee.cn/flower.webp","imgSrc":"https://image.nykee.cn/flower.jpg"},
                    {"webSrc":"https://image.nykee.cn/IMG_2297.webp","imgSrc":"https://image.nykee.cn/IMG_2297.jpg"},
                    {"webSrc":"https://image.nykee.cn/IMG_2481.webp","imgSrc":"https://image.nykee.cn/IMG_2481.jpg"},
                    {"webSrc":"https://image.nykee.cn/IMG_2484.webp","imgSrc":"https://image.nykee.cn/IMG_2484.jpg"},
                    {"webSrc":"https://image.nykee.cn/IMG_2484.webp","imgSrc":"https://image.nykee.cn/disney.jpg"},
                    {"webSrc":"https://image.nykee.cn/IMG_2484.webp","imgSrc":"https://image.nykee.cn/chj01.jpg"},
                ],
                previewImgSrc:'',
                isPreviewShow:false
            }
        },
        methods:{
            PhotoPreview(data){
//                console.log(data);
                this.previewImgSrc = data;
            }
        },
        mounted(){
            EventBus.$on('PhotoPreview',()=>{
                this.isPreviewShow = true;
            });
            EventBus.$on('imgPreClose',()=>{
                this.isPreviewShow = false;
            })
        },
        computed:{
            intros:function () {
                return this.$t("message.photoPage.intro")
            },
        },
        components: {IntroHeader,PhotoComp,PhotoPreview}
    }
</script>
<style lang="sass">
    .photo-intro
        text-align: left
        margin-top: 1.5rem
        width:  100%
        border: 1px solid #E9EBED
        padding: 1rem 1rem
        -webkit-border-radius: 2px
        -moz-border-radius: 2px
        border-radius: 2px


    .photo-intro-items
        margin-top: .3rem
        /*padding: .2rem;*/
    .photo-box
        margin-top: 2rem
</style>
