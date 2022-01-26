/*
    테스트용 함수.
    잘 작동됨.
*/
const toggleBtn = document.querySelector('.nav_icon');
const menu = document.querySelector('.nav_container');
const sign = document.querySelector('.sign_button');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sign.classList.toggle('active');
})


function openContent(evt, contentName) {
    // Declare all variables
    var i, d_day_content, d_day_title_links;
  
    // Get all elements with class="d_day_content" and hide them
    d_day_content = document.getElementsByClassName("d_day_content");
    for (i = 0; i < d_day_content.length; i++) {
      d_day_content[i].style.display = "none";
    }
  
    // Get all elements with class="d_day_title_links" and remove the class "active"
    d_day_title_links = document.getElementsByClassName("d_day_title_links");
    for (i = 0; i < d_day_title_links.length; i++) {
      d_day_title_links[i].className = d_day_title_links[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
  }