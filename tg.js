/* Fonction executée après le chargement de la page HTMLAllCollection. */
function load(){
    /* 
    Objet mouse ayant une méthode:
    - computeCoord qui produit les coordonnées de la souris à chaque fois que la
    souris survole la zone bleue claire.
    - displayCoord qui met à jour les coordonnées dans les champs du 
    tableau qui suit la zone. */

    mouse ={}
    mouse.computeCoord=function(mousemoveEvent){
        mouse.x = mousemoveEvent.clientX;
        mouse.y = mousemoveEvent.clientY;
    }
    mouse.displayCoord=function(){
        let {x,y} = mouse;
        xmouse.textContent = x;
        ymouse.textContent = y;
    }

    /* On enrichit l'objet DOM fuyard automatiquement produit à partir du bouton HTML 
    d'identifiant fuyard d'une méthode:
    - computeCoord qui ajoute les valeurs de sa position et de sa largeur et hauteur comme
    attributs de l'objets.
    - center qui déplace le bouton au centre de la zone bleue claire.
    - displayCoord qui met à jour les coordonnées dans les champs du 
    tableau qui suit la zone.
    - Les 4 méthodes de fuyard.inzone renvoit un booléen qui exprime
    si la souris pointe au voisinage gauche, droite, au dessus, en dessous
    du bouton fuyant. 
    - La méthode fuyard.move(x,y) qui déplace le bouton de x pixels vers la gauche
    et y pixels vers le bas dans la limite de la taille de la zone bleue.
    - La méthode react qui déplace le boutant fuyant à l'approche de la souris.
    
    */

    fuyard.computeCoord=function(){
        fuyard.xmin = fuyard.getBoundingClientRect().x
        fuyard.ymin = fuyard.getBoundingClientRect().y
        fuyard.width = fuyard.getBoundingClientRect().width
        fuyard.height = fuyard.getBoundingClientRect().height
        fuyard.xmax = fuyard.width+fuyard.xmin
        fuyard.ymax = fuyard.height+fuyard.ymin         
    }

    fuyard.center = function(){
        fuyard.computeCoord()
        
        let {x:xz,y:yz,width:w,height:h}=zone.getBoundingClientRect();
        let {width,height}=fuyard; 

        fuyard.style.left = (w-width)/2+"px"
        fuyard.style.top = (h-height)/2+"px"
        fuyard.computeCoord()
    }

    fuyard.center()

    fuyard.displayCoord=function(){
        
        let {xmin,ymin,xmax,ymax}=fuyard
        butxmin.textContent = xmin;
        butymin.textContent = ymin;
        butxmax.textContent = xmax;
        butymax.textContent = ymax;

    }

    function displayCoord(){
        
        fuyard.displayCoord()
        mouse.displayCoord()
    }

    fuyard.inzone={}
    fuyard.inzone.left = function(){
        
        let {x,y} = mouse;
        let {xmin,ymin,xmax,ymax}=fuyard

        return(x > xmin-20 && x < xmin && y>ymin && y<ymax)
    }

    fuyard.inzone.right = function(){
        
        let {x,y} = mouse;
        let {xmin,ymin,xmax,ymax}=fuyard
        
        return(x < xmax+20 && x > xmax && y>ymin && y<ymax)
    }

    fuyard.inzone.top = function(){
        
        let {x,y} = mouse;
        let {xmin,ymin,xmax,ymax}=fuyard
        
        return(y > ymin-20 && y < ymin && x>xmin && x<xmax)
    }

    fuyard.inzone.bottom = function(){
        
        let {x,y} = mouse;
        let {xmin,ymin,xmax,ymax}=fuyard
        
        return(y < ymax+20 && y > ymax && x>xmin && x<xmax)
    }

    fuyard.move = function(x,y){
        let {width:w,height:h}=zone.getBoundingClientRect();
        let {width,height}=fuyard;

        fuyard.style.left = Math.max(Math.min(parseFloat(fuyard.style.left)+x,w-width),0)+"px"
        fuyard.style.top = Math.max(Math.min(parseFloat(fuyard.style.top)+y,h-height),0)+"px"

    }

    fuyard.react = function(){

        let {xmin,ymin,xmax,ymax,width,height}=fuyard

        if (fuyard.inzone.left()){
            fuyard.move(20,0)
        }

        if (fuyard.inzone.right()){
            fuyard.move(-20,0)
        }

        if (fuyard.inzone.top()){
            fuyard.move(0,10)
        }

        if (fuyard.inzone.bottom()){
            fuyard.move(0,-20)
        }
    }
    

    function displayZones(){
        lz.textContent = fuyard.inzone.left()
        rz.textContent = fuyard.inzone.right();
        tz.textContent = fuyard.inzone.top();
        bz.textContent = fuyard.inzone.bottom();
    }

    /* La fonction executée à chaque evenement de survol de souris déclenché. */
    function onmousemove(mousemoveEvent){
        
        fuyard.computeCoord()
        mouse.computeCoord(mousemoveEvent)
        displayCoord()
        displayZones()
        fuyard.react()
    }

    zone.onmousemove = onmousemove

}

