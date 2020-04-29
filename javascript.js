
    //load animation
    
    const main = document.querySelector("main");
    const loadIn = document.querySelectorAll(".loadInVp")

    window.onload = function(){
        main.classList.add("pageload");

    }

    loadIn.forEach(function(item){
        window.addEventListener('scroll', function(){
            
            const position = item.getBoundingClientRect();
             const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            const inVp = (position.top <= windowHeight) && ((position.top + position.height) >= 0);

            if (inVp){
                item.classList.add('load');
            } 
        })
    });

    //Navigation

    const navBurger = document.querySelector('#nav-icon1');
    const burgerCover = document.querySelector('.burger-cover');
    const bodyLock = document.querySelector('body');

    const contactCover = document.querySelector('.contact-cover');
    const contactBtn = document.querySelectorAll('.contact');

    navBurger.addEventListener('click', function(){
        const containsClass = contactCover.classList.toggle('active');
        navBurger.classList.toggle('open');
        burgerCover.classList.toggle('open');
        bodyLock.classList.toggle('lock');

        if (containsClass){
            contactCover.classList.remove('active');

        }
        
    });

   contactBtn.forEach(function(btn){
       btn.addEventListener('click', function(){
           
            contactCover.classList.toggle('active');
            bodyLock.classList.toggle('lock');
       });
   });

   const sentinel = document.querySelectorAll('.sentinel');
   
   sentinel.forEach(function(element, index){
       var i = 0;
           setInterval(function() {
               if(index === i){
                   element.classList.add('active');
                   element.classList.remove('hidden');
               } else if (i < 3) {
                   element.classList.add('hidden');
                   element.classList.remove('active');
               }
               if(i < 3){
               i++;
               } else {
                   i=0;
               }
           }, 3000);
       });