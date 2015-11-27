$(function(e) {
	if($("#i").length < 1) {
		console.log("pageNav");
		$("#area").pageNav({
			"content": $(".plhin"),
			"showNum": 10,
			"visPage": 7
		});
	}
	$("#i").on("keypress", function(e) {
		if(e.which == 13) {
			var v = $("#i").val();
			var vary = v.split("=");
			var maxPage = vary[vary.length - 1];
			maxPage = $("#end").val() || maxPage
				delete vary[vary.length - 1];
			v = vary.join("=");
			console.log(v);
			console.log("start:" + $("#start").val());
			getHtml($("#start").val());
			function getHtml(i) {
				console.log("get:" + v + i);
				$.get("get.php", {"url": v + i}, function(e) {
					var ele = $(e);
					var p = $(".plhin", ele);
					p.find(".plsTitle").remove();
					p.find(".pob.cl.y").remove();
					p.find(".pstatus").remove();
					p.find("div.article_plc_user").remove();
					p.find(".viewRate").remove();
					p.find("a").remove();
					$("#area").append(p);
					// $(".plsTitle").remove();
					// $(".pob.cl.y").remove();
					// $(".pstatus").remove();
					console.log("page:" + i + " get!");
					if(i < maxPage) {
						getHtml(parseInt(i) + 1);
					}else {
						console.log("all done!!!");
						// $("#area").pageNav({
						// 	"content": $(".plhin"),
						// 	"showNum": 10,
						// 	"visPage": 7
						// });
						var ip = $("#input").remove();
						var html = $("html").html();
						var form = [];
						form.push("<form action='download.php' method='post'>",
								"<input type='text' name='html' id='form'/>",
								"<input type='submit' value='送出表單'>",
								"</form>"
								);
						$("body").prepend(form.join(""));
						$("#form").val(html);
					}
				});
			}
			function test(index) {
				console.log(index);
			}
		}
	});
});
