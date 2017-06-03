$(function(){
    $("#submit").on('click',function(){
        $test = $("#accout").val();
        $password = $("#password").val();
        $repassword = $("#repassword").val();
        if($password!==$repassword){
            $("#output").text("你俩次输入的密码不一致,请重新输入!");
            return;
        };
        if($("#check").is(":checked")) {
            $.ajax({
                type: "POST",
                url: "http://datainfo.duapp.com/shopdata/userinfo.php",
                data: {status: "register", userID: $test, password: $password},
                success: function (data) {
                    if (data == 0) {
                        $("#output").text("你注册的用户名已被占用!");
                    } else {
                        window.location.href = "logonIn.html";
                    }
                    ;
                    if ($test == '' && $password == '' && $repassword == '') {
                        $("#output").text("你的用户名不能为空");
                    }
                    ;
                }
            });
        }
    });

});