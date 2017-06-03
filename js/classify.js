$.ajax({
    type:"POST",
    url:"http://datainfo.duapp.com/shopdata/getclass.php",
    dataType:"json",
    success:function(data){
        for(var i =0;i < data.length;i++){
            $div = $("<div>");
            // $img = data[i].icon;
            // $name = data[i].className;
            $div.html("<ul class='classify' classID='"+data[i].classID+"'><li>"+data[i].className+"</li><span> > </span></ul>");
            $(".content").append($div);
            $(".classify").on('click',function(){
                window.location.href="sortDetails.html?classID="+$(this).attr("classID");
            });
        };
    }

});
