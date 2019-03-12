<template>
    <Row type="flex" align="center" justify="center">

        <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
          <section  class="tag-section"   >
            <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
          </section>
            <ul class="title-list">
                <li><h1 class="title">Netty心跳机制</h1></li>
            </ul>
          <section>
            <PostTag :postTime="postTime" />
          </section>
            <div class="main-body">
                <br id="part3" class="part">
                <div class="title-lv1">1、Netty应用心跳和重连的整个过程:</div>
                <p class="descrp">
                <p class="descrp">1）客户端连接服务端</p>

                <p class="descrp">2）在客户端的的ChannelPipeline中加入一个比较特殊的IdleStateHandler，设置一下客户端的写空闲时间，例如5s</p>

                <p class="descrp">3）当客户端的所有ChannelHandler中4s内没有write事件，则会触发userEventTriggered方法（上文介绍过）</p>

                <p class="descrp">4）我们在客户端的userEventTriggered中对应的触发事件下发送一个心跳包给服务端，检测服务端是否还存活，防止服务端已经宕机，客户端还不知道</p>

                <p class="descrp">
                    5）同样，服务端要对心跳包做出响应，其实给客户端最好的回复就是“不回复”，这样可以服务端的压力，假如有10w个空闲Idle的连接，那么服务端光发送心跳回复，则也是费事的事情，那么怎么才能告诉客户端它还活着呢，其实很简单，因为5s服务端都会收到来自客户端的心跳信息，那么如果10秒内收不到，服务端可以认为客户端挂了，可以close链路</p>

                <p class="descrp">6）加入服务端因为什么因素导致宕机的话，就会关闭所有的链路链接，所以作为客户端要做的事情就是断线重连</p>

                <section class="descrp">
                    <div class="title-lv1">2、Netty具体详解:</div>
                    <p class="descrp">在Netty中提供了IdleStateHandler类来进行心跳的处理，它可以对一个 Channel 的 读/写设置定时器, 当 Channel 在一定事件间隔内没有数据交互时(即处于
                        idle 状态), 就会触发指定的事件。</p>

                    <p class="descrp">该类可以对三种类型的超时做心跳机制检测：</p>
                    <pre class="code-text">
          <code>
            public IdleStateHandler(int readerIdleTimeSeconds, int writerIdleTimeSeconds, int allIdleTimeSeconds) {
            this((long)readerIdleTimeSeconds, (long)writerIdleTimeSeconds, (long)allIdleTimeSeconds, TimeUnit.SECONDS);
            }
          </code>
          </pre>
                    <ul class="descrp">
                        <li>readerIdleTimeSeconds：设置读超时时间；</li>
                        <li> writerIdleTimeSeconds：设置写超时时间；</li>
                        <li>allIdleTimeSeconds：同时为读或写设置超时时间；</li>
                    </ul>
                    下面我们还是通过一个例子来讲解IdleStateHandler的使用。<br>

                    服务端：
                    <pre class="code-text">
          <code>
            public class HeartBeatServer {
    private int port;

    public HeartBeatServer(int port) {
        this.port = port;
    }

    public void start(){
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workGroup = new NioEventLoopGroup();

        ServerBootstrap server = new ServerBootstrap().group(bossGroup,workGroup)
                .channel(NioServerSocketChannel.class)
                .childHandler(new HeartBeatServerChannelInitializer());

        try {
            ChannelFuture future = server.bind(port).sync();
            future.channel().closeFuture().sync();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }finally {
            bossGroup.shutdownGracefully();
            workGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) {
        HeartBeatServer server = new HeartBeatServer(7788);
        server.start();
    }
}
          </code>
        </pre>

                    服务端Initializer：<br>
                    <pre class="code-text">
          <code>
            public class HeartBeatServerChannelInitializer extends ChannelInitializer &lt;SocketChannel&gt; {
    @Override
    protected void initChannel(SocketChannel socketChannel) throws Exception {
        ChannelPipeline pipeline = socketChannel.pipeline();

        pipeline.addLast("handler",new IdleStateHandler(3, 0, 0, TimeUnit.SECONDS));
        pipeline.addLast("decoder", new StringDecoder());
        pipeline.addLast("encoder", new StringEncoder());
        pipeline.addLast(new HeartBeatServerHandler());
    }
}
          </code>
        </pre>
                    在这里IdleStateHandler也是handler的一种，所以加入addLast。我们分别设置4个参数：读超时时间为3s，写超时和读写超时为0，然后加入时间控制单元。
                    <br>服务端handler：
                    <pre class="code-text">
          <code>
           public class HeartBeatServerHandler extends ChannelInboundHandlerAdapter{
    private int loss_connect_time = 0;

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        System.out.println(ctx.channel().remoteAddress() + "Server :" + msg.toString());
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if(evt instanceof IdleStateEvent){
            //服务端对应着读事件，当为READER_IDLE时触发
                IdleStateEvent event = (IdleStateEvent)evt;
            if(event.state() == IdleState.READER_IDLE){
                loss_connect_time++;
                System.out.println("接收消息超时");
                if(loss_connect_time > 2){
                    System.out.println("关闭不活动的链接");
                    ctx.channel().close();
                }
            }else{
                super.userEventTriggered(ctx,evt);
            }
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }
}
}
          </code>
        </pre>

                    我们看到在handler中调用了userEventTriggered方法，IdleStateEvent的state()方法一个有三个值：
                    <br>READER_IDLE，WRITER_IDLE，ALL_IDLE。正好对应读事件写事件和读写事件。

                    再来写一下客户端：<br>
                    <pre class="code-text">
          <code>
          public class HeartBeatsClient {
    private  int port;
    private  String address;

    public HeartBeatsClient(int port, String address) {
        this.port = port;
        this.address = address;
    }

    public void start(){
        EventLoopGroup group = new NioEventLoopGroup();

        Bootstrap bootstrap = new Bootstrap();
        bootstrap.group(group)
                .channel(NioSocketChannel.class)
                .handler(new HeartBeatsClientChannelInitializer());

        try {
            ChannelFuture future = bootstrap.connect(address,port).sync();
            future.channel().closeFuture().sync();
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            group.shutdownGracefully();
        }

    }

    public static void main(String[] args) {
        HeartBeatsClient client = new HeartBeatsClient(7788,"127.0.0.1");
        client.start();
    }
}
          </code>
        </pre>

                    客户端Initializer：<br>
                    <pre class="code-text">
          <code>
       public class HeartBeatsClientChannelInitializer extends  ChannelInitializer&lt;SocketChannel&gt; {

    protected void initChannel(SocketChannel socketChannel) throws Exception {
        ChannelPipeline pipeline = socketChannel.pipeline();

        pipeline.addLast("handler", new IdleStateHandler(0, 3, 0, TimeUnit.SECONDS));
        pipeline.addLast("decoder", new StringDecoder());
        pipeline.addLast("encoder", new StringEncoder());
        pipeline.addLast(new HeartBeatClientHandler());
    }
}
          </code>
        </pre>
                    这里我们设置了IdleStateHandler的写超时为3秒，客户端执行的动作为写消息到服务端，服务端执行读动作。<br>
                    客户端handler:
                    <pre class="code-text">
          <code>
       public class HeartBeatClientHandler extends ChannelInboundHandlerAdapter {

    private static final ByteBuf HEARTBEAT_SEQUENCE = Unpooled.unreleasableBuffer(Unpooled.copiedBuffer("Heartbeat",
            CharsetUtil.UTF_8));

    private static final int TRY_TIMES = 3;

    private int currentTime = 0;

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        System.out.println("激活时间是："+new Date());
        System.out.println("链接已经激活");
        ctx.fireChannelActive();
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        System.out.println("停止时间是："+new Date());
        System.out.println("关闭链接");
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        System.out.println("当前轮询时间："+new Date());
        if (evt instanceof IdleStateEvent) {
                IdleStateEvent event = (IdleStateEvent) evt;
            if (event.state() == IdleState.WRITER_IDLE) {
                if(currentTime <= TRY_TIMES){
                    System.out.println("currentTime:"+currentTime);
                    currentTime++;
                    ctx.channel().writeAndFlush(HEARTBEAT_SEQUENCE.duplicate());
                }
            }
        }
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        String message = (String) msg;
        System.out.println(message);
        if (message.equals("Heartbeat")) {
            ctx.write("has read message from server");
            ctx.flush();
        }
        ReferenceCountUtil.release(msg);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }
}
          </code>
        </pre>

                    我们再来屡一下思路：
                    <ul>
                        <li>1.首先客户端激活channel，因为客户端中并没有发送消息所以会触发客户端的IdleStateHandler，它设置的写超时时间为3s；</li>
                        <li>2.然后触发客户端的事件机制进入userEventTriggered方法，在触发器中计数并向客户端发送消息；</li>
                        <li>3.服务端接收消息；</li>
                        <li>4.客户端触发器继续轮询发送消息，直到计数器满不再向服务端发送消息；</li>
                        <li>5.服务端在IdleStateHandler设置的读消息超时时间5s内未收到消息，触发了服务端中handler的userEventTriggered方法，于是关闭客户端的链接。</li>
                    </ul>
                </section>
            </div>

          <PagerComponent
            prvUrl="VueI18n"
            prvBgSrc="https://image.nykee.cn/i18n.jpg"
            prvBlogTitle="Vue-i18n实现国际化"
            next-url="ReactLearning"
            next-bg-src="https://image.nykee.cn/react.png"
            next-blog-title="React学习笔记"
          >
          </PagerComponent>
          <Comment :bid="b_id"></Comment>
        </i-col>
    </Row>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  import PagerComponent from '../../components/PagerComponent'
  import Comment from '../../components/BlogComment'
  import mixin_PV from "../../mixins/index";
  import CustomTag from "../../components/CustomTag"

  export default {
    mixins:[mixin_PV],
    data() {

      return {
        postTime: '2017-05-17',
        b_id:"3",
        tags:[
          {id:1,name:"后端"},
          {id:2,name:"netty"}
        ]
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {
     /* this.$store.dispatch("getPV",{params:{id:"10"}});
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
  }
</script>
<style>

</style>
