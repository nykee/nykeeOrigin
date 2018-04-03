<template>
  <div>
    <ul class="title-list">
      <li ><h1 class="title">D3 V4.0学习笔记</h1></li>
    </ul>
    <div class="main-body">
      <div id="part1" class="part">

        <div class="title-lv1">1、D3V4.0画基本图代码</div>
        <p class="descrp">D3V4.0画基本图代码</p>
        <pre class="code-text">
          <code>
           import '../../styles/common.less';
import '../../styles/index.less';
/*import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';*/
import * as d3 from "d3";

class Index {
    /**
     * test 无参考意义
     * */
    saySomething() {
        // $('[data-toggle="popover"]').popover();

        // d3.select('.dtest')
        //     .selectAll('p')
        //     .text('yyyy')
        //     .style('color','red')
        //     .style('font-size','34px')
        // var str="China";
        // d3.select('.dtest')
        //     .selectAll('p')
        //     .datum(str)
        //     .text(function (d,i) {
        //         return "第"+ i +" 个元素绑定的数据是"+ d;
        //     })
        var dataset = [1, 2, 3];
        /* d3.select('.dtest')
             .append('p')
             .text('last append')*/
        d3.select('.dtest')
            .selectAll('p')
            .data(dataset)
            .text(function (d, i) {
                return d;
            })
        /* d3.select('.dtest')
             .insert('p','#hahh')
             .text('insert')*/

        /* d3.select('body').select('#hahh')
             .remove();*/
    }
    /**
     * test 无参考意义
     * */
    drawBar() {
        let dataset = [250, 210, 170, 130, 90];
        let height = 300;
        let width = 300;
        let svg = d3.select("body")
            .append("svg")
            .attr('width', width)
            .attr('height', height)
        let reactHeight = 25;

        let linear = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([0, 250]);

        let axis = d3.axisBottom()
            .scale(linear)
            .ticks(7)

        svg.append('g')
            .attr("class", "axis")
            .attr("transform", "translate(20,130)")
            .call(axis);
        /* svg.selectAll("rect")
             .data(dataset)
             .enter()
             .append("rect")
             .attr('x',20)
             .attr('y',function (d,i) {
                 return i*reactHeight;
             })
             .attr("width",function (d) {
                 return d;
             })
             .attr("height",reactHeight-2)
             .attr('fill',"red")*/
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', 20)
            .attr('y', function (d, i) {
                return i * reactHeight;
            })
            .attr('width', function (d) {
                return linear(d);
            })
            .attr("height", reactHeight - 2)
            .attr('fill', "red");

    }
    /**
     * 测试线性比例尺
     * */
    testScaleLiner() {
        let dataset = [1.2, 2.4, 0.9, 1.5, 3.3];
        let max = d3.max(dataset);
        let min = d3.min(dataset);

        console.log(d3)

        var linear = d3.scaleLinear()
            .domain([min, max])
            .range([0, 300]);
        console.log(linear(2.5))
    }
    /**
     * 测试序数比例尺
     * */
    testOridinal() {
        let index = [0, 1, 2, 3, 4]
        let color = ['red', 'blue', 'green', 'yellow', 'black'];

        let oridinal = d3.scaleOrdinal()
            .domain(index)
            .range(color);

        console.log(oridinal(2))
    }

