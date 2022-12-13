var listItems = document.querySelectorAll('li#foo');
if(listItems.length > 0){
  for(var i = 0; i < listItems.length;i++)
    listItems[i].id = 'bar';
}