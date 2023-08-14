let body = document.querySelector('body');
let button = document.querySelector('button')
const colors = ['linear-gradient(90deg, rgba(180,58,91,1) 0%, rgba(143,253,29,1) 50%, rgba(252,176,69,1) 100%)',
'linear-gradient(90deg, rgba(58,64,180,1) 0%, rgba(143,253,29,1) 50%, rgba(252,176,69,1) 100%)',
'linear-gradient(90deg, rgba(180,58,132,1) 0%, rgba(143,253,29,1) 50%, rgba(252,176,69,1) 100%)','linear-gradient(90deg, rgba(180,58,132,1) 0%, rgba(112,201,19,1) 50%, rgba(252,176,69,1) 100%)','linear-gradient(90deg, rgba(180,58,132,1) 0%, rgba(25,25,25,1) 50%, rgba(252,176,69,1) 100%)']

body.style.background= 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(143,253,29,1) 50%, rgba(252,176,69,1) 100%)';

button.addEventListener('click',function(){
   const colorindex= parseInt(Math.random()*colors.length);
   body.style.background = colors[colorindex]; 
});

