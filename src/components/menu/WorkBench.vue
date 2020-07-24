<template>
    <div class="workBench">
        <Menu></Menu>
        <div class="content">
            <div class="left">
                <div class="mine-wrapper">
                    <div class="mine-title">
                        <span>我参与的</span>
                    </div>
                    <div class="mine-content">
                        <div class="mine-item">
                            <p>8月"战狼"行动</p>
                            <span>超级日租卡用户获取活动,1天1元800M循环叠加,全国流量不限顶</span>
                            <el-progress :percentage="50"></el-progress>
                        </div>
                        <div class="mine-item">
                            <p>8月"战狼"行动</p>
                            <span>超级日租卡用户获取活动,1天1元800M循环叠加,全国流量不限顶</span>
                            <el-progress :percentage="50"></el-progress>
                        </div>
                        <div class="mine-item">
                            <p>8月"战狼"行动</p>
                            <span>超级日租卡用户获取活动,1天1元800M循环叠加,全国流量不限顶</span>
                            <el-progress :percentage="50"></el-progress>
                        </div>
                    </div>
                </div>
                <div class="statistical-wrapper">
                    <div class="statistical-title">
                        <span>统计概括</span>
                    </div>
                    <div class="statistical-content" ref="statistical">
                        <div class="gold" ref="gold">

                        </div>
                        <div class="province" ref="province">

                        </div>
                    </div>

                </div>
                <!-- <el-progress :percentage="50"></el-progress> -->
            </div>
            <div class="right">
                <div class="my-msg">
                    <div class="wrap">
                        <img src="../../common/images/msg.png" alt="">
                        <span>我的消息</span>
                        <div class="tip">&nbsp;12&nbsp;</div>
                        <span class="more">更多>></span>
                    </div>
                </div>
                <div class="to-do">
                    <div class="title">
                        <span>我的待办</span>
                    </div>
                    <div class="do-content">
                        <div class="do-item">
                            <div class="item-content">地市约谈:广州市电信分局公司,关于省公司集约活动参与情况积极性问题约...</div>
                            <div class="time">2018-08-11 14:30:22</div>
                        </div>
                        <div class="do-item">
                            <div class="item-content">地市约谈:广州市电信分局公司,关于省公司集约活动参与情况积极性问题约...</div>
                            <div class="time">2018-08-11 14:30:22</div>
                        </div>
                        <div class="do-item">
                            <div class="item-content">地市约谈:广州市电信分局公司,关于省公司集约活动参与情况积极性问题约...</div>
                            <div class="time">2018-08-11 14:30:22</div>
                        </div>
                    </div>
                </div>
                <div class="dynamic">
                    <el-tabs v-model="activeName" >
                        <el-tab-pane label="公告" name="first">
                            <ul>
                                <li><span>● 超级日租卡用户获取活动</span><span>08-11</span></li>
                                <li><span>● 宽带新装限时优惠活动</span><span>08-03</span></li>
                                <li><span>● 政企专线提速</span><span>08-01</span></li>
                                <li><span>● 第三季各地市销售额季...</span><span>07-26</span></li>
                                <li><span>● 明日活动发布事项,通知...</span><span>07-17</span></li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="动态" name="second">

                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from './menu.vue'
