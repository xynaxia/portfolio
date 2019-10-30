
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
                console.log("Yes! :)");
                item.classList.add('load');
            } else {
                console.log("No :(");
            }
 
        })
    });



