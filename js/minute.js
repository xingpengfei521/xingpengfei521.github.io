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
        //console.log(data.price);
        for(var i=0;i<data.length;i++){
            //console.log(data[i]);
            $num = data[i].discount == 0 ? data[i].price : parseInt(data[i].price / (data[i].discount / 10));
            $div = $("<div></div>");
            $div.html("<ul><li class='show' goodsID='"+data[i].goodsID+"'><img src='"+data[i].goodsListImg+"'></li><li>"+data[i].goodsName+"</li><li><span>"+data[i].price+"</span><span>"+$num+"</span></li><li>尺码:160/84A 165/88A</li><li>数量:"+data[i].buynumber+"</li></ul>");
            $(".content").append($div);
            $('.show').on('click',function(){
                window.location.href="show.html?goodsID="+$(this).attr("goodsID");
            })
        }
    }
})
