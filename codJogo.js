const dino= document.querySelector('.dino');

var isJumping =false;

const background = document.querySelector('.background');

let position = 0;


function hendleKeyUp(event){
     if(event.keyCode ===32){
         if(isJumping===false){
       jump();
     }
    }
}

function jump(){
    
    isJumping =true;

    let upInterval = setInterval(() => {
       if(position >= 150){
           clearInterval(upInterval);

           //descendo
           let downinterval = setInterval(()=>{
               if(position <=0){
                isJumping=false;
                   clearInterval(downInterval);
                   isJumping=false;
                   
               }else{
               position -= 20;
               dino.style.bottom = position + "px";
            }

           })

       }else{

        position +=20;
        dino.style.bottom = position + "px";}
    },20);
}



//cactos
function createCactus(){
    const cactus= document.createElement('div');

    let cactusPosition=1000;
    let randomTime= Math.random()*6000;

    cactus.classList.add('cactus');

    cactus.style.left=1000+'px';
    background.appendChild(cactus);

    let leftInterval= setInterval(()=>{
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition >  0 && cactusPosition <60 && position <60){
            clearInterval(leftInterval);
            document.body.innerHTML='<h1 class="game-over"> Fim de Jogo</h1>';

        }else{
        cactusPosition -=10;
        cactus.style.left = cactusPosition + 'px';}
    },20);

        setTimeout(createCactus, randomTime);
            
            
        }
    


createCactus();

document.addEventListener('keyup',hendleKeyUp);