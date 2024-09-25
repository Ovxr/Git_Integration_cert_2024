var onLoad = function(){
    if(window.location.href.indexOf("jrsimulation") > -1){
       jr_notify_warn('Galben pentru simulare', 5);
       
       jr_show_page('page99');
    }
};