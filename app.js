var scores , roundScores,activePlayer;
score = [0,0];
roundScores = 0;
activePlayer = 1;




document.querySelector('.dice').style.display='none';

document.querySelector('btn-roll').addEventListener('click',function (){
    
   var dice = Math.floor(Math.random()*6)+1;
   document.querySelector('.dice').style.display='block';
    
});