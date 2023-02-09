// ****** ANIMATION SCROLL *********
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
   (scrollY > 100)
      ? navbar.classList.add('navbar_anim')
      : navbar.classList.remove('navbar_anim');
})

// ******** Onload Img Event ******
const photo = document.querySelector('.photo img');
const casquette = document.querySelector('.casquette');
const quote = document.querySelector('.quote')

window.addEventListener('load', () => {
   photo.classList.add('photo-anim');
   casquette.classList.add('casquette-anim');
})
window.addEventListener('scroll', () => {
   (scrollY > 20)
   ? quote.classList.add('quote-anim')
   : quote.classList.remove('quote-anim');
})

// *******************MENU RESPONSIVE****************************************
const hambourg = document.querySelector('.hambourg');
const menu_modal = document.querySelector('.menu-modal');
const inner_modal = document.querySelector('.inner-modal');
const close = inner_modal.querySelector('.close');
const liens = inner_modal.querySelectorAll('a');

function opneModal(){
   // hambourg.classList.toggle('active');
   menu_modal.classList.add('open')
   document.body.style.overflow = 'hidden'
}

function closeModal(){
   menu_modal.classList.remove('open')
   document.body.style.overflow = 'visible'
}

hambourg.addEventListener('click', opneModal);
 close.addEventListener('click', closeModal);

// ***** Click Outside **********
 menu_modal.addEventListener('click', (e) => {
    const oustside = !e.target.closest('.inner-modal');
    if(oustside){
     closeModal()
    }
 });

 liens.forEach(lien => lien.addEventListener('click', closeModal));


// ********************************************************************
const pageUp = document.querySelector('.Page_Up');
const hero2 = document.querySelector('.hero2');

const span = hero2.querySelector('.span');
const p = hero2.querySelector('.p');
const para = hero2.querySelector('.paragraphe2');

window.addEventListener('scroll', () => {
   (scrollY > 270)? span.classList.add('span_anim') : span.classList.remove('span_anim');
   if(scrollY > 300){
      p.classList.add('p_anim');
      para.classList.add('paragraphe2_anim');
   }
   else{
      p.classList.remove('p_anim');
      para.classList.remove('paragraphe2_anim');
   }
})
window.addEventListener('scroll', () => {
   (scrollY > 230)
   ? pageUp.classList.add('pageUp') 
   : pageUp.classList.remove('pageUp');
});

// *****************Levels******************
const box = document.querySelectorAll('.box');
window.addEventListener('load', () => {
   box.forEach(item => {
      let numContent = item.querySelector('.num');
      let num = parseInt(numContent.innerText)
      let count = 0;

      setInterval(() => {
         if(count == num){
            clearInterval();
         }
         else{
            count++;
            numContent.innerText = count;
         }
      }, 25)
   })
})

// ********* Annimation des blogs de services **********************
const observe1 = new IntersectionObserver((entries) => {
   for( const entry of entries){
      (entry.isIntersecting)
      ? entry.target.classList.add('blog_anim')
      : entry.target.classList.remove('blog_anim');
   }
},{
   threshold: .7
})
observe1.observe(document.querySelector('.container_blogs .blog1'));
observe1.observe(document.querySelector('.container_blogs .blog2'));

// ********* Annimation des blogs de skill levels **********************
const observe2 = new IntersectionObserver((entries) => {
   for( const entry of entries){
      (entry.isIntersecting)
      ? entry.target.classList.add('box-anim')
      : entry.target.classList.remove('box-anim');
      if(entry.isIntersecting){
         entry.target.classList.add('titre_tech_anim')
      }
      else{
         entry.target.classList.remove('titre_tech_anim')
      }
   }
},{
   threshold: .7
})
observe2.observe(document.querySelector(' .box1'))
observe2.observe(document.querySelector(' .box2'))
observe2.observe(document.querySelector(' .box4'))
observe2.observe(document.querySelector(' .box5'))
observe2.observe(document.querySelector(' .box6'))
observe2.observe(document.querySelector(' .box7'))
observe2.observe(document.querySelector(' .titre_tech'))

// ********* Annimation des blogs de Works **********************
const observe3 = new IntersectionObserver((entries) => {
   for( const entry of entries){
      (entry.isIntersecting)
      ? entry.target.classList.add('titre-anim')
      : entry.target.classList.remove('titre-anim');
      if(entry.isIntersecting){
         entry.target.classList.add('projet_Wrapp-anim');
      }
      else{
         entry.target.classList.remove('projet_Wrapp-anim');
      }
   }
},{
   threshold: .7
})
observe3.observe(document.querySelector('.boitee1'))
observe3.observe(document.querySelector('.boitee2'))
observe3.observe(document.querySelector('.boitee3'))
observe3.observe(document.querySelector('.boitee4'))
observe3.observe(document.querySelector('.boitee5'))
observe3.observe(document.querySelector('.title-done-projets'))

// ********* Annimation des paragraphes de About ***********************
const obsever4 = new IntersectionObserver((entries) => {
   for( const entry of entries){
      (entry.isIntersecting)
      ? entry.target.classList.add('p-to-observe')
      : entry.target.classList.remove('p-to-observe');

      if(entry.isIntersecting){
         entry.target.classList.add('h2-to-observe');
      }
      else{
         entry.target.classList.remove('h2-to-observe')
      }
   }
}, {
   threshold: 1
})
obsever4.observe(document.querySelector('#para0-to-observe'));
obsever4.observe(document.querySelector('#para1-to-observe'));
obsever4.observe(document.querySelector('#para2-to-observe'));
obsever4.observe(document.querySelector('.Titre-to-observe'));

const textEl = document.querySelector('.text .text1');
let text1 = `I am Elie...`;
let speedEl = document.querySelector('#speed');
let index = 1;
let speed = 300/0.4;

writtingText1()

function writtingText1(){
   textEl.innerText = text1.slice(0, index);
   index++;

   if(index > text1.length){
      index = 1
   }

   setTimeout(writtingText1, speed);
}

speedEl.addEventListener('input', (e) => {
   speed = 300/e.target.value;
})
