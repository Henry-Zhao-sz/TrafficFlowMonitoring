var myChart_left2 = echarts.init(document.querySelector(".bar .chart"));
    // 2. 指定配置项和数据
    var option_left2 = {
        color: ["#2f89cf"],
        toolbox: {
            show: true,
            top: '0px',
            left: 'left',
            feature: {

                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        tooltip: {

            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表的大小
        grid: {
            left: "0%",
            top: "40px",
            right: "0%",
            bottom: "14%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(0,0,0,.6) ",
                    fontSize: "12"
                },
                // 不显示x坐标轴的样式，不显示x坐标轴那条线
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(0,0,0,.6) ",
                    fontSize: 12
                },
                // y轴的线条改为了 2像素
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,0,0,.3)",
                        width: 2
                    }
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(0,0,0,.3)"
                    }
                }
            }
        ],

        legend: {

            y: 'top',
            //data: ['东部地区', '西部地区', '中部地区','东北地区'],
            left: 'right'
        },

        series: [{
            name: '旅客周转量/亿人公里',
            data: [],
            type: 'bar',
            color: 'black',
            barWidth: "35%",
            barBorderRadius: 5,
            smooth: true
        }
        ]

    };
    // 3. 把配置项给实例对象
    myChart_left2.setOption(option_left2);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart_left2.resize();
    });