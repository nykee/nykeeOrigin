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
            // time:(new Date(this.postTime).getTime())
            time:parseInt(this.postTime)
          }
        },
        mounted(){
           // console.log(this.time);
        }
    }
</script>

<style scoped>

</style>
