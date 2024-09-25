var selectFurnizor = function(){
    var n = jr_get_subtable_count('Furnizori');
    
    console.log(n);
    
    var min = jr_get_subtable_value('Furnizori', 0, 'Pret')/jr_get_subtable_value('Furnizori', 0, 'Procentaj');
    var furnizor = jr_get_subtable_value('Furnizori', 0, 'NumeFurnizor');
    
    console.log(min);
    console.log(furnizor);
    

    for (i=1; i < n; i++) {
        var pret = jr_get_subtable_value('Furnizori', i, 'Pret');
        var procentaj = jr_get_subtable_value('Furnizori', i, 'Procentaj');
        
        var ratie = pret/procentaj;
        
        if (ratie < min) {
            min = ratie;
            furnizor = jr_get_subtable_value('Furnizori', i, 'NumeFurnizor');
        } 

    }
    
    console.log(min);
    
    jr_set_value('FurnizorAles', furnizor);


    
};