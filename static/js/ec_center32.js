var monthData_center32 = [
        {
            month: "1", // 年份
            data: [1,2,3,4]
        },
        {
            month: "2", // 年份
            data: [3.0, 15.6, 9.5, 83.1]
        },
        {
            month: "3", // 年份
            data: [4.4, 21.7, 13.7, 115.1]
        },
        {
            month: "4", // 年份
            data: [4.4, 22.9, 14.0, 115.7]
        },
        {
            month: "5", // 年份
            data: [4.5, 25.2, 14.1, 116.0]
        },
        {
            month: "6", // 年份
            data: [4.8, 24.7, 12.9, 112.9]
        },
        {
            month: "7", // 年份
            data: [4.0, 24.4, 12.3, 106.2]
        },
        {
            month: "8", // 年份
            data: [4.0, 21.2, 11.6, 96.8]
        },
        {
            month: "9", // 年份
            data: [5.4, 25.0, 14.4, 104.3]
        },
        {
            month: "10", // 年份
            data: [4.6, 23.3, 13.5, 108.8]
        },
        {
            month: "11", // 年份
            data: [4.3, 20.7, 13.8, 110.4]
        },
        {
            month: "12", // 年份
            data: [5.3, 25.9, 15.1, 120.2]
        }
    ];
    // 1. 实例化对象
    var myChart_center32 = echarts.init(document.querySelector(".pie32 .chart"));
    // 2.指定配置
    var option_center32 = {
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
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['东部地区', '中部地区', '西部地区', '东北地区']
        },
        series: [
            {
                name: '1月',
                type: 'bar',
                data: monthData_center32[0].data
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart_center32.setOption(option_center32);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart_center32.resize();
    });
    // 5.点击切换效果
    $(".pie32 h2").on("change", "select", function () {
        // alert(1);
        var a = $('#select2').val()
        console.log(a);
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = monthData_center32[a];
        option_center32.series[0].name = obj.month + "月"
        option_center32.series[0].data = obj.data;
        // 需要重新渲染
        myChart_center32.setOption(option_center32);
    });