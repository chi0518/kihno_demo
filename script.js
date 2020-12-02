const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
  const wrap = one('.notice') // .slide 선택
  const target = wrap.children[0] // .slide ul 선택
  const len = target.children.length // .slide li 갯수
  const height = target.clientHeight
  // .slide ul의 너비 조정
  target.style.cssText = `height:50px;line-height:50px;transition:1s`
  // .slide li의 너비 조정
  Array.from(target.children)
  .forEach(ele => ele.style.cssText = `height:50px;`)
  // 화면 전환 실행
  let pos = 0
  setInterval(() => {
    pos = (pos + 1) % len // 장면 선택
    target.style.marginTop = `${-pos * height}px`
  }, 2500) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
}
window.onload = function () {
  slide()
}

// slider
		jQuery(document).ready(function() {
			//Slide Gallery 이미지 샐랙터
			jQuery(".list_wrap ul li").click(function() {
			jQuery(this).addClass("active").siblings().removeClass();
			jQuery(".photo_img img").attr("src",jQuery(this).children("a").attr("href"));
			return false;
		});

		//Slide Gallery 슬라이딩 초기화
		jQuery(".list_wrap").width("260"*parseInt(jQuery(".list_wrap ul").size())+"px");
			jQuery(".list_wrap ul:last").prependTo(".list_wrap");

			//Silde Gallery의 prev버튼
			jQuery("button.btn_prev").click(function() {
				jQuery(".list_wrap").animate({
					marginTop:"+=700px"
				},"swing",function() {
					jQuery(".list_wrap ul:last").prependTo(".list_wrap");
					jQuery(".list_wrap").css("margin-top","-700px");
					jQuery(".list_wrap ul li").removeClass();
				});
			});
			//Silde Gallery의 next버튼
			jQuery("button.btn_next").click(function() {
				jQuery(".list_wrap").animate({
					marginTop:"-=700px"
				},"swing",function() {
					jQuery(".list_wrap ul:first").appendTo(".list_wrap");
					jQuery(".list_wrap").css("margin-top","-700px");
					jQuery(".list_wrap ul li").removeClass();
				});
			});
		});