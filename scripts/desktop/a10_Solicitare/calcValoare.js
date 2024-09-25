var calcValoare = function(rand){
//   console.log(rand);  
  
  var cant = jr_get_subtable_value('Produse', rand, 'Cantitate');
  var pretUnitar = jr_get_subtable_value('Produse', rand, 'PretUnitar');
  
//   console.log(cant, pretUnitar);
//   console.log(`cantitatea este: ${cant}\npretul unitar este: ${pretUnitar}`);
  
  var valoare = cant * pretUnitar;
  
  jr_set_subtable_value('Produse', rand, 'Valoare', valoare);
  
  
};