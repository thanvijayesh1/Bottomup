function names(start, end) {
    for (var i = start; i < end; i++) {
      closures(i,start);
    }
  }
  
  function closures(i,start) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * (i - start + 1)); // Delay each log by 1 second
  }
  
  names(5, 10);