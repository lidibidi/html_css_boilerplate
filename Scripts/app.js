

window.onload = function() {
  //alert('hey hey hey');
  statusReport('hey hey hey!');

  var name = prompt('What is your name?');
  var favDrink = prompt('Who is your favorite actor');


  var contentContainer =
  document.getElementById('content');

  contentContainer.innerHTML = name + ' wants ' + character + ' to play them in the movie about their life at General Assembly';
}

function statusReport(message){
  console.log(message);
  return message;
}
