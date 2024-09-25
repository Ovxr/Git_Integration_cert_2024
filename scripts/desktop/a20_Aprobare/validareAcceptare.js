var validareAcceptare = function(){
    jr_set_value('ValidareAcceptare', 1); 
    jr_set_value('ValidareRespingere', 0); 
    jr_set_value('ValidareModificare', 0); 
    jr_notify_success('Solicitarea a fost acceptata', 3); 
    
    
    jr_set_background_color('AcceptareSolicitare', '#95e670');
    jr_set_background_color('RespingereSolicitare', 'white');
    jr_set_background_color('ModificareSolicitare', 'white');
    
    jr_hide('row5');
    jr_set_value('MotivModificare', '');
    jr_set_value('MotivRespingere', '');
};