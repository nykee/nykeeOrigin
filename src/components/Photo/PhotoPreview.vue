<template>
    <div class="preview-wrapper" >
        <div class="img-slider" >
            <div class="slider-img" id="slider-img">
                <img v-lazy="previewImgSrc" alt="" id="slider-img-img" :style="imgMarginTop"/>
            </div>
        </div>
        <span class="prev" @click="showPrev">
            <i :class="arrowLeftSize"></i></span>
        <span class="next" @click="showNext">
            <i :class="arrowRightSize"></i>
        </span>
        <span class="cls-btn" @click="closeModal">
            <i :class="clsBtnSize"></i>
        </span>
    </div>
</template>
<script>
    import EventBus from '../../utils/EventBus'
    export default {
        props:["previewImgSrc","photos"],
        inject:['isMobile'],
        data() {
            return {
                imgIndex:0,
                size:this.isMobile?"fa-2x":'fa-3x',
                imgMarginTop:{
                    'margin-top':'0px'
                }
            }
        },
        mounted(){
            console.log("AA");
            let  self  = this;
            EventBus.$on('PhotoPreview',(data)=>{
                this.imgIndex = data.imgIndex;
            });
            window.document.body.addEventListener("scroll",function (e) {
                e.preventDefault();
                return false
            });
            window.document.body.addEventListener("keyup",function (e) {
                if(e.keyCode ===27){
                    self.closeModal();
                }
                else if(e.keyCode ===37){
                    self.showPrev();
                }
                else if(e.keyCode ===39){
                    self.showNext();
                }
            });
            self.adjustImgMargin();

//            console.log(style_silderimg_box.height);


        },
        methods:{
            adjustImgMargin(){
                let self = this;
                let silderimg_box = document.getElementById("slider-img");
                let slider_img_img = document.getElementById("slider-img-img");
                let style_silderimg_box = window.getComputedStyle(silderimg_box, null);
                let style_slider_img;
                slider_img_img.onload=function () {
                    let container_height = style_silderimg_box.height;
                    container_height = container_height.slice(0,container_height.lastIndexOf('px'));
                    style_slider_img = window.getComputedStyle(slider_img_img, null);
                    let ele_height = style_slider_img.height;
                    ele_height = ele_height.slice(0,ele_height.lastIndexOf('px'));
                    let mt = (container_height-ele_height)/2;
//                    console.log(mt);
                    self.imgMarginTop.marginTop =mt+'px';
//                    console.log(self.imgMarginTop)
                    console.log("adjust")

//                console.log(style_slider_img.height);
                };

            },
            closeModal(){
                EventBus.$emit('imgPreClose')
            },
            showNext(){
                this.imgIndex++;
                if(this.imgIndex === this.photos.length){
                    this.imgIndex = 1;
                }
                this.previewImgSrc = this.photos[this.imgIndex-1].imgSrc;
                this.adjustImgMargin();
            },
            showPrev(){
                this.imgIndex--;
                if(this.imgIndex <0){
                    this.imgIndex = this.photos.length;
                }
                this.previewImgSrc = this.photos[this.imgIndex-1].imgSrc;
                this.adjustImgMargin();
            }
        },
        computed:{
            arrowLeftSize:function () {
               return "fa fa-chevron-left "+this.size;
            },
            arrowRightSize:function () {
                return "fa fa-chevron-right "+this.size;
            },
            clsBtnSize:function () {
                return "fa fa-close "+this.size;
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
            top: 10px;
        }
        /*.img-slider{*/
            /*width: 70%;*/
            /*margin: auto;*/
        /*}*/
        /*@media screen and(max-width: 425px){*/
            /*.img-slider{*/
                /*width: 98%;*/
                /*margin: auto;*/
            /*}*/
        /*}*/
        .slider-img{
            width: 70%;
            margin: 0 auto;
            height: 100%;
            text-align: center;
            img{
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
</style>
