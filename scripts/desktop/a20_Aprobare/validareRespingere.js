var validareRespingere = function(){
    jr_set_value('MotivRespingere', '');
    jr_set_value('MotivModificare', '');
    
    jr_set_value('ValidareAcceptare', 0); 
    jr_set_value('ValidareRespingere', 1); 
    jr_set_value('ValidareModificare', 0); 
    jr_notify_error('Solicitarea a fost respinsa', 3);
    
    jr_set_background_color('AcceptareSolicitare', 'white');
    jr_set_background_color('RespingereSolicitare', '#ff6c6c');
    jr_set_background_color('ModificareSolicitare', 'white');
    
    jr_show('row5');
    jr_hide('column9');
    jr_set_value('MotivModificare', '');
    jr_show('column10');
    
};