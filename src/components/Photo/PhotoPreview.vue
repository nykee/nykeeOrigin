<template>
    <div class="preview-wrapper" >
        <div class="img-slider">
            <div class="slider-img">
                <img :src="imgSrc" alt=""/>
            </div>
        </div>
        <span class="prev">
            <i class="fa fa-chevron-left fa-4x"></i></span>
        <span class="next">
            <i class="fa fa-chevron-right fa-4x"></i>
        </span>
        <span class="cls-btn" @click="closeModal">
            <i class="fa fa-close fa-3x"></i>
        </span>
    </div>
</template>
<script>
    import EventBus from '../../utils/EventBus'
    export default {
        props:["previewImgSrc"],
        data() {
            return {
                imgSrc:'',
            }
        },
        mounted:()=>{
            let self = this;
            EventBus.$on('PhotoPreview',(data)=>{
                self.imgSrc = data;

            })
            console.log(self.imgSrc)
        },
        methods:{
            closeModal(){
                EventBus.$emit('imgPreClose')
            }
        },
        components: {}
    }
</script>
<style scoped lang="scss">
    .preview-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9000;
        background: rgba(0,0,0,.7);
        width: 100%;
        height: 100%;
    .prev,.next,.cls-btn{
        color: #fff;
        cursor: pointer;
    }
        .prev{
            position: absolute;
            top:50%;
            left:40px;
        }
        .next{
            position: absolute;
            right:40px;
            top:50%;
        }
        .cls-btn{
            position: absolute;
            right: 50px;
            top: 30px;
        }
        .slider-img{
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>
