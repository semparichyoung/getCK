$(function(e) {
	$("#i").on("keypress", function(e) {
		if(e.which == 13) {
			var v = $("#i").val();
			var ip = $("#input").remove();
			var vary = v.split("=");
			var maxPage = vary[vary.length - 1];
			delete vary[vary.length - 1];
			v = vary.join("=");
			console.log(v);
			getHtml(1);
			function getHtml(i) {
				console.log("get:" + v + i);
				$.get("get.php", {"url": v + i}, function(e) {
					var ele = $(e);
					var p = $(".plhin", ele);
					p.find(".plsTitle").remove();
					p.find(".pob.cl.y").remove();
					p.find(".pstatus").remove();
					p.find("a").remove();
					$("#area").append(p);
					// $(".plsTitle").remove();
					// $(".pob.cl.y").remove();
					// $(".pstatus").remove();
					console.log("page:" + i + " get!");
					if(i < maxPage) {
						getHtml(i + 1);
					}else {
						console.log("all done!!!");
						$("#area").pageNav({
							"content": $(".plhin"),
							"showNum": 10,
							"visPage": 7
						});
					}
				});
			}
			function test(index) {
				console.log(index);
			}
		}
	});
});
