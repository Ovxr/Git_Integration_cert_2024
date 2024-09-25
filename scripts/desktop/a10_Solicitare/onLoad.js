var onLoad = function(){
    if(window.location.href.indexOf("jrsimulation") > -1){
       jr_notify_warn('Galben pentru simulare', 5);
       
       jr_show_page('page99');
    }
    
    if (jr_get_value('ValidareModificare') == 1) {
        jr_show('row3');
    }
    
    if (jr_get_value('ValidareRespingere') == 1) {
        jr_show('row4');
        jr_set_readonly('DenumireSolicitare', true);
        jr_set_readonly('DescriereSolicitare', true);
        jr_set_readonly('BugetAlocat', true);
        jr_set_disabled('Produse', true);
    }
///Commited from github integration
};