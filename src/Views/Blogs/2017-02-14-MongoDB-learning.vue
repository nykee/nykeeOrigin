<template>
  <div>
    MongoDB学习笔记
    ## 一、安装
    window下安装，略过不表。
    ### 创建数据库目录：
    mongod.exe --dbpath c:\data\db
    ### 将MongoDB服务器作为Windows服务运行
    mongod.exe --bind_ip yourIPadress --logpath "C:\data\dbConf\mongodb.log" --logappend --dbpath "C:\data\db" --port yourPortNumber --serviceName "YourServiceName" --serviceDisplayName "YourServiceName" --install
    参数解释：
    --bind_ip： 绑定服务IP，若绑定127.0.0.1，则只能本机访问，不指定默认本地所有IP
    --logpath： 定MongoDB日志文件，注意是指定文件不是目录
    --dbpath:   指定数据库路径
    --port:     指定服务端口号，默认端口27017
    --serviceName: 指定服务名称
    --serviceDisplayName: 指定服务名称，有多个mongodb服务时执行。
    --install: 指定作为一个Windows服务安装。
    ### MongoDB后台管理 Shell
    切换至mongodb装目录的下的bin目录，执行

    mongo
    ## 二、MongoDB命令
    show dbs                                //查看所有数据库
    use dbname                              //切换数据库
    db.dropDatabase()                       //删除数据库,默认为test
    db.collection.drop()                    //删除集合
    db.COLLECTION_NAME.insert(document)     //插入文档
    db.col.find().pretty()                  //查询结果并格式化输出

    //save() 方法通过传入的文档来替换已有文档
    db.collection.save(

  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>

</style>
