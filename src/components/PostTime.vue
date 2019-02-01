<template>
    <div>
      发布于<Time :time="time" type="date"/>
    </div>
</template>

<script>
    export default {
        props:["postTime"],
        data(){
          return {
            time:(new Date(this.postTime))
          }
        },
        mounted(){
//            console.log(new Date(this.postTime));
        }
    }
</script>

<style scoped>

</style>
