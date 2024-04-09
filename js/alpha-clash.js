
    document.getElementById('play-now').addEventListener('click', function(){
        // const home = document.getElementById('home');
        // home.classList.add('hidden');

        hideElementById('home');

        // const playGround = document.getElementById('play-ground');
        // playGround.classList.remove('hidden');

        showElementById('play-ground');

        continueGame();

    })


    
