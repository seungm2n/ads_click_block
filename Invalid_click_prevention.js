const clickLimit = 3;
const timeLimit = 1111000;
const accessLimit = 1000; 
let clickCount = 0;
let lastClickTime = 0;

const adsDiv = document.querySelector('.ultp-heading-inner');

  adsDiv.addEventListener('click', () => {
  const currentTime = Date.now();
  
  if (currentTime - lastClickTime <= timeLimit) {
    clickCount++;

    if (clickCount >= clickLimit) {
   adsDiv.innerHTML = "클릭 제한 초과";
   adsDiv.style.pointerEvents = "none"; 
   location.reload();
  // 페이지 접근 제한
const lastAccessTime = localStorage.getItem('lastAccessTime');
const currentTime = Date.now();

if (!lastAccessTime || currentTime - lastAccessTime >= accessLimit) {
  localStorage.setItem('lastAccessTime', currentTime);
} else {
  document.body.innerHTML = "24시간 이내에 다시 접근할 수 없습니다.";
}
  }
  } else {
    clickCount = 1;
      adsDiv.style.pointerEvents = "auto";
  }

  lastClickTime = currentTime;
});


