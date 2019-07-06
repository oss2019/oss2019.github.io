var opacity=0;
function show_form(obj) {
  var body = document.getElementsByTagName("body")[0];
  body.setAttribute("style", "overflow-y: visible;");

  var vic = document.getElementById(obj.id + "-form");
  vic.style.display = "block";
  MyFadeFunction();
  var element = document.getElementById('full-page-quiz');
  element.parentNode.removeChild(element);
  }
  function MyFadeFunction() {
   if (opacity<=1) {
      opacity -= .033;
      setTimeout(function(){MyFadeFunction()},100);
   }
   document.getElementById('full-page-quiz').style.opacity = opacity;
}
