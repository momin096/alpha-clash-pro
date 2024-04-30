
    // document.getElementById('play-now').addEventListener('click', function(){
    //     // const home = document.getElementById('home');
    //     // home.classList.add('hidden');

 


    //     // const playGround = document.getElementById('play-ground');
    //     // playGround.classList.remove('hidden');



    //     // continueGame();

    // })

    function play(){
        hideElementById('home');
        hideElementById('final-score');
        showElementById('play-ground');



        // reset everything 
        setTextElementValueById('life', 5);
        setTextElementValueById('score', 0);


        continueGame();
    }

    function handleKeyboardKeyUpEvent(event){
        const playerPressed = event.key;
        // console.log(playerPressed);

        if(playerPressed === 'Escape'){
            gameOver();
        }

        // get the expeted press

        const currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText;
        const expectedAlphabet = currentAlphabet.toLowerCase();
        // console.log(expectedAlphabet);

        if(playerPressed === expectedAlphabet){
            console.log('You get a point');
            //score update
            // const currentScoreElement = document.getElementById('score');
            // const currentScoreText = currentScoreElement.innerText;
            // const currentScore  = parseFloat(currentScoreText);
            // console.log(currentScore);

            const currentScore = getElementValueById('score');

            const newScore = currentScore + 1;

            setTextElementValueById('score', newScore);
            // currentScore.innerText = newScore;


            // start a new game
            removeBackgroundColorById(expectedAlphabet);
            continueGame();
        }
        else{
            console.log('You missed. You lost a point');

            // const lifeElement = document.getElementById('life');
            // const lifeText = lifeElement.innerText;
            // const life = parseFloat(lifeText);

            const life = getElementValueById('life');

            const newLife = life - 1;

            // lifeElement.innerText = newLife;
            setTextElementValueById('life', newLife);

            if(newLife === 0){
                gameOver();

                
                // const finalScore = getElementValueById('final-score-show');
                // finalScore.innerText = score;
            }
        }
    }

document.addEventListener('keyup', handleKeyboardKeyUpEvent );


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');


    const lastScore = getElementValueById('score');

    setTextElementValueById('final-score-show', lastScore);


    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);



}