<template>
  <div>
    <Row type="flex" align="center" justify="center">
      <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
        <section  class="tag-section"   >
          <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
        </section>
        <div class="blog-content">
          <ul class="title-list">
            <li><h1 class="title">MongoDB学习笔记</h1></li>
          </ul>
          <section>
            <PostTag :postTime="postTime" />
          </section>
          <div class="main-body">
            <div id="part1" class="part">
              <div class="title-lv1"> 一、安装</div>
              <p class="descrp">window下安装，略过不表。</p>
              <p class="title-lv2"> 1.创建数据库目录：</p>
              <pre class="code-text">
            <code>
              mongod.exe --dbpath c:\data\db
            </code>
          </pre>
              <p class="title-lv2"> 2.将MongoDB服务器作为Windows服务运行</p>
              <pre class="code-text">
            <code>
             mongod.exe --bind_ip yourIPadress --logpath "C:\data\dbConf\mongodb.log" --logappend --dbpath "C:\data\db"
              --port yourPortNumber --serviceName "YourServiceName" --serviceDisplayName "YourServiceName" --install
            </code>
          </pre>
              <ul class="descrp">参数解释：
                <li>--bind_ip： 绑定服务IP，若绑定127.0.0.1，则只能本机访问，不指定默认本地所有IP</li>
                <li>--logpath： 定MongoDB日志文件，注意是指定文件不是目录</li>
                <li>--dbpath: 指定数据库路径</li>
                <li>--port: 指定服务端口号，默认端口27017</li>
                <li>--serviceName: 指定服务名称</li>
                <li>--serviceDisplayName: 指定服务名称，有多个mongodb服务时执行。</li>
                <li>--install: 指定作为一个Windows服务安装。</li>
              </ul>
              <p class="title-lv2"> 3.MongoDB后台管理 Shell</p>
              <p class="descrp">切换至mongodb装目录的下的bin目录，执行</p>
              <pre class="code-text">
            <code>
              mongo
            </code>
          </pre>
            </div>
            <div id="part2" class="part">
              <div class="title-lv1"> 二、MongoDB命令</div>
              <pre class="code-text">
            <code>
    show dbs                                //查看所有数据库
    use dbname                              //切换数据库
    db.dropDatabase()                       //删除数据库,默认为test
    db.collection.drop()                    //删除集合
    db.COLLECTION_NAME.insert(document)     //插入文档
    db.col.find().pretty()                  //查询结果并格式化输出

    //save() 方法通过传入的文档来替换已有文档
    db.collection.save(
       <span><</span>document>,
       {
         writeConcern: <span><</span>document>
       }
    )

    //remove() 方法删除文档
    db.collection.remove(
       <span><</span>query>,
       <span><</span>justOne>
    )

    //MongoDB AND 条件
    db.col.find({key1:value1, key2:value2}).pretty()

    //MongoDB OR 条件
    db.col.find(
       {
          $or: [
    	     {key1: value1}, {key2:value2}
          ]
       }
    ).pretty()

    //MongoDB (>) 大于操作符 - $gt
    db.col.find({"likes" : {$gt : 100}})       //获取 "col" 集合中 "likes" 大于 100 的数据

    //MongoDB的Limit方法，limit()方法接受一个数字参数，该参数指定从MongoDB中读取的记录条数。
    db.COLLECTION_NAME.find().limit(NUMBER)

    //除了可以使用limit()方法来读取指定数量的数据外，还可以使用skip()方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。
    db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)

    //在MongoDB中使用使用sort()方法对数据进行排序，sort()方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而-1是用于降序排列。
    db.COLLECTION_NAME.find().sort({KEY:1})

    //MongoDB使用 ensureIndex() 方法来创建索引
    db.COLLECTION_NAME.ensureIndex({KEY:1})

    //MongoDB中聚合的方法使用aggregate()
    db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)     //类似sql语句中的 count(*)

    //管道操作符实例
    //$project实例
    db.article.aggregate(
        { $project : {
            title : 1 ,
            author : 1 ,   //这样的话结果中就只还有_id,tilte和author三个字段了，默认情况下_id字段是被包含的
        }}
     );

    //$match实例
    db.articles.aggregate( [
                            { $match : { score : { $gt : 70, $lte : 90 } } },
                            { $group: { _id: null, count: { $sum: 1 } } }
                           ] );


    //MongoDB副本集设置
    mongod --port 27017 --dbpath "D:\set up\mongodb\data" --replSet rs0
    /*
    *以上实例会启动一个名为rs0的MongoDB实例，其端口号为27017。
     启动后打开命令提示框并连接上mongoDB服务。
     在Mongo客户端使用命令rs.initiate()来启动一个新的副本集。
     我们可以使用rs.conf()来查看副本集的配置
     查看副本集状态使用 rs.status() 命令
    *
    */

    //MongoDB数据备份,mongodump命令脚本语法如下：
    mongodump -h dbhost -d dbname -o dbdirectory

    //MongoDB数据恢复,mongorestore命令脚本语法如下：
    mongorestore -h <span><</span>hostname><span><</span>:port> -d dbname <span><</span>path>;

    //MongoDB 监控
    mongostat/mongotop
            </code>
          </pre>
            </div>

          </div>
        </div>

        <PagerComponent
          prvUrl="BaiduMapLearning"
          prvBgSrc="https://image.nykee.cn/bdmap.jpg"
          prvBlogTitle="百度地图学习笔记"
          next-url="FrontEndTricks"
          next-bg-src="https://image.nykee.cn/html2.jpg"
          next-blog-title="前端技巧汇总，包括CSS,JS"
        >
        </PagerComponent>
        <Comment :bid="b_id"></Comment>

      </i-col>
    </Row>

  </div>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  // import IntroHeader from '../../components/IntroHeader.vue'
  import PagerComponent from '../../components/PagerComponent'
  import mixin_PV from "../../mixins/index";
  import Comment from '../../components/BlogComment'
  import CustomTag from "../../components/CustomTag"

  export default {
    mixins:[mixin_PV],
    data() {
      return {
        postTime: '2017-02-14',
        b_id:"9",
        tags:[
          {id:1,name:"数据库"},
          {id:2,name:"MongoDB"}
        ]
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {
      /*this.$store.dispatch("getPV",{params:{id:"2"}});
      let pv_old = this.$store.state.blog.pv;
      console.log("pv_old:"+pv_old);*/
      let getPV_promise =mixin_PV.methods.getPV(this.b_id);
      let pvs;
      getPV_promise.then((v)=>{
        pvs=v;
        pvs+=1;
        let updatePV_promise= mixin_PV.methods.updatePV(this.b_id,pvs.toString());
        updatePV_promise.then((v)=>{
          console.log(v);
        })
      });
    },
    components: {PostTag,PagerComponent
      ,Comment,CustomTag}

    /*
    *
    * */
  }
</script>
<style>

</style>
