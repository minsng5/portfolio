
//본문 바로가기
const skipToContent = document.querySelector('.quick_link');
const mainContent = document.querySelector('#main_content');

/* 
skipToContent를 클릭하면 윈도우에 스크롤을 생성한다.
스크롤양은 mainContent 가 화면상단에서 떨어진 거리를 변수명 mainContentOST에 담아서 활용
 */
skipToContent.addEventListener('click', (e)=>{
    e.preventDefault(); //링크의 속성을 막았기 때문에 #main_content가 주소줄에 안나옴
    let mainContentOST = mainContent.offsetTop;
    window.scrollTo({left:0, top:mainContentOST, behavior:'smooth'});
});

// RECENT WORKS - FILTER
let filterBtns = document.querySelectorAll('.recent_works .buttons button');
    recentList = document.querySelectorAll('.recent_works ul li');

    //열자마자 보이게
for(let rl of recentList){
    //rl.style.display = 'hidden';
    rl.classList.add('active');
}    
/*
filterBtns를 클릭하면 모든 filterBtns 에서 active를 제거하고 클릭한 그 요소에만 active 클래스명 추가

변수명 targetClass에 클릭한 그 요소의 속성중 data-filter의 값을 저장.
recentList 의 모든 항목을 보이지 않도록 한다.
targetClass의 클래스명이 있는 요소만 변수명 filteredList에 담고 그 리스트들이 보이도록 한다.
documnet.querySelector('.print')
*/

for(let fb of filterBtns){
    fb.addEventListener('click', (e)=>{
        for(let btn of filterBtns){
            btn.classList.remove('active');
        }
        e.target.classList.add('active');
        //
        let targetClass = e.target.getAttribute('data-filter');  //print
        //console.log(targetClass);
        //let filteredList = document.querySelector('.recent_works ul .print')
        let filteredList = document.querySelectorAll(`.recent_works ul .${targetClass}`);
        //console.log(filteredList);

        //모두 안보이게
        /*
        if(targetClass === 'all'){
            for(let rl of recentList){
                rl.style.display = 'block';
            }
        }else{
            for(let rl of recentList){
                rl.style.display = 'none';
            }
            for(let fl of filteredList){
                fl.style.display = 'block';
            }
        }
        */

        //
        if(targetClass === 'all'){
            for(let rl of recentList){
                //rl.style.display = 'hidden';
                rl.classList.add('active');
            }
        }else{
            for(let rl of recentList){
                rl.classList.remove('active');
            }
            /*
            for(let fl of filteredList){
                fl.classList.add('active');
            }
            */
           setTimeout(()=>{
            for(let fl of filteredList){
                fl.classList.add('active');
            }
           },100);
        }
    }); //버튼 클릭
}



// 모달

const img= document.querySelectorAll('.gallery img'),
lightBox = document.querySelector('#lightbox-overlay'),
lightBoxImg = lightBox.querySelector('img');
console.log(img);

for(var i=0 ; i < img.length; i++){
img[i].addEventListener('click',function(e){
    e.preventDefault();

    //data- 읽어오기
    //var imgNewSrc =this.getAttribute('data-lightbox');
    const imgNewSrc = e.target.getAttribute('data-lightbox');
    //console.log(imgNewSrc);

    // 모달안의 이미지의 src속성 셋팅
    lightBoxImg.setAttribute('src',imgNewSrc);
    // 모달창 보이게
    lightBox.classList.add('visible');
})

}  //end for

// 모달창안의 이미지 클릭하면 사라지게
lightBox.addEventListener('click',function(){
this.classList.remove('visible');
})