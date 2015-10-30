window.onload = function() {
  //alert('hey hey hey');
  statusReport('hey hey hey!');

  var name = prompt('What is your name?');
  var favdrink = prompt('What is your favorite drink?');
  var favcolor = prompt('What is your favorite color?');
  var favday = prompt('What is your favorite day of the week?');
  var snuggly = prompt('Name something soft and cuddly');

  var contentContainer =
  document.getElementById('content');

  contentContainer.innerHTML = ' Once upon a time there was a person named ' + name + ' they enjoyed taking baths in ' + favdrink + ' before they took on the day. ' +
name + ' wore ' + favcolor + ' underwear outside their pants every ' + favday + ' it helped them cope with their fear of ' +
snuggly +'.' + ' The end.';
}

function statusReport(message){
  console.log(message);
  return message;
}
