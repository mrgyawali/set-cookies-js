function fadeInFunction() {
  $(".message-us").hide();
  $(".close-button").hide();
  setTimeout(() => {
    $(".message-us").fadeIn(500);
    $(".close-button").fadeIn(500);
  }, 3000);
}

//set the cookie with name: value and expire date
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

//getting the cookie
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//check the cookie ==> use conditions to set cookie or anything else
function checkCookie() {
  const cookie_msg = getCookie("noShowMsg"); //get cookie
  if (cookie_msg === "" || cookie_msg === null) {
    // if cookie doesn't exists ==> setCookie("name", "value", exp-days)
    fadeInFunction();
    setCookie("noShowMsg", "yes", 3); // will set the cookie when page is loaded for the first time
    document.querySelector(".close-button").addEventListener("click", hideInfo);
  } else {
    let elms = document.querySelectorAll(".message-us, .close-button"); //if cookie is already there then these elements will not be displayed
    elms.forEach(el => (el.style.display = "none"));
  }
}

function hideInfo() {
  $(".message-us").fadeOut();
  $(".close-button").fadeOut();
}

checkCookie();
