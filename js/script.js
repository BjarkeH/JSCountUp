/** isInViewPort()
 * @argument Html Node
 * @returns bool
*/
function isInViewPort(elem){
  var rect = elem.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );

}


var elementsList = document.querySelectorAll(".counter-demo");

window.addEventListener("scroll", function(){
  for (let i = 0; i < elementsList.length; i++) {
    const element = elementsList[i];

    var start = element.dataset.countStart;
    var end = element.dataset.countEnd;
    var duration = element.dataset.countDuration;
    var state = element.dataset.countExecuted;
    var separator = element.dataset.countSeparator;
    var suffix = element.dataset.countSuffix;

    if(isInViewPort(element) && element.dataset.countExecuted === "false"){
      element.dataset.countExecuted = "true";
      countAnimation(element, start, end, duration, separator, suffix);
      
    }

  }
});

