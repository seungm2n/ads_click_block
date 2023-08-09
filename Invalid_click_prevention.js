  const clickLimit = 3;
  const timeLimit = 111000;
  const accessLimit = 5000; 
  let clickCount = 0;
  let lastClickTime = 0;

  const adsDiv = document.querySelector('.ultp-filter-navigation');

    adsDiv.addEventListener('click', () => {
    const currentTime = Date.now();
    
    if (currentTime - lastClickTime <= timeLimit) {
      clickCount++;

      if (clickCount >= clickLimit) {
        alert("부정클릭이 확인되었습니다.");
     adsDiv.style.pointerEvents = "none"; 
     location.reload();
      }
    } else {
      clickCount = 1;
        adsDiv.style.pointerEvents = "auto";
    }

    lastClickTime = currentTime;
  });

  // 페이지 접근 제한
  const lastAccessTime = localStorage.getItem('lastAccessTime');
  const currentTime = Date.now();
  
  if (!lastAccessTime || currentTime - lastAccessTime >= accessLimit) {
    localStorage.setItem('lastAccessTime', currentTime);
  } else {
    document.body.innerHTML = "24시간 이내에 다시 접근할 수 없습니다.";
  }
