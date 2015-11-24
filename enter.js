$(function(e) {
	$("#i").on("keypress", function(e) {
		if(e.which == 13) {
			var v = $("#i").val();
			console.log(v);
			$.get("get.php", {"url": v}, function(e) {
				var ele = $(e);
				var p = $(".plhin", ele);
				console.log(p);
				$("#area").html(p);
				$(".plsTitle").remove();
			});
		}
	});
});
