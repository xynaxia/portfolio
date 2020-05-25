
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