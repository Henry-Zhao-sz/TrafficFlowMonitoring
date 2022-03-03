var yearData_center31 = [
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [115.3, 83.1, 115.1, 115.7, 116.0, 112.9, 106.2, 96.8, 104.3, 108.8, 110.4, 120.2],
                [14.6, 9.5, 13.7, 14.0, 14.1, 12.9, 12.3, 11.6, 14.4, 13.5, 13.8, 15.1],
                [24.1, 15.6, 21.7, 22.9, 25.2, 24.7, 24.4, 21.2, 25.0, 23.3, 20.7, 25.9],
                [1,2,3,4,5,6,7,8,9,10,11,12]
            ]
        }
    ];
    var myChart_center31 = echarts.init(document.querySelector(".bar32 .chart"));
    var option_center31 = {
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
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["1月",
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
                    "12月"],
                axisTick: {
                    alignWithLabel: true
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
                name: '货邮吞吐量',
                type: 'bar',
                barWidth: '60%',
                data: yearData[0].data[0]
            }
        ]
    };
    // 3. 把配置项给实例对象
    myChart_center31.setOption(option_center31);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart_center31.resize();
    });
    // 5.点击切换效果
    $(".bar32 h2").on("change", "select", function () {
        // alert(1);
        var a = $('#select3').val()
        console.log(a);
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        //var obj = yearData[a];
        option_center31.series[0].data = yearData_center31[0].data[a];
        // 需要重新渲染
        myChart_center31.setOption(option_center31);
    });