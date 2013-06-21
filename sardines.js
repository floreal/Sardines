/*!
 *
 *  "On se resserre, et maintenant qu'on l'a connaît, on va chanter la chanson des sardines ! Attention ! Allez !"
 *
 *  Version   : 0.2.1
 *  Date      : 2013-06-21
 *  Author    : Pascal RONDON
 *  Contact   : ark@arkdev.fr
 *  Web site  : http://www.arkdev.fr
 *
 *  Copyright (c) 2013 Pascal RONDON
 *  All rights reserved.
 *
 */

function Sardines(options) 
{
    var MIN_HEIGHT = 30,
        MIN_WIDTH = 30,
        MAX_HEIGHT = 350,
        MAX_WIDTH = 350;
  
    var CSS_BASE_CLASS = "sardines",
        CSS_OTHER_CLASSES = ["sardine1", "sardine2", "sardine3"];

    var CSS_FILE = '//sardines.arkdev.fr/cdn/sardines.css',
        CSS_ID = 'css_sardines',
        MUSIC_FILE = '//sardines.arkdev.fr/cdn/sardines.wav',
        MUSIC_ID = 'audio_sardines';

    var onSeResserre = function(defaults,options){
        var settings = {};
        for (var attr in defaults) {
            settings[attr] = defaults[attr];
        }
        for (var attr in options) {
            settings[attr] = options[attr];
        }
        return settings;
    }    

    var defaults = {
        loop: true,
        maxSardines: 10,
        checkSize: true
    },
    settings = onSeResserre(defaults, options);
    
    var sardinesEntreLHuileEtLesAromates = [],
        chansonFacileFacile = document.getElementById(MUSIC_ID),
        pourEtreEncorePlusHeureux = document.getElementById(CSS_ID);
        
    var auFondDeCetteBoite = function() {
        var onSeRassembleA5Ou6Ou7 = document.getElementsByTagName("*"),
            maxSardines = (settings.maxSardines!==false && settings.maxSardines<=onSeRassembleA5Ou6Ou7.length)?settings.maxSardines:onSeRassembleA5Ou6Ou7.length;
        for (var i=0; i<maxSardines; i++) {
            var sardine = onSeRassembleA5Ou6Ou7[i],
            boite = {
                height: sardine.offsetHeight,
                width: sardine.offsetWidth
            };
            if (!settings.checkSize || (boite.height > MIN_HEIGHT && boite.height < MAX_HEIGHT && boite.width > MIN_WIDTH && boite.width < MAX_WIDTH)) {
                sardinesEntreLHuileEtLesAromates.push(sardine);
            }
        }

        if(!pourEtreEncorePlusHeureux){
            pourEtreEncorePlusHeureux = document.createElement("link");
            pourEtreEncorePlusHeureux.id = CSS_ID;
            pourEtreEncorePlusHeureux.type = "text/css";
            pourEtreEncorePlusHeureux.rel = "stylesheet";
            pourEtreEncorePlusHeureux.href = CSS_FILE;
            document.head.appendChild(pourEtreEncorePlusHeureux);
        }
    }
    
    var FautDabordDesParolesDebilesDebiles = function(){
        if(!chansonFacileFacile){
            chansonFacileFacile = document.createElement('audio');
            chansonFacileFacile.id = MUSIC_ID;
            chansonFacileFacile.src = MUSIC_FILE;
            if(!settings.loop){
                chansonFacileFacile.addEventListener('ended', function(){
                    laveLesSardines();
                });
            } else {
                chansonFacileFacile.loop = true;
            }
        }
        chansonFacileFacile.play(); 
    }

    this.chantentLesSardines = function(){
        FautDabordDesParolesDebilesDebiles();
        for (var i=0; i<sardinesEntreLHuileEtLesAromates.length; i++) {
            sardinesEntreLHuileEtLesAromates[i].className += " "+CSS_BASE_CLASS+" "+CSS_OTHER_CLASSES[Math.floor(Math.random()*CSS_OTHER_CLASSES.length)];
        }
    }

    var laveLesSardines = function(){
        chansonFacileFacile.pause();
        chansonFacileFacile.currentTime = 0;
        var reg = new RegExp("("+CSS_BASE_CLASS+"|"+CSS_OTHER_CLASSES.join('|')+")", "g");
        for (var i=0; i<sardinesEntreLHuileEtLesAromates.length; i++) {
            sardinesEntreLHuileEtLesAromates[i].className = sardinesEntreLHuileEtLesAromates[i].className.replace(reg,'');
        }
    }
    
    this.stoppentLesSardines = function(){
        laveLesSardines();
    }
    
    auFondDeCetteBoite();
}

function haQuEstCeQuOnEstSerre(config){
    var sardines = new Sardines(config);
    sardines.chantentLesSardines();
}