export default {
    components:{
        Menu
    },
    props:{
        
    },
    data(){
        return {
            activeName:"first"
        }
    },
    mounted(){
        this.drawLineChart()
    },
    methods:{
        drawLine(charts) {
            let option = {
                color:['#979AE4','#F7A07A'],
                title: {
                    text: '销售目标完成情况',
                    // subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['目标销售额', '当前销售额']
                },
                toolbox: {
                    show: true,
                    // feature: {
                    //     dataView: {show: true, readOnly: false},
                    //     magicType: {show: true, type: ['line', 'bar']},
                    //     restore: {show: true},
                    //     saveAsImage: {show: true}
                    // }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '目标销售额',
                        type: 'bar',
                        data: [1300, 1456, 1227.0, 923.2, 925.6, 1276.7, 1135.6, 1456.2, 832.6, 920.0, 996.4, 993.3],
                        // markPoint: {
                        //     data: [
                        //         {type: 'max', name: '最大值'},
                        //         {type: 'min', name: '最小值'}
                        //     ]
                        // },
                        // markLine: {
                        //     data: [
                        //         {type: 'average', name: '平均值'}
                        //     ]
                        // }
                    },
                    {
                        name: '当前销售额',
                        type: 'bar',
                        data: [1332.6, 1443.9, 999.0, 826.4, 1228.7, 970.7, 1175.6, 1182.2, 948.7, 818.8, 986.0, 892.3],
                        // markPoint: {
                        //     data: [
                        //         {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                        //         {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                        //     ]
                        // },
                        // markLine: {
                        //     data: [
                        //         {type: 'average', name: '平均值'}
                        //     ]
                        // }
                    }
                ]
            };
            charts.setOption(option);
        },
        drawProvince(charts){
            let option = {
                color:['#588FFF','#E1D200'],
                title: {
                    text: '全省地市累计销售额统计'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                // legend: {
                //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                // },
                toolbox: {
                    // feature: {
                    //     saveAsImage: {}
                    // }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['珠海市', '汕头市', '佛山市', '韶关市', '湛江市', '肇庆市', '江门市','茂名市','惠州市','梅州市','汕尾市','河源市','阳江市'],
                   
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        // name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134,321,213]
                    },
                    {
                        // name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191,211,333,143]
                    },
                    
                ]
            };
            charts.setOption(option);
        },
        // 渲染柱状图
        drawLineChart(){
            const charts = this.$echarts.init(this.$refs.gold);
            this.drawLine(charts);

            const province = this.$echarts.init(this.$refs.province);
            this.drawProvince(province);
          
        }

    }
}
</script>
<style>

.workBench{
    background-color: #F4F4F4;
    height: 100%;
    width: 100%;
    /* margin-top: 70px; */
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
.workBench .content{
    margin-top: 20px;
    margin-left: 38px;
    display: flex;

}
.workBench .content .left{
    width: 80%;
}
.workBench .content .left .statistical-title,
.workBench .content .left .mine-title{
    border-left: 3px solid #547CD8;
    padding-left: 15px;
    color: #547CD8;
    margin-bottom: 10px;
}
.workBench .content .left .mine-content{
    display: flex;
    margin-bottom: 20px;
}
.workBench .content .left .mine-content .mine-item{
    /* width: 320px; */
    width: 33%;
    height: 130px;
    background-color: #8688DD;
    margin-right: 20px;
    padding: 0 25px;
    border-radius: 1%;
}
.workBench .content .left .mine-content .mine-item .el-progress{
    margin-top: 10px;
}
.workBench .content .left .statistical-content .province,
.workBench .content .left .statistical-content .gold{
    width: 98.5%;
    /* width: 1005px; */
    height: 232px;
    background-color: #fff;
    margin-bottom: 20px;
    overflow: hidden;
}
/* ===right=== */
.workBench .content .right{
    /* width: 300px; */
    margin-left: 20px;
    margin-top: -20px;
    display: flex;
    flex: 1;
    flex-direction: column;
    color: #000;
}
.workBench .content .right .my-msg{
    height: 50px;
    width: 100%;
    background-color: #fff;
    color: #000;
    line-height: 50px;
    padding: 0 15px;
}
.workBench .content .right .my-msg .wrap img{
    vertical-align: middle;
    margin-right: 10px;
}
.workBench .content .right .my-msg .wrap .tip{
    display: inline;
    border: 1px solid #f40;
    color: #F40;
    border-radius: 43%;
    font-size: 12px;
}
.workBench .content .right .my-msg .wrap .more{
    float: right;
    font-size: 12px;
    color: #818181;
}
.workBench .content .right .to-do{
    padding-right: 15px;
}
.workBench .content .right .to-do .title{
    height: 44px;
    line-height: 44px;
    border-bottom: 2px solid #ddd;
}
.workBench .content .right .to-do .do-content .do-item{
    margin-top:10px;
    background-color: #fff;
    border-left: 2px solid #ccc;
    line-height: 1.5;
    padding: 10px;
    display: block;
}
.workBench .content .right .to-do .do-content .do-item .item-content{
    height: 44px;
    word-break:break-all;
    overflow:hidden;
    text-overflow:ellipsis;

}
.workBench .content .right .to-do .do-content .do-item .time{
    margin-top: 10px;
    font-size: 12px;
    color: #B8B8B8;
}
/* ==公告,动态== */
.workBench .content .right .dynamic{
    margin-top: 50px;
    padding-right: 15px;
}
.workBench .content .right .dynamic ul>li{
    display: flex;
    justify-content: space-between;
    color: #555555;
    line-height: 2;
}
.workBench .content .right .dynamic ul>li span:last-child{
    font-size: 12px;
}
.workBench .content .right .dynamic .el-tabs__item.is-active{
    color: #000;
}
</style>