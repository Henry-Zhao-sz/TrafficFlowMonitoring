var monthData_right32 = [
        {
            month: "1", // 年份
            data: [33.2, 12.2, 26.4, 3.2]
        },
        {
            month: "2", // 年份
            data: [24.3, 7.6, 17.9, 2.5]
        },
        {
            month: "3", // 年份
            data: [43.0, 15.6, 31.9, 5.9]
        },
        {
            month: "4", // 年份
            data: [44.2, 14.8, 33.1, 7.0]
        },
        {
            month: "5", // 年份
            data: [43.4, 14.5, 34.4, 6.9]
        },
        {
            month: "6", // 年份
            data: [33.2, 13.1, 29.3, 5.0]
        },
        {
            month: "7", // 年份
            data: [38.4, 14.4, 35.4, 6.9]
        },
        {
            month: "8", // 年份
            data: [25.9, 9.4, 25.9, 5.6]
        },
        {
            month: "9", // 年份
            data: [34.3, 13.8, 29.7, 5.8]
        },
        {
            month: "10", // 年份
            data: [37.7, 13.8, 29.6, 5.8]
        },
        {
            month: "11", // 年份
            data: [28.2, 10.2, 22.5, 3.5]
        },
        {
            month: "12", // 年份
            data: [42.3, 14.1, 30.3, 6.0]
        }
    ];
    // 1. 实例化对象
    var myChart_right32 = echarts.init(document.querySelector(".pie33 .chart"));
    // 2.指定配置
    var option_right32 = {
        legend: {
            top: '0%'
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                name: '起落架次',
                type: 'pie',
                radius: [40, 120],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 20
                },
                data: [
                    {value: monthData_right32[0].data[0], name: '东部地区'},
                    {value: monthData_right32[0].data[1], name: '中部地区'},
                    {value: monthData_right32[0].data[2], name: '西部地区'},
                    {value: monthData_right32[0].data[3], name: '东北地区'}

                ]
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart_right32.setOption(option_right32);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart_right32.resize();
    });
    // 5.点击切换效果
    $(".pie33 h2").on("change", "select", function () {
        // alert(1);
        var a = $('#select4').val()
        console.log(a);
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = monthData_right32[a];
        option_right32.series[0].data[0].value = obj.data[0];
        option_right32.series[0].data[1].value = obj.data[1];
        option_right32.series[0].data[2].value = obj.data[2];
        option_right32.series[0].data[3].value = obj.data[3];

        // 需要重新渲染
        myChart_right32.setOption(option_right32);
    });