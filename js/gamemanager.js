let GameManager = {
    setGameStart: function(classType) {
        console.log("Type: PlayerMoves.MakePlayerWinImmediately(); to cheat")
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case 'Dean':
                player = new Player(classType, 250, 150, 350, 50, 350, 500, 25);
                break;
            case 'Adri':
                player = new Player(classType, 200, 100, 150, 500, 250, 200, 500);
                break;
            case 'Dude':
                player = new Player(classType, 325, 500, 0, 0, 50, 250, 0);
                break;
            case 'Neil':
                player = new Player(classType, 300, 150, 300, 300, 300, 400, 100);
                break;
            default:
                console.log('error, you made this error message, you probably changed a name or something');
        }
        let getInterface = document.querySelector('.interface'); 
        getInterface.innerHTML = '<img src="Video-Game-elements/Heros/' + classType + '.jpg" class="img-avatar"><div><h3>'+ classType+'</h3><p class="health-player">Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Hacks: ' + player.hacks + '</p><p>Agility: ' + player.agility + '</p><p class="stamina-player">Stamina: ' + player.stamina + '</p><p>Speed: ' + player.speed + '</p><p>Cuteness: ' + player.cuteness + '</p></div>';
        
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<h2>Task: Find an enemy</h2>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
        getArena.style.visiblity = 'visible';
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        let enemy00 = new Enemy('Ben', 150, 100, 25, 175, 100, 175, 0);
        let enemy01 = new Enemy('Devil', 200, 200, 100, 200, 200, 200, 300);
        let enemy02 = new Enemy('Pumpkin', 225, 100, 0, 0, 150, 50, 100);
        let enemy03 = new Enemy('Wizy', 150, 150, 10, 400, 400, 400, 500);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
        console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcFirstAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="Video-Game-elements/Enemies/' + enemy.enemyType + '.jpg" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Strength: ' + enemy.strength + '</p><p>Hacks: ' + enemy.hacks + '</p><p>Agility: ' + enemy.agility + '</p><p class="stamina-enemy">Stamina: ' + enemy.stamina + '</p><p>Speed: ' + enemy.speed + '</p><p>Cuteness: ' + enemy.cuteness + '</p></div>';
        
    }
}
   
