


// 定义一个全局变量 空数组
var list = [];
// 代码模块化 开发
// 方便管理 函数
var method = {
    // 向服务器获取数据 渲染在页面上
    load: function () {
        var load = localStorage.getItem("layin")
        if (load !== null) {
            $("#list").empty()
            list = JSON.parse(load)
            list.forEach((itme) => {
                str = `<li><p>${itme.neirong}</p><span data-sf=${itme.sf}>删除</span></li>`
                $("#list").append(str)
            });
        }
    },
    // 向服务器发起存储数据
    memory: function () {
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DOM操做
        var sf = Math.random() + "_" + Date.now()
        var va = $("#tet").val()
        var str = `<li><p>${va}</p><span data-sf=${sf}>删除</span></li>`
        $("#list").prepend(str)
        $("#tet").val("")
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 服务器存储操做
        var obj = {
            neirong: va,
            sf: sf
        }
        list.unshift(obj)
        var str = JSON.stringify(list)
        localStorage.setItem("layin", str)
    },
    // 删除操做
    delete: function () {
        $("#list").on("click", "span", function () {
            var val = $(this).attr("data-sf")
            console.log(val);
            for (var i = 0; i < list.length; i++) {
                if (list[i].sf == val) {
                    list.splice(i, 1);
                    break;
                }
            }
            var str = JSON.stringify(list)
            localStorage.setItem("layin", str)
            // 删除后在渲染刷新页面
            method.load();
        })
    },
    // 
}