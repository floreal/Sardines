jQuery
------

    $.getScript("http://sardines.arkdev.fr/sardines.js", function(){
        haQuEstCeQuOnEstSerre();
    });


JavaScript
----------

    javascript:(function()%20{var%20url%20=%20'http://sardines.arkdev.fr/sardines.js';var%20n=document.createElement('script');n.setAttribute('language','javascript');n.setAttribute('src',url+'?t='+new%20Date().getTime());document.body.appendChild(n);setTimeout(function(){haQuEstCeQuOnEstSerre();},1000);})();