    /**
     * 画柱状图
     * */
    testHoldBars() {
        let width = 400;
        let height = 400;
        let svg = d3.select('body')
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        let padding = {
            left: 30,
            right: 30,
            top: 30,
            bottom: 20
        }

        let dataset = [10, 20, 30, 40, 33, 24, 12, 5];
        let temprange = d3.range(dataset.length);

        let xScale = d3.scaleLinear()
            .domain([0, temprange.length - 1])
            .range([0, width - padding.left - padding.right]);

        let yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([height - padding.top - padding.bottom, 0]);

        let xAxis = d3.axisBottom()
            .scale(xScale);

        let yAxis = d3.axisLeft()
            .scale(yScale);

        let rectPadding = 4;
        let rects = svg.selectAll('.MyRect')
            .data(dataset)
            .enter()
            .append("rect")
            .attr('class', 'MyRect')
            .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
            .attr('x', function (d, i) {
                return xScale(i) + rectPadding / 2;
                ///return xScale(i);
                // return scaleBand(i);
            })
            .attr('y', function (d) {
                //return yScale(d);
                var min = yScale.domain()[0];
                return yScale(min);

            })
            .attr('fill', 'steelblue')
            .attr('width', 20)
            .attr("height", function (d) {
                return 0;
            })
            .transition()
            .delay(function (d, i) {
                return i * 200;
            })
            .duration(2000)
            .ease(d3.easeCubicInOut)
            .attr("y", function (d) {
                return yScale(d);
            })
            .attr("height", function (d) {
                return height - padding.top - padding.bottom - yScale(d);
            });

        var texts = svg.selectAll(".MyText")
            .data(dataset)
            .enter()
            .append("text")
            .attr("class", "MyText")
            .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function (d, i) {
                return xScale(i) + rectPadding / 2;
            })
            .attr("dx", function (d, i) {
                return 0;
            })
            .attr("dy", function (d) {
                return 20;
            })
            .text(function (d) {
                return d;
            })
            .attr("y", function (d) {
                var min = yScale.domain()[0];
                return yScale(min);
            })
            .transition()
            /*.ease('bounce')*/
            .delay(function (d, i) {
                return i * 200;
            })
            .duration([2000])
            .ease(d3.easeLinear)
            .attr("y", function (d) {
                return yScale(d);
            });

        //添加x轴
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
            .call(xAxis);

        //添加y轴
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
            .call(yAxis);

        let svgDom = svg.node();

