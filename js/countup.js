/** countAnimation()
 * @argument Html node
 * @author BHA
*/

function countAnimation(elem, start, end, duration, separator, suffix){

  start = parseInt(start);
  end = parseInt(end);
  duration = parseInt(duration);

  if(!suffix){
    suffix = "";
  }

  if(!separator){
    separator = "";
  }

  var range = end - start;
  // Timer should not be less than 50ms 
  var minTimer = 50;
  // Calc step time to show all intermediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  stepTime = Math.max(stepTime, minTimer); // Return the higher value of the 2

  // Get current time and calculate End time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - (remaining * range));
    if(separator == "true"){
      value = value.toLocaleString();
      value = value.replace(",",".");
      value = value + suffix;
    }
    elem.innerHTML = value;
    if(value == end){
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();

}