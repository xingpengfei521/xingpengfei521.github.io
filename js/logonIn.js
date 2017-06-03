$(function(){
    var arr=document.cookie.split("=");
    $("#accout").val(arr[0]);
    $("#password").val(arr[1]);
    $("#submit").on('click',function(){
        $text = $("#accout").val();
        $password = $("#password").val();
        if($text==''&&$password==''){
            $("#output").text("用户名不能为空!");
            return;
        };
        $.ajax({
            type:"POST",
            url:"http://datainfo.duapp.com/shopdata/userinfo.php",
            data:{status:"login",userID:$text,password:$password},
            dataType:"json",
            success:function(data){
                if(data==2){
                    $("#output").text("用户名密码不符!");
                }else if(data==0){
                    $("#output").text("用户名不存在!");
                }else{
                    window.location.href="homePage.html";
                }
            }
        })

    });
});

$("checkes").on('click',function(){
    setCookie($text,$password,1);
});
function setCookie(key,value,time){
    var date = new Date();
    date.setDate(date.getDate()+time);//把时间设置到传递进来的时间天数之后
    document.cookie = key + "=" + value + "; expires=" + date;
    console.log("函数内部:"+document.cookie);
}
$("#check").on('click',function(){
    if($("#check").is(":checked")){
        $("#password").attr("type","text");
    }else{
        $("#password").attr("type","password");
    }
});