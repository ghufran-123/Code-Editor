$("#run").on("click",function () {
    let htmlStr = $("#html").val();
    let cssStr = $("#css").val();
    let jssStr = $("#js").val();

    $("#output").html(htmlStr);
    $("#style").html(cssStr);
    eval(jssStr);
})