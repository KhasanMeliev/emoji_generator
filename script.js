function sadEmoji(){
  document.querySelector(".sad").style.display="block";
  document.querySelector(".body").style.display="none";
  document.querySelector(".happy").style.display="none";
  document.querySelector(".angry").style.display="none";
}
function happyEmoji(){
  document.querySelector(".happy").style.display="block";
  document.querySelector(".body").style.display="none";
  document.querySelector(".sad").style.display="none";
  document.querySelector(".angry").style.display="none";
}
function angryEmoji(){
  document.querySelector(".angry").style.display="block";
  document.querySelector(".happy").style.display="none";
  document.querySelector(".sad").style.display="none";
  document.querySelector(".body").style.display="none";
}