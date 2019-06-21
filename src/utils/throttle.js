export  function throttle(method,context) {
  clearTimeout(method.tId);
  method.tId=setTimeout(function(){
    method.call(context)
  },30)
}
