var elementsList = document.querySelectorAll(".counter-demo");




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

/** onVisibilityChange
 * @argument Html node + callback()
*/
function onVisibilityChange(elem, callback){
  var old_visible;
  return function(){
    var visible = isInViewPort(elem);
    if(visible != old_visible) {
      if(typeof callback == 'function') {
        callback();
      }
    }
  }
}



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


// window.addEventListener("scroll", function(){
//   for (let i = 0; i < elementsList.length; i++) {
//     var element = elementsList[i];
//     if(isInViewPort(element)){
//       console.log(element.dataset.countEnd);
//     }
//   }
// });

