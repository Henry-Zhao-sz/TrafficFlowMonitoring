var yearData = [
        {
            year: "2021", // 年份
            data: [
                [2994.6, 2305.5, 4908.9, 5379.0, 5274.6, 3823.1, 4650.1, 2207.0, 3519.6, 4002.8, 2441.7, 4492.4],
                [798.5, 652.3, 1215.5, 1285.0, 1267.8, 1104.6, 1305.6, 469.1, 918.6, 1008.1, 534.5, 1056.6],
                [2155.2, 1728.6, 3103.1, 3193.4, 3342.6, 3028.4, 3491.2, 1658.0, 2485.5, 2521.2, 1235.2, 2625.3],
                [264.8, 256.8, 622.7, 667.3, 623.4, 560.0, 691.6, 297.4, 500.7, 445.9, 209.5, 544.9]
            ]
        }
    ];
    var myChart_left31 = echarts.init(document.querySelector(".line31 .chart"));
    var option_left31 = {
        color: ["#00f2f1", "#ed3f35", "#1adb3a", "#f5e90b"],
        toolbox: {
            show: true,
            top: '0px',
            left: 'right',
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
        legend: {
            // 如果series 对象有name 值，则 legend可以不用写data
            // 修改图例组件 文字颜色
            textStyle: {
                color: "#111010"
            },
            top:"30px",
            // 这个10% 必须加引号
            left: 'center'
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
        series: [
            {
                name: "东部地区",
                type: "line",
                // true 可以让我们的折线显示带有弧度
                smooth: true,
                // data: yearData[0].data[0]
                data:[]
            },
            {
                name: "中部地区",
                type: "line",
                // true 可以让我们的折线显示带有弧度
                smooth: true,
                // data: yearData[0].data[1]
                data:[]
            },
            {
                name: "西部地区",
                type: "line",
                // true 可以让我们的折线显示带有弧度
                smooth: true,
                // data: yearData[0].data[2]
                data:[]
            },
            {
                name: "东北地区",
                type: "line",
                // true 可以让我们的折线显示带有弧度
                smooth: true,
                // data: yearData[0].data[3]
                data:[]
            }
        ]

    };
    // 3. 把配置项给实例对象
    myChart_left31.setOption(option_left31);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
       myChart_left31.resize();
    });