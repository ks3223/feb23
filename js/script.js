let poems = [
    {
        poemText:`
    <p>
    Спасибо за доблесть, смелость, отвагу,  <br>
    За то, что давали когда-то присягу,     <br>
    За то, что нас и Родину Вы защищаете,   <br>
    Что наших надежд — не омрачаете!        <br>
    <p>`,
    bg: `url(img/star.png)`
    },
    {
        poemText:`
    <p>
    В великий праздник 23 Февраля           <br>
    Желаю сил и мужества в достатке,        <br>
    Геройство проявлять день ото дня        <br>
    И за успехом мчать без пересадки!       <br>
    <p>`,
    bg: `url(img/lent.png)`
    },
    {
    poemText:`
    <p>
    Двадцать третье февраля,                <br>
    Снег к ногам ковром ложится,            <br>
    И тебе желаю я,                         <br>
    Мощным, смелым быть, как рыцарь!        <br>
    <p>`,
    bg: `url(img/tank.png)`    
        
    },
    {   
    poemText:` 
        <p>
        Мы в этот праздник в феврале,       <br>
        Спешим мужчин всех поздравлять!     <br>
        Пусть будет мир на всей земле,      <br>
        Чтоб не пришлось им воевать!        <br>
        <p>`,
        bg: `url(img/medal.png)`    
    }
]

let modal = document.querySelector("#modal");
let poem_content =document.querySelector("#poem-content");
let poem = document.querySelector("#poem");
let photo = document.querySelector("#photo");
let btn=document.querySelector("#btn");
btn.addEventListener('click',()=>{
    modal.style.display='flex';
    poems.bg.classList.add('img');
    photo.style.backgroundImage = poems[randomIndex].bg;
})
let modbtn=document.querySelector("#modbtn");
let canbtn=document.querySelector("#canbtn");
canbtn.addEventListener('click',()=>{
    modal.style.display='none';
})
modbtn.addEventListener('click',()=>{
let randomIndex;
    randomIndex=Math.floor((Math.random()*poems.length));
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
    photo.style.backgroundImage = poems[randomIndex].bg;
})