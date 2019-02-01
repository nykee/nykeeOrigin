<template>
    <div>
      发布于<Time :time="time" />
    </div>
</template>

<script>
    export default {
        data(){
          return {
            time:(new Date()).getTime()
          }
        }
    }
</script>

<style scoped>

</style>
