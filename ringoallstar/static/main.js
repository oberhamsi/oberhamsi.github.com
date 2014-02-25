$(document).ready(function() {
   $("h1, h2").each(function(idx, elem) {
      var $e = $(elem);
      if (!$e.attr('id')) {
         var hText = $e.text().toLowerCase().replace(/\s+/g, '-')
         $e.attr('id', hText);
      }
   });
})