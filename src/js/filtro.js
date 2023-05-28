function filterCreatures(city) {
  var creatureItems = document.getElementsByClassName('creature-item');
  
  for (var i = 0; i < creatureItems.length; i++) {
    var item = creatureItems[i];
    var itemCities = item.className.split(' ').filter(function(className) {
      return className !== 'creature-item';
    });
    
    if (itemCities.includes(city) || city === 'Todos') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}