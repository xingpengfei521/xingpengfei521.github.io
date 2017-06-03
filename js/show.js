$(".left").on('click',function(){
    window.location.href="homePage.html";
});
// console.log(1);
//解析传的参数
GetQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};
$.ajax({
    type:"POST",
    url:"http://datainfo.duapp.com/shopdata/getGoods.php",
    data:{goodsID:GetQueryString("goodsID")},
    dataType:"jsonp",
    success:function(data){
        //console.log(data);
        for(var i=0;i<data.length;i++){
            var show = eval(data[i].goodsBenUrl);
            for(var j=0;j<show.length;j++){
                $show1 = show[j];
                break;
            }
            $div = $("<div></div>");
            $div.html("<div><img src='"+$show1+"'><p>'"+data[i].detail+"'</p></div>");
            $(".content").append($div);
            $('.show').on('click',function(){
                window.location.href="show.html?goodsID="+$(this).attr("goodsID");
            })
        }
    }
})
