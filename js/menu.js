$(document).ready(function () {

	var gnbA, gnbB;
	gnbA = $('header>#gnb>li>a');//메인메뉴	
	gnbB = $('header>#gnb>li>ul');//서브메뉴
	
	function imgOver(t) {
		//이미지 선택
		$(t).find('img').attr('src', $(t).find('img').attr('src').replace('out', 'over'));
		//메뉴2(매게변수)의 자손요소 중 'img'요소를 찾아라.
		//src속성값을 넣어라
	}
	function imgOut(t) {
		//이미지 원래이미지
		$(t).find('img').attr('src', $(t).find('img').attr('src').replace('over', 'out'));
	}
	
	
	gnbA.on('mouseenter focus', function () {//on()두개의 이벤트 적용
		if (gnbA.target) {
			$(gnbA.target).next().hide();//그전 서브메뉴
			imgOut(gnbA.target);// gnbA.targer의 메인메뉴는 원래대로 돌려라
			$(this).next().show(); //현재 메인메뉴의 서브메뉴 보여라
			imgOver(this);//현재 선택한 메인메뉴 이미지 변해라
		} else {
			$(this).next().show();
			imgOver(this);
		}
		gnbA.target = this;
	});
		
	
	gnbA.mouseleave(function () {
		imgOut(gnbA.target);
		$(this).next().hide();
	});
	
	gnbB.hover(function () {
		imgOver(gnbA.target);
		$(this).show();
	}, function () {
		imgOut(gnbA.target);
		$(this).hide();
	});
	
	
	
});