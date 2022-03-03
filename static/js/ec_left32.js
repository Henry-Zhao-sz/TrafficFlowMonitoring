    var monthData_left32 = [
        {
            month: "1", // 年份
            data: [1,2,3,4]
        },
        {
            month: "2", // 年份
            data: [2305.5, 652.3, 1728.6, 256.8]
        },
        {
            month: "3", // 年份
            data: [4908.9, 1215.5, 3103.1, 622.7]
        },
        {
            month: "4", // 年份
            data: [5379.0, 1285.0, 3193.4, 667.3]
        },
        {
            month: "5", // 年份
            data: [5274.6, 1267.8, 3342.6, 623.4]
        },
        {
            month: "6", // 年份
            data: [3823.1, 1104.6, 3028.4, 560.0]
        },
        {
            month: "7", // 年份
            data: [4650.1, 1305.6, 3491.2, 691.6]
        },
        {
            month: "8", // 年份
            data: [2207.0, 469.1, 1658.0, 297.4]
        },
        {
            month: "9", // 年份
            data: [3519.6, 918.6, 2485.5, 500.7]
        },
        {
            month: "10", // 年份
            data: [4002.8, 1008.1, 2521.2, 445.9]
        },
        {
            month: "11", // 年份
            data: [2441.7, 534.5, 1235.2, 209.5]
        },
        {
            month: "12", // 年份
            data: [4492.4, 1056.6, 2625.3, 544.9]
        }
    ];
    // 1. 实例化对象
    var myChart_left32 = echarts.init(document.querySelector(".pie31 .chart"));
    // 2.指定配置
    var option_left32 = {
        color: ["#ee2309", "#0595e8", "#12b607", "#f5f002"],
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
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: {
            bottom: "15%",
            left: "center",
            // 修改小图标的大小
            itemWidth: 20,
            itemHeight: 20,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(0,0,0,.5)",
                fontSize: "15"
            }
        },
        series: [
            {
                name: "旅客吞吐量",
                type: "pie",
                radius: ["30%", "60%"],
                center: ["50%", "35%"],
                avoidLabelOverlap: false,
                // 图形上的文字
                label: {
                    show: false,
                    position: "center"
                },
                // 链接文字和图形的线是否显示
                labelLine: {
                    show: false
                },
                data: [
                    {value: monthData_left32[0].data[0], name: "东部地区"},
                    {value: monthData_left32[0].data[1], name: "中部地区"},
                    {value: monthData_left32[0].data[2], name: "西部地区"},
                    {value: monthData_left32[0].data[3], name: "东北地区"}
                ]
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart_left32.setOption(option_left32);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart_left32.resize();
    });
    // 5.点击切换效果
    $(".pie31 h2").on("change", "select", function () {
        // alert(1);
        var a = $('#select').val()
        console.log(a);
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = monthData_left32[a];
        option_left32.series[0].data[0].value = obj.data[0];
        option_left32.series[0].data[1].value = obj.data[1];
        option_left32.series[0].data[2].value = obj.data[2];
        option_left32.series[0].data[3].value = obj.data[3];

        // 需要重新渲染
        myChart_left32.setOption(option_left32);
    });