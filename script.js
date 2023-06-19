document.addEventListener("DOMContentLoaded", function() {
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var colorboxText = document.querySelector(".colorbox p");
  
    var progressbarItems = document.querySelectorAll(".progressbar p");
  // progressbar 아이템에 대한 클릭 이벤트 처리
    for (var i = 0; i < progressbarItems.length; i++) {
      progressbarItems[i].addEventListener("click", function() {
        var progressbarText = this.textContent;
        colorboxText.textContent = progressbarText + " : color";
  // 모든 progressbar 아이템의 배경색을 초기화
        for (var j = 0; j < progressbarItems.length; j++) {
          progressbarItems[j].style.backgroundColor = "#f5f5f5";
        }
  // 클릭된 progressbar 아이템의 배경색을 변경
        this.style.backgroundColor = "#292929";
  // progressbar의 p태그에 따라 color1과 color2의 배경색 설정
        if (progressbarText === "토(TOE)") {
          color1.style.backgroundColor = "rgb(39, 39, 39)";
          color2.style.backgroundColor = "rgb(187, 0, 0)";
        } else if (progressbarText === "쿼터 (Quarters)") {
          color1.style.backgroundColor = "rgb(255, 0, 0)";
          color2.style.backgroundColor = "rgb(0, 255, 0)";
        } else if (progressbarText === "힐 (Heel)") {
          color1.style.backgroundColor = "rgb(0, 0, 255)";
          color2.style.backgroundColor = "rgb(255, 255, 0)";
        } else if (progressbarText === "바인딩 (Binding)") {
          color1.style.backgroundColor = "rgb(255, 0, 255)";
          color2.style.backgroundColor = "rgb(0, 255, 255)";
        }
      });
    }
  });
  
  
  // color1의 배경색에 따라서 customImage의 img를 바꿔주는 코드
  document.addEventListener("DOMContentLoaded", function() {
    var color1 = document.querySelector(".color1");
    var customImage = document.getElementById("customImage");
  
    color1.addEventListener("click", function() {
      var backgroundColor = color1.style.backgroundColor;
  
      if (backgroundColor === "rgb(255, 0, 0)") {
        customImage.src = "custom/7.png";
      } else if (backgroundColor === "rgb(39, 39, 39)") {
        customImage.src = "custom/3.png";
      } else if (backgroundColor === "rgb(0, 0, 255)") {
        customImage.src = "custom/6.png";
      } else if (backgroundColor === "rgb(255, 0, 255)") {
        customImage.src = "custom/5.png";
      }
    });
  });
  // color2의 배경색에 따라서 customImage의 img를 바꿔주는 코드
  document.addEventListener("DOMContentLoaded", function() {
    var color2 = document.querySelector(".color2");
    var customImage = document.getElementById("customImage");
  
    color2.addEventListener("click", function() {
      var backgroundColor = color2.style.backgroundColor;
  
      if (backgroundColor === "rgb(187, 0, 0)") {
        customImage.src = "custom/4.png";
      } else if (backgroundColor === "rgb(0, 255, 0)") {
        customImage.src = "custom/8.png";
      } else if (backgroundColor === "rgb(255, 255, 0)") {
        customImage.src = "custom/9.png";
      } else if (backgroundColor === "rgb(0, 255, 255)") {
        customImage.src = "custom/10.png";
      }
    });
  });
  
  