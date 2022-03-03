function get_l1_data() {
	$.ajax({
		url:"/l1",
		success: function(data) {
			option_left1.series[0].data = data.value
			myChart_left1.setOption(option_left1)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}

function get_l2_data() {
	$.ajax({
		url:"/l2",
		success: function(data) {
            option_left2.series[0].data = data.value
			myChart_left2.setOption(option_left2)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}

function get_r1_data() {
	$.ajax({
		url:"/r1",
		success: function(data) {
            option_right1.series[0].data = data.value
			myChart_right1.setOption(option_right1)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}

function get_r2_data() {
	$.ajax({
		url:"/r2",
		success: function(data) {
            option_right2.series[0].data = data.value
			myChart_right2.setOption(option_right2)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}

function get_l21_data() {
	$.ajax({
		url:"/l21",
		success: function(data) {
            option_left21.series[0].data = data.value
			myChart_left21.setOption(option_left21)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}

function get_l22_data() {
	$.ajax({
		url:"/l22",
		success: function(data) {
            option_left22.series[0].data = data.value
			myChart_left22.setOption(option_left22)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}
function get_r21_data() {
	$.ajax({
		url:"/r21",
		success: function(data) {
            option_right21.series[0].data = data.value
			myChart_right21.setOption(option_right21)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}
function get_r22_data() {
	$.ajax({
		url:"/r22",
		success: function(data) {
            option_right22.series[0].data = data.value
			myChart_right22.setOption(option_right22)
		},
		error: function(xhr, type, errorThrown) {
		}
	})
}

function get_l31_data(){
	$.ajax({
		url:"/l31",
		success: function(data) {
			option_left31.series[0].data=data.east
			option_left31.series[1].data=data.center
			option_left31.series[2].data=data.west
			option_left31.series[3].data=data.northeast
			myChart_left31.setOption(option_left31)
			console.log("success")
		},
		error:function (xhr, type, errorThrown) {
			console.log("fail")
		}
	})
}

function get_l32_data(){
	$.ajax({
		url:"/l32",
		success: function(data) {
			monthData_left32[0].data=data.Jan
			monthData_left32[1].data=data.Feb
			monthData_left32[2].data=data.Mar
			monthData_left32[3].data=data.Apr
			monthData_left32[4].data=data.May
			monthData_left32[5].data=data.June
			monthData_left32[6].data=data.July
			monthData_left32[7].data=data.Aug
			monthData_left32[8].data=data.Sep
			monthData_left32[9].data=data.Oct
			monthData_left32[10].data=data.Nov
			monthData_left32[11].data=data.Dec
			myChart_left32.setOption(option_left32)
			console.log("success")
		},
		error:function (xhr, type, errorThrown) {
			console.log("fail")
		}
	})
}

function get_c31_data(){
	$.ajax({
		url:"/c31",
		success: function(data) {
			yearData_center31.data[0]=data.east
			yearData_center31.data[1]=data.center
			yearData_center31.data[2]=data.west
			yearData_center31.data[3]=data.northeast
			myChart_center31.setOption(option_center31)
			console.log("success")
		},
		error:function (xhr, type, errorThrown) {
			console.log("fail")
		}
	})
}

function get_c32_data(){
	$.ajax({
		url:"/c32",
		success: function(data) {
			monthData_center32[0].data=data.Jan
			monthData_center32[1].data=data.Feb
			monthData_center32[2].data=data.Mar
			monthData_center32[3].data=data.Apr
			monthData_center32[4].data=data.May
			monthData_center32[5].data=data.June
			monthData_center32[6].data=data.July
			monthData_center32[7].data=data.Aug
			monthData_center32[8].data=data.Sep
			monthData_center32[9].data=data.Oct
			monthData_center32[10].data=data.Nov
			monthData_center32[11].data=data.Dec
			myChart_center32.setOption(option_center32)
			console.log("success")
		},
		error:function (xhr, type, errorThrown) {
			console.log("fail")
		}
	})
}

function get_r31_data(){
	$.ajax({
		url:"/r31",
		success: function(data) {
			yearData_right31[0].data[0]=data.east
			yearData_right31[0].data[1]=data.center
			yearData_right31[0].data[2]=data.west
			yearData_right31[0].data[3]=data.northeast
			myChart_right31.setOption(option_right31)
			console.log("success")
		},
		error:function (xhr, type, errorThrown) {
			console.log("fail")
		}
	})
}

function get_r32_data(){
	$.ajax({
		url:"/r32",
		success: function(data) {
			monthData_right32[0].data=data.Jan
			monthData_right32[1].data=data.Feb
			monthData_right32[2].data=data.Mar
			monthData_right32[3].data=data.Apr
			monthData_right32[4].data=data.May
			monthData_right32[5].data=data.June
			monthData_right32[6].data=data.July
			monthData_right32[7].data=data.Aug
			monthData_right32[8].data=data.Sep
			monthData_right32[9].data=data.Oct
			monthData_right32[10].data=data.Nov
			monthData_right32[11].data=data.Dec
			myChart_right32.setOption(option_right32)
			console.log("success")
		},
		error:function (xhr, type, errorThrown) {
			console.log("fail")
		}
	})
}

get_l1_data()
get_l2_data()
get_r1_data()
get_r2_data()
get_l21_data()
get_l22_data()
get_r21_data()
get_r22_data()
get_l31_data()
get_l32_data()
get_c31_data()
get_c32_data()
get_r31_data()
get_r32_data()