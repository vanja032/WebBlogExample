var imgPreload_01 = new Image();
imgPreload_01.src = "MyPictureLogoNEW_Edited_Square_PNG.png";
var imgPreload_02 = new Image();
imgPreload_02.src = "wood-3240764_1920.jpg";


$(document).ready(function(){
	
		$("#header_title_span").css("marginTop", -$("#header_title_span").height()/2 + "px");
		$("#header_title_span").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		$("#menu_item_01").css("marginTop", -$("#menu_item_01").height()/2 + "px");
		$("#menu_item_01").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		$("#menu_item_02").css("marginTop", -$("#menu_item_02").height()/2 + "px");
		$("#menu_item_02").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		$("#menu_item_03").css("marginTop", -$("#menu_item_03").height()/2 + "px");
		$("#menu_item_03").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		$("#my_image_picture").height($(document).width()/100*9 + "px");
		
		$("#theme_title_span").css("fontSize", $("#anchor_point_logo_img").width()/100*24 + "px");
		
		$("#my_image_logo_and_theme_title_div").css("marginTop", -$("#my_image_logo_and_theme_title_div").height()/2 + "px");
		$("#my_image_logo_and_theme_title_div").css("marginLeft", -$("#my_image_logo_and_theme_title_div").width()/2 + "px");
		
		$(".post_title_class").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*18 + "px");
		});
		
		$(".post_body_class").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*10 + "px");
		});
		
		$(".post_body_class_first_character_upper").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		});
		
		$(".under_title_post_class").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*14 + "px");
		});
		
		$("body").find("div a img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").css("display", "none");
		
		//$("body").css("display", "block");
		
		$("#about_me_span_01").css("fontSize", $("#anchor_point_logo_img").width()/100*10 + "px");
		$("#about_me_span_01_first_upper_letter_class").css("fontSize", $("#anchor_point_logo_img").width()/100*18 + "px");
		$("#name_span_about_me_id").css("fontSize", $("#anchor_point_logo_img").width()/100*21 + "px");
		$("#my_image_picture_02").height($(document).width()/100*12 + "px");
		//$("#my_image_picture_02").css("marginLeft", ($("#my_image_logo_and_theme_title_div_about_me").width() - $("#my_image_picture_02").outerWidth())/2 + "px");
		$("#my_image_picture_02").css("marginLeft", -$("#my_image_picture_02").outerWidth()/2 + "px");
	
		
	var MyInitTimer01 = setInterval(function(){
		$("#header_title_span").css("marginTop", -$("#header_title_span").height()/2 + "px");
		$("#header_title_span").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		$("#menu_item_01").css("marginTop", -$("#menu_item_01").height()/2 + "px");
		$("#menu_item_01").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		$("#menu_item_02").css("marginTop", -$("#menu_item_02").height()/2 + "px");
		$("#menu_item_02").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		$("#menu_item_03").css("marginTop", -$("#menu_item_03").height()/2 + "px");
		$("#menu_item_03").css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		
		
		$("#my_image_picture").height($(document).width()/100*9 + "px");
		$("#my_image_picture").css("opacity", 1);
		
		$("#theme_title_span").css("fontSize", $("#anchor_point_logo_img").width()/100*24 + "px");
		
		$("#my_image_logo_and_theme_title_div").css("marginTop", -$("#my_image_logo_and_theme_title_div").height()/2 + "px");
		$("#my_image_logo_and_theme_title_div").css("marginLeft", -$("#my_image_logo_and_theme_title_div").width()/2 + "px");
		
		$(".post_title_class").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*18 + "px");
		});
		
		$(".post_body_class").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*10 + "px");
		});
		
		$(".post_body_class_first_character_upper").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*17 + "px");
		});
		
		$(".under_title_post_class").each(function(){
			$(this).css("fontSize", $("#anchor_point_logo_img").width()/100*14 + "px");
		});
		
		$("body").find("div a img[src='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").css("display", "none");
		
		$("body").css("display", "block");
		$("#page").css("opacity", "1");
		
		
		/*ABOUT ME NEW PAGE FUNCTIONS JQuery*/
		
		$("#about_me_span_01").css("fontSize", $("#anchor_point_logo_img").width()/100*10 + "px");
		$("#about_me_span_01_first_upper_letter_class").css("fontSize", $("#anchor_point_logo_img").width()/100*18 + "px");
		$("#name_span_about_me_id").css("fontSize", $("#anchor_point_logo_img").width()/100*21 + "px");
		$("#my_image_picture_02").height($(document).width()/100*12 + "px");
		//$("#my_image_picture_02").css("marginLeft", ($("#my_image_logo_and_theme_title_div_about_me").width() - $("#my_image_picture_02").outerWidth())/2 + "px");
		$("#my_image_picture_02").css("marginLeft", -$("#my_image_picture_02").outerWidth()/2 + "px");	
	
		$("#my_image_picture_02").css("opacity", 1);
		
	}, 10);
});




