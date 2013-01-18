(function() {

  var Slugifier = exports;

  var replaceTable = {
    'á': 'a',
    'à': 'a',
    'â': 'a',
    'ã': 'a',
    'Á': 'A',
    'À': 'A',
    'Ã': 'A',
    'Â': 'A',

    'ê': 'e',
    'é': 'e',
    'É': 'E',

    'í': 'i',
    'ì': 'i',
    'î': 'i',
    'ĩ': 'i',
    'Í': 'I',
    'Ì': 'I',
    'Î': 'I',
    'Ĩ': 'I',

    'ó': 'o',
    'ò': 'o',
    'ô': 'o',
    'õ': 'o',
    'Ó': 'O',
    'Ò': 'O',
    'Ô': 'O',
    'Õ': 'O',

    'ú': 'u',
    'ù': 'u',
    'û': 'u',
    'ũ': 'u',
    'Ú': 'U',
    'Ù': 'U',
    'Û': 'U',
    'Ũ': 'U',

    'ç': 'c',
    'Ç': 'C',

    ' ' : '-'
  };

  Slugifier.toSlug = function toSlug(str) {
    if(!str) {
      return str;
    }
    return str.toLowerCase().replace(/./g, function(c) {
      var match = replaceTable[c];
      return match ? match : c;
    });;
  };

})();
