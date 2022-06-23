let player = ''
let computer = ''

let score = 0;
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

const countHandler = () => {
    if (computer == 'gunting' && player == 'kertas') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Player Lose ❌'}, 2000) 
        loseCount += 1

    } else if (computer == 'gunting' && player == 'batu') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Player Win ✅'}, 2000) 
        winCount += 1
        score += 25

    } else if (computer == 'gunting' && player == 'gunting') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Draw ‼'}, 2000) 
        drawCount += 1

    } else if (computer == 'kertas' && player == 'batu') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Player Lose ❌'}, 2000) 
        loseCount += 1
        
    } else if (computer == 'kertas' && player == 'gunting') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Player Win ✅'}, 2000) 
        winCount += 1
        score += 25

    } else if (computer == 'kertas' && player == 'kertas') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Draw ‼'}, 2000) 
        drawCount += 1

    } else if (computer == 'batu' && player == 'kertas') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Player Win ✅'}, 2000) 
        winCount += 1
        score += 25

    } else if (computer == 'batu' && player == 'gunting') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Player Lose ❌'}, 2000)
        loseCount += 1

    } else if (computer == 'batu' && player == 'batu') {
        setTimeout(function(){document.getElementById('status').innerHTML = 'Draw ‼'}, 2000) 
        drawCount += 1

    };
};

const resultHandler = () => {
    setTimeout(function(){document.getElementById('win').innerHTML = `Win : ${winCount}`}, 2500)
    setTimeout(function(){document.getElementById('lose').innerHTML = `Lose : ${loseCount}`}, 2500)
    setTimeout(function(){document.getElementById('draw').innerHTML = `Draw: ${drawCount}`}, 2500)
    setTimeout(function(){document.getElementById('score').innerHTML = `Score: ${score}`}, 2500)
};



const kertasHandler = () => {
    document.getElementById('player').innerHTML = `<img src="/Picts/kertas.png" style="width: 100px;">`
    ComputerHandler()
    player = 'kertas';

    shakeOutput();
    ComputerHandler();
    countHandler();
    resultHandler();
    player = ''
    computer = ''
};

const guntingHandler = () => {
    document.getElementById('player').innerHTML = `<img src="/Picts/gunting.png" style="width: 100px;">`
    player = 'gunting';

    shakeOutput();
    ComputerHandler();
    countHandler();
    resultHandler();
    player = ''
    computer = ''
};

const batuHandler = () => {
    document.getElementById('player').innerHTML = `<img src="/Picts/batu.png" style="width: 100px;">`
    player = 'batu';

    shakeOutput();
    ComputerHandler();
    countHandler();
    resultHandler();
    player = ''
    computer = ''
};

const shakeOutput = () => {
    setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/gunting.png" style="width: 100px;">`}, 300)
    setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/kertas.png" style="width: 100px;">`}, 600)
    setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/batu.png" style="width: 100px;">`}, 900)
    setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/gunting.png" style="width: 100px;">`}, 1200)
    setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/kertas.png" style="width: 100px;">`}, 1500)
    setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/batu.png" style="width: 100px;">`}, 1800)
}

const ComputerHandler = () => {

    number = Math.ceil(Math.random() * 10);

    if (number == 1 || number == 4 || number == 7) {
        setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/gunting.png" style="width: 100px;">`}, 2000)
        computer = 'gunting';

    } else if (number == 2 || number == 5 || number == 8) {
        setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/kertas.png" style="width: 100px;">`}, 2000)
        computer = 'kertas'
    } else {
        setTimeout(function(){document.getElementById('computer').innerHTML = `<img src="/Picts/batu.png" style="width: 100px;">`}, 2000)
        computer = 'batu'
    }

};

shakeOutput();




