let mobileBtn = document.querySelector('.mobile-btn');
mobileBtn.addEventListener('click', function () {
  let gnb = document.querySelector('.gnb');

  //gnb.classList.add('on');
  //gnb.classList.remove('on');

  gnb.classList.toggle('on');
});

let play = document.querySelector('.play');

let current = 0;
let next = 1;
let prev = 2;

/*
  window.setInterval(함수, 시간)
  일정 시간에 한번씩 반복 실행
  시간 : 밀리초 1000ms = 1s
*/

window.setInterval(function(){

  let visualItem = document.querySelectorAll('.visual-item');

  if(next >= 3){
    next = 0;
  }

  visualItem[current].classList.remove('current', 'next');
  visualItem[current].classList.add('prev');

  visualItem[next].classList.remove('prev', 'next');
  visualItem[next].classList.add('current');

  visualItem[prev].classList.remove('current', 'prev');
  visualItem[prev].classList.add('next');

  prev = current;
  current = next;
  next++;

}, 5000);

let tabItem = document.querySelectorAll('.tab-item');
let group = document.querySelectorAll('.group');

/**
 * 반복 실행
 * 
 * 1. For loop
 *  - 횟수, 반복실행 시간 => 동시에 반복 실행
 * 2. setInterval(시간별 반복)
 *  - 일정 시간의 차이를 두고 반복 실행
 */

 /**
  * this의 의미
  * 객체 메소드내에서 사용되었때 해당 객체를 의미
  */

let activeIndex = 0;

for(let i=0;i<4;i++){
  tabItem[i].addEventListener('click', function(){
    activeIndex = i;

    // 불필요한 active class 삭제
    for(let j=0;j<4;j++){
      tabItem[j].classList.remove('active');
    }
    for(let k=0;k<3;k++){
      group[k].classList.remove('active');
    }
    
    // 클릭한 탭 활성화
    this.classList.add('active');

    // All 탭 클릭 구분
    if(activeIndex === 3){
      for(let j=0;j<3;j++){
        group[j].classList.add('active');
      }
    } else {
      group[activeIndex].classList.add('active');
    }
  });
}
