$(function(){
	$(".btn").on("click",function(){
		var name=$(".up input").eq(0).val()
		var pass=$(".middle input").eq(0).val()
		$.ajax({
			
			data:{
				status:"register",
				userID:name,
				password:pass
			},
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			success:function(data){
				if(data==1){
					alert("注册成功")
					window.location.href="denglu.html"
				}else if(data==0){
					alert("用户名重名")
				}else if(data==2){
					alert("用户名与密码不一致")
				}
				
			}
		});
	
		
	})
	$("#fanhui").on("click",function(){
		window.location.href="../index.html"
	})
	
	
	
})