/*!
 *
 *  "On se resserre, et maintenant qu'on l'a connaît, on va chanter la chanson des sardines ! Attention ! Allez !"
 *
 *  Version   : 0.0.1
 *  Date      : 2013-06-21
 *  Author    : Pascal RONDON
 *  Contact   : ark@arkdev.fr
 *  Web site  : http://www.arkdev.fr
 *
 *  Copyright (c) 2013 Pascal RONDON
 *  All rights reserved.
 *
 */

function haQuEstCeQuOnEstSerre() 
{
    var MIN_HEIGHT = 30,
        MIN_WIDTH = 30,
        MAX_HEIGHT = 350,
        MAX_WIDTH = 350;
  
    var CSS_BASE_CLASS = "sardines",
        CSS_OTHER_CLASSES = ["sardine1", "sardine2", "sardine3"];

    var CSS_FILE = '//sardines.arkdev.fr/cdn/sardines.css',
        MUSIC_FILE = '//sardines.arkdev.fr/cdn/sardines.wav';

    var sardinesEntreLHuileEtLesAromates = [];    
    
    function auFondDeCetteBoite() {
        var onSeRassembleA5Ou6Ou7 = document.getElementsByTagName("*");
        for (var i=0; i<onSeRassembleA5Ou6Ou7.length; i++) {
            var sardine = onSeRassembleA5Ou6Ou7[i],
                boite = {
                    height: sardine.offsetHeight,
                    width: sardine.offsetWidth
                };
            if (boite.height > MIN_HEIGHT && boite.height < MAX_HEIGHT && boite.width > MIN_WIDTH && boite.width < MAX_WIDTH) {
                sardinesEntreLHuileEtLesAromates.push(sardine);
            }
        }
        
        var pourEtreEncorePlusHeureux = document.createElement("link");
        pourEtreEncorePlusHeureux.id = "css_sardines";
        pourEtreEncorePlusHeureux.type = "text/css";
        pourEtreEncorePlusHeureux.rel = "stylesheet";
        pourEtreEncorePlusHeureux.href = CSS_FILE;
        document.head.appendChild(pourEtreEncorePlusHeureux);
    }
    
    function FautDabordDesParolesDebilesDebiles(){
        var chansonFacileFacile = document.createElement('audio');
        chansonFacileFacile.src = MUSIC_FILE;
        chansonFacileFacile.loop = true;
        chansonFacileFacile.play();
    }
  
    function CestFaitPourSeToucherSeFrotterLesAretes(sardine){
        sardine.className += " "+CSS_BASE_CLASS+" "+CSS_OTHER_CLASSES[Math.floor(Math.random()*CSS_OTHER_CLASSES.length)];
    }
  
    function chantentLesSardines(){
        FautDabordDesParolesDebilesDebiles();
        for (var i=0; i<sardinesEntreLHuileEtLesAromates.length; i++) {
            CestFaitPourSeToucherSeFrotterLesAretes(sardinesEntreLHuileEtLesAromates[i]);
        }
    }
    
    auFondDeCetteBoite();
    chantentLesSardines();
}