var yearData_right31 = [
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [33.2, 24.3, 43.0, 44.2, 43.4, 33.2, 38.4, 25.9, 34.3, 37.7, 28.2, 42.3],
                [12.2, 7.6, 15.6, 14.8, 14.5, 13.1, 14.4, 9.4, 13.8, 13.8, 10.2, 14.1],
                [26.4, 17.9, 31.9, 33.1, 34.4, 29.3, 35.4, 25.9, 29.7, 29.6, 22.5, 30.3],
                [3.2, 2.5, 5.9, 7.0, 6.9, 5.0, 6.9, 5.6, 5.8, 5.8, 3.5, 6.0]
            ]
        }
    ];
    var myChart_right31 = echarts.init(document.querySelector(".line33 .chart"));
    var option_right31 = {
        color: ["#bce9a6", "#ffe68f", "#ff9b9b", "#a1cedf"],
        toolbox: {
            show: true,
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
                type: "cross", // 默认为直线，可选为：'line' | 'shadow'
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            // 如果series 对象有name 值，则 legend可以不用写data
            // 修改图例组件 文字颜色
            textStyle: {
                color: "#111010"
            },
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
                name: '东北地区',
                smooth: true,
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: yearData_right31[0].data[3]
            },
            {
                name: '中部地区',
                smooth: true,
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: yearData_right31[0].data[1]
            },
            {
                name: '西部地区',
                smooth: true,
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: yearData_right31[0].data[2]
            },
            {
                name: '东部地区',
                smooth: true,
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: yearData_right31[0].data[0]
            }
        ]

    };
    // 3. 把配置项给实例对象
    myChart_right31.setOption(option_right31);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart_right31.resize();
    });