        d3.select('svg')
            .selectAll('.MyRect')
            /*.on('mouseover',function(d,i){
                let x = d3.mouse(svgDom)[0]+20;
                let y = d3.mouse(svgDom)[1];
                d3.select('.popup')
                    .style('left',x+'px')
                    .style('top',y+'px')
                    .style('display','block')
                    .select('.no')
                    .text(d)
            })
           .on('mouseout',function (d,i) {
               d3.select('.popup')
                   .style('display','none')
           })*/
            .on("mouseover", function (d, i) {
                d3.select(this)
                    .attr("fill", "yellow");
            })
            .on("mouseout", function (d, i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("fill", "steelblue");
            });
    }

    /**
     * 画饼图
     * */
    drawPie() {
        let width = 400;
        let height = 400;
        /*提供画布*/
        let svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);
        /*提供数据*/
        let dataset = [10, 20, 30];

        /*提供布局，数据转换*/
        let pie = d3.pie();
        let piedata = pie(dataset);

        console.log(piedata);

        let color = ['green', 'red', 'black'];
        let outRadius = 150;
        let innerRadius = 80;
        /*弧生成器*/
        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outRadius);
        let arcOver = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outRadius + 10);

        /* arc 可以当做一个函数使用，把 piedata 作为参数传入，即可得到路径值。*/

        /* svg中添加相应的足够数量的组元素 g*/
        let arcs = svg.selectAll('g')
            .data(piedata)
            .enter()
            .append('g')
            .style('cursor', 'pointer')
            .attr("transform", "translate(" + (width / 2) + "," + (width / 2) + ")");
        /*在g中生成path*/
        arcs.append('path')
            .attr('fill', function (d, i) {
                return color[i];
            })
            .attr('d', function (d) {
                return arc(d);
            })
            .on('mouseover', function (d, i) {
                d3.select(this).attr('d', function (d) {
                    return arcOver(d);
                })
            })
            .on('mouseout', function (d, i) {
                d3.select(this).attr('d', function (d) {
                    return arc(d);
                });
            });
        /*在g中生成tex*/
        arcs.append('text')
            .attr('transform', function (d) {
                return 'translate(' + arc.centroid(d) + ')';
            })
            .attr('text-anchor', 'middle')
            .attr('fill', '#fff')
            .text(function (d) {
                return '' + d.data + ',' + ((d.data / 60).toFixed(2)) * 100 + '%';
            })
    }

    /**
     * 画力图
     * */
    drawForce() {
        var graph = {
            "nodes": [
                {name: '桂林'},
                {name: '广州'},
                {name: '南京'},
                {name: '杭州'},
                {name: '北京'},
                {name: '上海'},
                {name: '深圳'},
                {name: '福州'},
                {name: '厦门'},
                {name: '三明'},
                {name: '长沙'},
                {name: '岳阳'},
                {name: '香港'}
            ],
            "links": [
                {"source": 0, "target": 1},
                {"source": 1, "target": 2},
                {"source": 2, "target": 0},
                {"source": 1, "target": 3},
                {"source": 3, "target": 2},
                {"source": 3, "target": 4},
                {"source": 4, "target": 5},
                {"source": 5, "target": 6},
                {"source": 5, "target": 7},
                {"source": 6, "target": 7},
                {"source": 6, "target": 8},
                {"source": 7, "target": 8},
                {"source": 9, "target": 4},
                {"source": 9, "target": 11},
                {"source": 9, "target": 10},
                {"source": 10, "target": 11},
                {"source": 11, "target": 12},
                {"source": 12, "target": 10}
            ]
        }
        var width = 960,
            height = 500;
        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);


        var force = d3.forceSimulation()
            .force("charge", d3.forceManyBody().strength(-100))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .on("tick", tick);

        var forceLink = d3.forceLink(graph.links);
        force
            .nodes(graph.nodes)
            .force("link", forceLink);
        forceLink.distance(20);
        /**
         * 画线
         * */
        var link = svg.selectAll(".link")
            .data(graph.links)
            .enter()
            .append("line")
            .attr("class", "link");

        /**
         * 画圆
         * */
        var length = graph.nodes.length.toString();

        var color = d3.schemeCategory20;
        console.log(color)
        var node = svg.selectAll(".node")
            .data(graph.nodes)
            .enter()
            .append("circle")
            .attr("class", "node")
            .attr("r", 12)
            .style('fill', function (d, i) {
                return color[i];
            })
            // .on("dblclick", dblclick)
            .call(d3.drag()
                .on("start", dragstart)
                .on("drag", dragged));
        /**
         * 画文字
         * */
        var svg_texts = svg.selectAll("text")
            .data(graph.nodes)
            .enter()
            .append("text")
            .style("fill", "black")
            .attr("dx", 0)
            .attr("dy", 0)
            .text(function (d) {
                return d.name;
            });

        console.log('graph.nodes:', graph.nodes, graph.links);

        function tick() {
            /* console.log('tick handler');*/
            link.attr("x1", function (d) {
                return d.source.x;
            })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });

            node.attr("cx", function (d) {
                return d.x;
            })
                .attr("cy", function (d) {
                    return d.y;
                });

            //更新文字坐标
            svg_texts.attr("x", function (d) {
                return d.x;
            })
                .attr("y", function (d) {
                    return d.y;
                });
        }

        function dragstart(d) {
            console.log(d3.event.active);
            if (!d3.event.active) {
                force.alphaTarget(.1).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        // function dblclick(d) {
        //   d3.select(this).classed("fixed", d.fixed = false);
        //   console.log("dblclick"+d.fixed);
        // }
        /* function dragended(d){
             // force.stop();
             if(!d3.event.active){
                 force.alphaTarget(0);
             }
             // d.fx = null;
             // d.fy = null;
         }*/
    }

    /**
     * 画炫图
     * */
    drawCord() {
        let city_name = ["北京", "上海", "广州", "深圳", "香港"];

        let population = [
            [1000, 3045, 4567, 1234, 3714],
            [3214, 2000, 2060, 124, 3234],
            [8761, 6545, 3000, 8045, 647],
            [3211, 1067, 3214, 4000, 1006],
            [2146, 1034, 6745, 4764, 5000]
        ];
        let cord_layout = d3.chord();

        cord_layout.padAngle(0.03)
            .sortSubgroups()
        let layout_test = cord_layout(population);

        /*   console.log(layout_test,'----------------');*/
        let groups = layout_test.groups;
        let chords = layout_test.splice(0, layout_test.length);
        console.log('grous，chords', groups, chords);

        let width = 600;
        let height = 600;

        let innerRadius = width / 2 * 0.7;
        let outRadius = innerRadius * 1.1;
        let color20 = d3.schemeCategory20;

        let svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var outer_arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outRadius);

        var g_outer = svg.append("g");
        /* console.log(outer_arc,'test')*/
        g_outer.selectAll("path")
            .data(groups)
            .enter()
            .append("path")
            .style("fill", function (d) {
                return color20[d.index];
            })
            .style("stroke", function (d) {
                return color20[d.index];
            })
            .attr("d", outer_arc);

        g_outer.selectAll("text")
            .data(groups)
            .enter()
            .append("text")
            .each(function (d, i) {
                d.angle = (d.startAngle + d.endAngle) / 2;
                d.name = city_name[i];
            })
            .attr("dy", ".35em")
            .attr("transform", function (d) {
                return "rotate(" + ( d.angle * 180 / Math.PI ) + ")" +
                    "translate(0," + -1.0 * (outRadius + 10) + ")" +
                    ( ( d.angle > Math.PI * 3 / 4 && d.angle < Math.PI * 5 / 4 ) ? "rotate(180)" : "");
            })
            .text(function (d) {
                return d.name;
            });
        /**
         *
         * 画连接的彩带
         *v4有改动
         * */
        let ribbon = d3.ribbon()
            .radius(innerRadius);

        svg.append('g')
            .attr('class', 'chord')
            .selectAll('path')
            .data(chords)
            .enter()
            .append('path')
            .attr('d', ribbon)
            .style('fill', function (d) {
                return color20[d.source.index]
            })
            .style('opcity', 1)
            .on('mouseover', function (d, i) {
                d3.select(this)
                    .style('fill', 'yellow')
            })
            .on('mouseout', function (d, i) {
                d3.select(this)
                    .transition()
                    .duration(1000)
                    .style('fill', color20[d.source.index]);
            })

    }

    /**
     * 画集群图 和树状图 两个图几乎一样；
     * */
    drawCluster() {
        let width = 600;
        let height = 600;

        let svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);
        let pathg=svg
            .append("g")
            .attr("transform", "translate(40,0)");
        let nodeg=svg
            .append('g')
            .attr('class','nodes-group')
            .attr("transform", "translate(40,0)");

        let text = svg
            .append('g')
            .attr('class','text-group')
            .attr("transform", "translate(40,0)");

        /*var diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.y, d.x]; });*/
        /**
         * 集群图
         * */
       /* let cluster = d3.cluster()*/
       /**
        *
        * 树状图*/
        let cluster =d3.tree()
            .size([width, height - 200]);

        function linkFun(d) {
            return "M" + d.source.y + "," + d.source.x
                + "C" + (d.source.y + d.target.y) / 2 + "," + d.source.x
                + " " + (d.source.y + d.target.y) / 2 + "," + d.target.x
                + " " + d.target.y + "," + d.target.x;
        }

        // console.log(cluster)
        d3.json('../../assets/json/area.json?t='+new Date().getTime(), function (error, root) {
            console.log(root);
            let nodes = d3.hierarchy(root);
            let haveDeal = cluster(nodes);

            /**
             * 所有节点
             * */
            let lastAfterEdit = haveDeal.descendants();
            console.log("lastAfterEdit:",lastAfterEdit);

            /**
             * 所有连线
             * */
            let links = nodes.links();

            /***    画连线*/
            var link = pathg.selectAll(".link")
                .data(links)
                .enter()
                .append("path")
                .attr("class", "link")
                .attr("d", d3.linkHorizontal()
                    .x(function(d) { return d.y; })
                    .y(function(d) { return d.x; }));
           /* var circles=nodeg.selectAll('.circle')*/
          /*  var pieg=nodeg.selectAll('g')
                .data(lastAfterEdit)
                .enter()
                .append("g")
                .attr('x',function (d) {
                    return d.x;
                })
                .attr('y',function (d) {
                    return d.y;
                })
                .attr("transform", "translate(" + (width / 2) + "," + (width / 2) + ")")
                .attr('class','pieItem')
                .append('path')*/

                /**
                 * 画圆圈
                 * */
             var circles=nodeg.selectAll('.circle')
                .data(lastAfterEdit)
                .enter()
                .append("circle")
                .attr('cx',function (d) {
                    return d.y;
                })
                .attr('cy',function (d) {
                    return d.x;
                })
                .attr("r", 10);

             /** 画文本*/
           var texts = text
               .selectAll('text')
               .data(lastAfterEdit)
               .enter()
               .append('text')
               .attr('x',function (d) {
                   return d.y;
               })
               .attr('y',function (d) {
                   return d.x;
               })
               .text(function (d) {
                   return d.data.name;
               })
               .style("text-anchor", function (d) {
                   return d.children ? "end" : "start";
               })
               .attr("dx", function (d) {
                   return d.children ? -10 : 10;
               })
               .attr('dy',function (d) {
                   return 5;

               })
        })
    }
    /**
     * 打包图
     *
     * */
    drawPack(){
        let width = 800;
        let height = 800;

        let svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('class','pack');

        d3.json('../../assets/json/city.json?t='+new Date().getTime(), function (error, root) {
            console.log(root);
            var hierarchyData = d3.hierarchy(root);
            hierarchyData.sum(function(d) {
                console.log(d)
                return d.value;
            });
            var pack = d3.pack().size([width, height]).padding(3);

            console.log('hierarchyData',hierarchyData);

            var root = pack(hierarchyData);

            console.log('root:',root);
            var nodes = root.descendants();
            console.log('nodes:',nodes);

            var gs = d3.select('svg')
                .selectAll('g')
                .data(nodes)
                .enter()
                .append('g')
                .attr("transform", function(d) {
                    return `translate(${d.x}, ${d.y})`;
                })
            gs.append('circle')
                .attr('r', function(d) {
                    return d.r;
                })
                .style("fill","rgb(31, 119, 180)")
                .attr("fill-opacity","0.4")
                .on("mouseover",function(d,i){
                    d3.select(this)
                        .style("fill","#D7FAE1");
                })
                .on("mouseout",function(d,i){
                    d3.select(this)
                        .style("fill","rgb(31, 119, 180)");
                });

            gs.filter(function(d) {
                return !d.children;
            })
            .append('text')
            .style('fill','#fff')
            .text(function(d) {
                return d.data.name;
            })


        });
    }
    /**
     *画地图
     *
     * */
    drawMap(){
        let width = 950;
        let height = 750;

        /** 颜色插入暂时还没用到*/
        var a = 'rgb(0, 0, 0)';
        var b = 'rgb(100, 100, 100)';
        var interpolator = d3.interpolateRgb(a, b);
         // 结果为 rgb(50, 50, 50)
        let tempColor=[];
        for (let i=0;i<2;i++){
            let co = d3.schemeCategory20;
            let length = co.length;
            for(let j=0;j<<>length;j++){
                tempColor.push(co[j]);
            }
        }

        let svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('class','pack')
            .attr("viewBox", "0 0 " + width + " " + height)
            .call(d3.zoom().scaleExtent([0.2,5]).on("zoom", zoomed));
        let projection = d3.geoMercator();

        /**     A 处*/
           /* .center([107, 31])
            .scale(850)
            .translate([width/2,0.68*height])*/

        let path = d3.geoPath()
            .projection(projection);

        d3.json('../../assets/json/china.geojson?t='+new Date().getTime(), function (error, root) {
            if(error)
                return console.error(error);
            console.log(root.features);

            /**    简化 A 处代码，没必要手动设置缩放，中心*/
            projection.fitSize([width, height], root);
            /**   画路径*/
            svg.selectAll('path')
                .data(root.features)
                .enter()
                .append('path')
                .attr('stroke','#000')
                .attr('stroke-width',1)
                .style('cursor','pointer')
                .attr('fill',function (d,i) {
                    return tempColor[i] ;
                })
                .attr('d',path)
                .on('mouseover',function (d,i) {
                    d3.select(this)
                        .attr('fill','yellow');
                })
                .on('mouseout',function (d,i) {
                    d3.select(this)
                        .attr('fill', tempColor[i])
                });
               /* .append("text")
                .text(function(d,i){
                    return d.properties.name;
                })
                .style('font',15)*/


                   /** 添加文字*/
                   svg.selectAll("text")
                       .data(root.features)
                       .enter()
                       .append("text")
                       .text(function(d){return d.properties.name;})
                       .attr('dx',function(d){
                           var centroid = path.centroid(d),
                               x = centroid[0];
                           return x;
                       })
                       .attr('dy',function(d){
                           var centroid = path.centroid(d),
                               y = centroid[1];
                           return y;
                       })
                       /*.attr("transform", function(d) {
                           var centroid = path.centroid(d),
                               x = centroid[0],
                               y = centroid[1];
                           return `translate(${x},${y})`;
                       })*/
                       .attr('fill','#000')
                       .attr('font-size','14px')
                       .attr('text-anchor','middle');

            });

        function zoomed() {
            console.log(d3.event);
            d3.select('body').select("svg").selectAll('path')
                .attr("transform",d3.event.transform);
            d3.select('body').select("svg").selectAll('text')
                .attr("transform",d3.event.transform);

        }
    }
}

let index = new Index();
//index.saySomething();
index.drawMap();
          </code>
        </pre>

      </div>


    </div>
    <PostTag :posttime="postTime"></PostTag>
  </div>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  export default {
    data() {
      return {
        postTime:'2017-11-08'
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
