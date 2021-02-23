window.onbeforeunload = e=> { 
  // Ловим событие для Interner Explorer 
  var e = e || window.event; 
  var myMessage= "Вы действительно хотите покинуть страницу, не сохранив данные?"; 
  // Для Internet Explorer и Firefox 
  if (e) { 
    e.returnValue = myMessage; 
  } 
  // Для Safari и Chrome 
  return myMessage; 
}; 
