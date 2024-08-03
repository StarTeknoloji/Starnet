window.onload = function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
    var score = 0; // Başlangıç Skoru
    var level = 0; // Başlangıç Seviyesi
    var direction = 0; // Giriş Yönü
    var snake = new Array(3);
    var active = true;
    var speed = 250; // Başlangıç Hızı
    
    var arena = new Array(20);
    for (var i = 0; i < arena.length; i++) {
    arena[i] = new Array(20);
    }
     // Boyutlandırmalar
    canvas.width = 204;
    canvas.height = 224;
    
    $('#snake-oyunu').append(canvas);
    
    arena = generateSnake(arena);
    arena = generateFood(arena);
    getGame();
    
    window.addEventListener('keydown', function(e) {
    if (e.keyCode === 38 && direction !== 3) {
    direction = 2; // Yukarı
    } else if (e.keyCode === 40 && direction !== 2) {
    direction = 3; // Aşağı
    } else if (e.keyCode === 37 && direction !== 0) {
    direction = 1; // Sol
    } else if (e.keyCode === 39 && direction !== 1) {
    direction = 0; // Sağ
    }
    });
     
    function getGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = snake.length - 1; i >= 0; i--) {
    if (i === 0) {
    switch(direction) {
    case 0: // Sağ
    snake[0] = { x: snake[0].x + 1, y: snake[0].y }
    break;
    case 1: // Sol
    snake[0] = { x: snake[0].x - 1, y: snake[0].y }
    break;
    case 2: // Yukarı
    snake[0] = { x: snake[0].x, y: snake[0].y - 1 }
    break;
    case 3: // Aşağı
    snake[0] = { x: snake[0].x, y: snake[0].y + 1 }
    break;
    }
     
    if (snake[0].x < 0 ||
    snake[0].x >= 20 ||
    snake[0].y < 0 ||
    snake[0].y >= 20) {
    showGameOver();
    return;
    }
     
    if (arena[snake[0].x][snake[0].y] === 1) {
    score += 20;  // Bir yemek kaç puan?
    arena = generateFood(arena);
     
    snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });
    arena[snake[snake.length - 1].x][snake[snake.length - 1].y] = 2;
     
    if ((score % 100) == 0) {
    level += 1;
    }
    } else if (arena[snake[0].x][snake[0].y] === 2) {
    showGameOver();
    return;
    }
     
    arena[snake[0].x][snake[0].y] = 2;
    } else {
    if (i === (snake.length - 1)) {
    arena[snake[i].x][snake[i].y] = null;
    }
     
    snake[i] = { x: snake[i - 1].x, y: snake[i - 1].y };
    arena[snake[i].x][snake[i].y] = 2;
    }
    }
    
    getArena();
    for (var x = 0; x < arena.length; x++) {
    for (var y = 0; y < arena[0].length; y++) {
    if (arena[x][y] === 1) {
    ctx.fillStyle = '#c00c00';
    ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
    } else if (arena[x][y] === 2) {
    ctx.fillStyle = '#84aeff';
    ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
    }
    }
    }
    
    if (active) {
    setTimeout(getGame, speed - (level * 50));
    }
    }
    
    function getArena() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#c00c00';
    
    ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
    
    ctx.rect(3,21,canvas.width - 6,canvas.height - 26);
    ctx.fillStyle = '#fff';
    ctx.fill();
    
    ctx.fillStyle = '#bc202d';
    ctx.font = '12px Helvetica';
    ctx.fillText('Puan : ' + score + ' - Seviye : ' + level, 2, 12);
    }
    
    function generateFood(arena) {
    var rndX = Math.round(Math.random() * 19);
    var rndY = Math.round(Math.random() * 19);
    while (arena[rndX][rndY] === 2) {
    rndX = Math.round(Math.random() * 19);
    rndY = Math.round(Math.random() * 19);
    }
    arena[rndX][rndY] = 1;
    return arena;
    }
    
    function generateSnake(arena) {
    var rndX = Math.round(Math.random() * 19);
    var rndY = Math.round(Math.random() * 19);
     
    while ((rndX - snake.length) < 0) {
    rndX = Math.round(Math.random() * 19);
    }
    for (var i = 0; i < snake.length; i++) {
    snake[i] = { x: rndX - i, y: rndY };
    arena[rndX - i][rndY] = 2;
    }
    
    return arena;
    }
    
    function showGameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.fillStyle = '#bc202d';
    ctx.font = '16px Helvetica';
    ctx.fillText('Oyun bitti!', ((canvas.width / 2) - (ctx.measureText('Oyun bitti!').width / 2)), 50); 
    ctx.font = '12px Helvetica';
    ctx.fillText('Puanın : ' + score, ((canvas.width / 2) - (ctx.measureText('Puanın : ' + score).width / 2)), 70);
    }
    };