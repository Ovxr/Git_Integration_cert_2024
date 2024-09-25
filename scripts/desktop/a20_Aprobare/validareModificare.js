var validareModificare = function(){
    jr_set_value('MotivRespingere', '');
    jr_set_value('MotivModificare', '');
    
    jr_set_value('ValidareAcceptare', 0); 
    jr_set_value('ValidareRespingere', 0); 
    jr_set_value('ValidareModificare', 1); 
    jr_notify_warn('Cereti modificarea solicitarii. Introduceti mai multe detalii', 5);
    
    jr_set_background_color('AcceptareSolicitare', 'white');
    jr_set_background_color('RespingereSolicitare', 'white');
    jr_set_background_color('ModificareSolicitare', '#ffc35f');
    
    jr_show('row5');
    jr_hide('column10');
    jr_set_value('MotivRespingere', '');
    jr_show('column9');
};