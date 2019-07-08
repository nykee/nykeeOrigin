<template>
    <div class="preview-wrapper" >
        <div class="img-slider">
            <div class="slider-img">
                <img :src="previewImgSrc" alt=""/>
            </div>
        </div>
        <span class="prev" @click="showPrev">
            <i class="fa fa-chevron-left fa-4x"></i></span>
        <span class="next" @click="showNext">
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
        props:["previewImgSrc","photos"],
        data() {
            return {
                imgIndex:0
            }
        },
        mounted(){
            EventBus.$on('PhotoPreview',(data)=>{
                this.imgIndex = data.imgIndex;
            });
            window.document.body.addEventListener("scroll",function (e) {
                e.preventDefault()
                return false
            })

        },
        methods:{
            closeModal(){
                EventBus.$emit('imgPreClose')
            },
            showNext(){
                this.imgIndex++;
                console.log(this.imgIndex);
                if(this.imgIndex === this.photos.length){
                    this.imgIndex = 1;
                }
                this.previewImgSrc = this.photos[this.imgIndex-1].imgSrc;
            },
            showPrev(){
                this.imgIndex--;
                console.log(this.imgIndex);
                if(this.imgIndex <0){
                    this.imgIndex = this.photos.length;
                }
                this.previewImgSrc = this.photos[this.imgIndex-1].imgSrc;
            }
        },
        computed:{

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
        display:flex;
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
        .img-slider{
            width: 70%;
            margin: auto;
        }
        .slider-img{



            img{
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
</style>
