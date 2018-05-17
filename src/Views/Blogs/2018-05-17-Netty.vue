<template>
  <div>
    <ul class="title-list">
      <li ><h1 class="title">Netty心跳机制</h1></li>
    </ul>
    <div class="main-body">
      <br id="part3" class="part">
        <div class="title-lv1">1、Netty应用心跳和重连的整个过程:</div>
        <p  class="descrp">
          <p class="descrp">1）客户端连接服务端</p>

          <p class="descrp">2）在客户端的的ChannelPipeline中加入一个比较特殊的IdleStateHandler，设置一下客户端的写空闲时间，例如5s</p>

          <p class="descrp">3）当客户端的所有ChannelHandler中4s内没有write事件，则会触发userEventTriggered方法（上文介绍过）</p>

          <p class="descrp">4）我们在客户端的userEventTriggered中对应的触发事件下发送一个心跳包给服务端，检测服务端是否还存活，防止服务端已经宕机，客户端还不知道</p>

          <p class="descrp">5）同样，服务端要对心跳包做出响应，其实给客户端最好的回复就是“不回复”，这样可以服务端的压力，假如有10w个空闲Idle的连接，那么服务端光发送心跳回复，则也是费事的事情，那么怎么才能告诉客户端它还活着呢，其实很简单，因为5s服务端都会收到来自客户端的心跳信息，那么如果10秒内收不到，服务端可以认为客户端挂了，可以close链路</p>

          <p class="descrp">6）加入服务端因为什么因素导致宕机的话，就会关闭所有的链路链接，所以作为客户端要做的事情就是断线重连</p>

      <section class="descrp">
        <div class="title-lv1">2、Netty具体详解:</div>
        <p class="descrp">在Netty中提供了IdleStateHandler类来进行心跳的处理，它可以对一个 Channel 的 读/写设置定时器, 当 Channel 在一定事件间隔内没有数据交互时(即处于 idle 状态), 就会触发指定的事件。</p>

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
      </section>
    </div>






    <PostTag :posttime="postTime"></PostTag>

  </div>





</template>

<script>
  import PostTag from '../../components/PostTag.vue'
    export default {
        data() {

            return {
              postTime:'2017-05-17'
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {PostTag}
    }
</script>
<style>

</style>
