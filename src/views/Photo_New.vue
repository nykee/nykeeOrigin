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
                    <PhotoComp v-for="photo in photos" :key="photo.id" :imgSrc="photo.imgSrc" @PhotoPreview="PhotoPreview" :imgIndex="photo.id"></PhotoComp>
                </Row>

            </i-col>
        </Row>
        <PhotoPreview :previewImgSrc="previewImgSrc" v-if="isPreviewShow" :photos="photos" ></PhotoPreview>

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
                    {id:1,"webSrc":"https://image.nykee.cn/yuyuan.webp","imgSrc":"https://image.nykee.cn/yuyuan.jpg"},
                    {id:2,"webSrc":"https://image.nykee.cn/maitian.webp","imgSrc":"https://image.nykee.cn/maitian.jpg"},
                    {id:3,"webSrc":"https://image.nykee.cn/nightrain.webp","imgSrc":"https://image.nykee.cn/nightrain.jpg"},
                    {id:4,"webSrc":"https://image.nykee.cn/puppy.webp","imgSrc":"https://image.nykee.cn/puppy.jpg"},
                    {id:5,"webSrc":"https://image.nykee.cn/szmuseum.webp","imgSrc":"https://image.nykee.cn/szmuseum.jpg"},
                    {id:6,"webSrc":"https://image.nykee.cn/sakura.webp","imgSrc":"https://image.nykee.cn/sakura.jpg"},
                    {id:7,"webSrc":"https://image.nykee.cn/sea.webp","imgSrc":"https://image.nykee.cn/sea.jpg"},
                    {id:8,"webSrc":"https://image.nykee.cn/boat.webp","imgSrc":"https://image.nykee.cn/boat.jpg"},
                    {id:9,"webSrc":"https://image.nykee.cn/bird.webp","imgSrc":"https://image.nykee.cn/bird.jpg"},
                    {id:10,"webSrc":"https://image.nykee.cn/car.webp","imgSrc":"https://image.nykee.cn/car.jpg"},
                    {id:11,"webSrc":"https://image.nykee.cn/sky.webp","imgSrc":"https://image.nykee.cn/sky.jpg"},
                    {id:12,"webSrc":"https://image.nykee.cn/ayada.webp","imgSrc":"https://image.nykee.cn/ayada.jpg"},
                    {id:13,"webSrc":"https://image.nykee.cn/sunset.webp","imgSrc":"https://image.nykee.cn/sunset.jpg"},
                    {id:14,"webSrc":"https://image.nykee.cn/building.webp","imgSrc":"https://image.nykee.cn/building.jpg"},
                    {id:15,"webSrc":"https://image.nykee.cn/building2.webp","imgSrc":"https://image.nykee.cn/building2.jpg"},
                    {id:16,"webSrc":"https://image.nykee.cn/towercrane.webp","imgSrc":"https://image.nykee.cn/towercrane.jpg"},
                    {id:17,"webSrc":"https://image.nykee.cn/windmill.webp","imgSrc":"https://image.nykee.cn/windmill.jpg"},
                    {id:18,"webSrc":"https://image.nykee.cn/yellow.webp","imgSrc":"https://image.nykee.cn/yellow.jpg"},
                    {id:19,"webSrc":"https://image.nykee.cn/look.webp","imgSrc":"https://image.nykee.cn/look.jpg"},
                    {id:20,"webSrc":"https://image.nykee.cn/flower.webp","imgSrc":"https://image.nykee.cn/flower.jpg"},
                    {id:21,"webSrc":"https://image.nykee.cn/IMG_2297.webp","imgSrc":"https://image.nykee.cn/IMG_2297.jpg"},
                    {id:22,"webSrc":"https://image.nykee.cn/IMG_2481.webp","imgSrc":"https://image.nykee.cn/IMG_2481.jpg"},
                    {id:23,"webSrc":"https://image.nykee.cn/IMG_2484.webp","imgSrc":"https://image.nykee.cn/IMG_2484.jpg"},
                    {id:24,"webSrc":"https://image.nykee.cn/IMG_2484.webp","imgSrc":"https://image.nykee.cn/disney.jpg"},
                    {id:25,"webSrc":"https://image.nykee.cn/IMG_2484.webp","imgSrc":"https://image.nykee.cn/chj01.jpg"},
                    {id:25,"webSrc":"https://image.nykee.cn/Snapseed 2.jpg","imgSrc":"https://image.nykee.cn/Snapseed 2.jpg"},
                    {id:25,"webSrc":"https://image.nykee.cn/Snapseed.jpg","imgSrc":"https://image.nykee.cn/Snapseed.jpg"},
                ],
                previewImgSrc:'',
                isPreviewShow:false,
            }
        },
        methods:{
            PhotoPreview(data){
//                console.log(data);
                this.previewImgSrc = data;
            }
        },
        mounted(){

            EventBus.$on('PhotoPreview',(data)=>{
                this.previewImgSrc = data.imgSrc;
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
