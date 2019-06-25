<template>
        <div @click="showPreviewModal">
            <i-col :lg="{span:8}"
                   :md="{span:8}"
                   :sm="{span:8}"
                   :xs="{span:24}" class="img-container cur-po" >
                <img :src="imgSrc" alt="">
            </i-col>
        </div>
</template>
<script>

    export default {
        props:["imgSrc"],
        data() {
            return {}
        },
        methods:{
            showPreviewModal(){
                this.$emit("PhotoPreview",this.imgSrc)
            }
        },
        components: {

        }
    }
</script>
<style lang="scss" scoped="scoped">
    .img-container {
        overflow: hidden;
        img{
            height: 16rem;
            width: 100%
        }
        img:hover{
         transition: all .2s ease-in-out;
            transform: scale(1.2);
         }
    }




</style>
