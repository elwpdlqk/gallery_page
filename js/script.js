$(document).ready(function () {
	/*ga:a클릭하면 above 
	변수 apth에 내가 클릭한 작은이미지의 속성attr()인 href을 담기	
	큰 이미지의 속성의 src를 변수인 path를
	가져오기	
	a태그인 경로 이동을 막아준다
	*/
	$('.ga a').click(function () {
		var path = $(this).attr('href');
		
		$('.lag>img').attr({src : path});
		return false;
	});
});