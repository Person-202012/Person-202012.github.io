let player;
let finalAttackDamage;
let finalEnemyAttackDamage;

let currentEnemyHealth;
let currentPlayerHealth;
let currentEnemyStamina;
let currentPlayerStamina;

//make player object
function Player(classType, health, strength, hacks, agility, stamina, speed, cuteness) {
    this.classType =  classType;
    this.health = health;
    this.strength = strength;
    this.hacks = hacks;
    this.agility = agility;
    this.stamina = stamina;
    this.speed = speed;
    this.cuteness = cuteness;
}

let PlayerMoves = {

    calcFirstAttack: function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        currentEnemyHealth = enemy.health;
        currentPlayerHealth = player.health;
        currentEnemyStamina = enemy.stamina;
        currentPlayerStamina = player.stamina;

        if (getPlayerSpeed >= getEnemySpeed) {
            this.PlayerAttacks();
        }else {
            this.EnemyAttacks();
        }
        
    },

    //make the player imidietly win :P
    MakePlayerWinImmediately: function() {
        //change your enemy's health for after you attacked them
        let setEnemyHealth = 0;
        let getEnemyHealth = document.querySelector('.health-enemy');
        getEnemyHealth.innerHTML = '<p class="health-enemy">Health: ' + setEnemyHealth + '</p>';
        console.log('enemy remaning health ' + setEnemyHealth);
        currentEnemyHealth = setEnemyHealth;

        //display "you won" message
        alert('You won!!! You also cheated!! Congrats! Reload to play again!');
    },

    //Player Attack
    PlayerAttacks: function() {
        //player attack
        let calcDamageAfterHacks;
        let calcDamageAfterStamina;
        //calculate hacks
        if (player.hacks > 0) {
            //if there are hacks
            calcDamageAfterHacks = player.strength * player.hacks / 100;
            console.log('calcDamageAfterHacks ' + calcDamageAfterHacks);
        } else{
            //if there aren't hacks
        calcDamageAfterHacks = player.strength;
        console.log('calcDamageAfterHacks ' + calcDamageAfterHacks);
        }
        //calculate stamina
        calcDamageAfterStamina = player.stamina / 250 * calcDamageAfterHacks;
        //calculate final attack dammage that we are sending
        finalAttackDamage = calcDamageAfterStamina;
        console.log('finalAttackDamage ' + finalAttackDamage);

        //calculate defenses
        let getEnemyCuteness = enemy.cuteness;
        console.log('enemycuteness:' + getEnemyCuteness);
        let calcAgilityRandomNumber;
        calcAgilityRandomNumber = Math.random() * 8;
        console.log('random number to calculate enemy agility ' + calcAgilityRandomNumber);
        let getEnemyAgility = enemy.agility / 100;
        console.log('enemy agility ' + getEnemyAgility);
        //calculate probability of dodging
        if (calcAgilityRandomNumber <= getEnemyAgility) {
            //they dodged it
        console.log("Your enemy's lucky as hell");
        alert('Your enemy dodged your attack!! :( Now it\'s their turn');

            this.EnemyAttacks();


        } else {
            //they didn't doge it
            this.calcEnemyDefense();
        }    
    },


    

    //Enemy Attack
    EnemyAttacks: function() {


        //enemy attack
        let calcEnemyDamageAfterHacks;
        let calcEnemyDamageAfterStamina;
        //calculate hacks
        if (enemy.hacks > 0) {
            //if there are hacks
            calcEnemyDamageAfterHacks = enemy.strength * enemy.hacks / 100;
            console.log('calcEnemyDamageAfterHacks ' + calcEnemyDamageAfterHacks);
        } else{
            //if tenemy has no hacks
        calcEnemyDamageAfterHacks = enemy.strength;
        console.log('calcEnemyDamageAfterHacks ' + calcEnemyDamageAfterHacks);
        }
        //calculate enemy stamina
        calcEnemyDamageAfterStamina = enemy.stamina / 250 * calcEnemyDamageAfterHacks;
        //calculate final attack dammage that enemy is sending
        finalEnemyAttackDamage = calcEnemyDamageAfterStamina;
        console.log('finalEnemyAttackDamage ' + finalEnemyAttackDamage);

        //calculate player defenses
        let getPlayerCuteness = player.cuteness;
        console.log('enemycuteness:' + getPlayerCuteness);
        let calcPlayerAgilityRandomNumber;
        calcPlayerAgilityRandomNumber = Math.random() * 8;
        console.log('random number to calculate player agility ' + calcPlayerAgilityRandomNumber);
        let getPlayerAgility = player.agility / 100;
        console.log('player agility ' + getPlayerAgility);
        //calculate probability of dodging
        if (calcPlayerAgilityRandomNumber <= getPlayerAgility) {
            //they dodged it
        console.log("You're lucky as hell");
        alert("you dodged your eney's atck! Congeats, Now it's your turn to atck THEM!!!!");
        //change button to atk agin
        let getActions = document.querySelector(".actions");
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacks()">Attack again!!</a>';
            return;

        } else {
            //they didn't doge it
            this.calcPlayerDefense();     
        }
    },

    //player atcks, enemy defends with cuteness
    calcEnemyDefense: function() {
        let getEnemyCuteness = enemy.cuteness;
        console.log('enemycuteness:' + getEnemyCuteness);
        //they didn't doge it
        console.log('your enemy did not doge your attack!');
        //if they have cuteness
        if (getEnemyCuteness > 0) {
            //calculate cuteness damage reduction amount
            getEnemyCuteness = getEnemyCuteness / 10;
            //calculate final damage after cuteness damage reduction
            finalAttackDamage = finalAttackDamage - getEnemyCuteness;
            //makes sure you can't do negative damage
            if (finalAttackDamage <= 0) {
                finalAttackDamage = 0;
            }
            console.log('final attack dammage ' + finalAttackDamage);
            let setEnemyHealth = currentEnemyHealth - finalAttackDamage;
            //make sure that you can't have nevative health
            if(setEnemyHealth <= 0){
                setEnemyHealth = 0;
            }
            //change your enemy's health for after you attacked them
            let getEnemyHealth = document.querySelector('.health-enemy');
            getEnemyHealth.innerHTML = '<p class="health-enemy">Health: ' + setEnemyHealth + '</p>';
            console.log('enemy remaning health ' + setEnemyHealth)
            currentEnemyHealth = setEnemyHealth;
            //change your stamina
            currentPlayerStamina = currentPlayerStamina * 0.9;
            let getPlayerStamina = document.querySelector('.stamina-player');
            getPlayerStamina.innerHTML = '<p class="stamina-player">Stamina: ' + currentPlayerStamina + '</p>';
            //see if the enemy is still alive
            if (setEnemyHealth <= 0) {
                //if so, display "you won" message
                alert('You won!!! You did not cheat! Congrats! Reload to play again!');
            } else {
                //change button to atk agin
                let getActions = document.querySelector(".actions");
                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacks()">Attack again!!</a>';
                alert("You damaged your enemy! Good Job! Now it is their turn to attack YOU!!");
                //if you didn't win on first atk, enemy atcks
                this.EnemyAttacks();
            }
        } else {
            //if they don't have cuteness
            //make sure no negative damage (shouldn't happen)
            if (finalAttackDamage <= 0) {
                finalAttackDamage = 0;
            }
            console.log('final attack dammage ' + finalAttackDamage);
            let setEnemyHealth = currentEnemyHealth - finalAttackDamage;
            //make sure that you can't have nevative health
            if(setEnemyHealth <= 0){
                setEnemyHealth = 0;
            }
            //change your enemy's health for after you attacked them
            let getEnemyHealth = document.querySelector('.health-enemy');
            getEnemyHealth.innerHTML = '<p class="health-enemy">Health: ' + setEnemyHealth + '</p>';
            console.log('enemy remaning health ' + setEnemyHealth)
            currentEnemyHealth = setEnemyHealth;
            //change your stamina
            currentPlayerStamina = currentPlayerStamina * 0.9;
            let getPlayerStamina = document.querySelector('.stamina-player');
            getPlayerStamina.innerHTML = '<p class="stamina-player">Stamina: ' + currentPlayerStamina + '</p>';
            //see if the enemy is still alive
            if (setEnemyHealth <= 0) {
                //if so, display "you won" message
                alert('You won!!! Congrats! Reload to play again!');
            } else {
                alert('You damaged your enemy! Congrats! Now your enemy attacks');
                //change button to atk agin
                let getActions = document.querySelector(".actions");
                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacks()">Attack again!!</a>';        
                //enemy atcks
                this.EnemyAttacks
            }
        }
        //end of enemydefends func
    },

    //enemy atcks, player defends with cuteness
    calcPlayerDefense: function() {
        let getPlayerCuteness = player.cuteness;
        console.log('player cuteness:' + getPlayerCuteness);
    
        //they didn't doge it
        console.log('your enemy did not doge your attack!');
        //if they have cuteness
        if (getPlayerCuteness > 0) {
            //calculate cuteness damage reduction amount
            getPlayerCuteness = getPlayerCuteness / 10;
            //calculate final damage after cuteness damage reduction
            finalEnemyAttackDamage = finalEnemyAttackDamage - getPlayerCuteness;
            //makes sure you can't do negative damage
            if (finalEnemyAttackDamage <= 0) {
                finalEnemyAttackDamage = 0;
            }
            console.log('final attack dammage ' + finalEnemyAttackDamage);
            let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
            //make sure that you can't have nevative health
            if(setPlayerHealth <= 0){
                setPlayerHealth = 0;
            }
            //change your health for after you attacked them
            let getPlayerHealth = document.querySelector('.health-player');
            getPlayerHealth.innerHTML = '<p class="health-Player">Health: ' + setPlayerHealth + '</p>';
            console.log('player remaning health ' + setPlayerHealth)
            currentPlayerHealth = setPlayerHealth;
            //change enemy's stamina
            currentEnemyStamina = currentEnemyStamina * 0.9;
            let getEnemyStamina = document.querySelector('.stamina-enemy');
            getEnemyStamina.innerHTML = '<p class="stamina-enemy">Stamina: ' + currentPlayerStamina + '</p>';
            //see if the enemy is still alive
            if (setPlayerHealth <= 0) {
                //if so, display "you won" message
                alert('YOU LOST!!! reload to play again! next time choose a better character!');
            } else {
                alert("You have been damaged by your Enemy! now you can attack THEM!!");
                //change button to atk agin
                let getActions = document.querySelector(".actions");
                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacks()">Attack again!!</a>';
                //if you didn't win on first atk, enemy atcks
                return;
            }
        } else {
            //if they don't have cuteness
            //make sure no negative damage (shouldn't happen)
            if (finalEnemyAttackDamage <= 0) {
                finalEnemyAttackDamage = 0;
            }
            console.log('final enemy attack dammage ' + finalEnemyAttackDamage);
            let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
            //make sure that you can't have nevative health
            if(setPlayerHealth <= 0){
                setPlayerHealth = 0;
            }
            //change your enemy's health for after you attacked them
            let getPlayerHealth = document.querySelector('.health-player');
            getPlayerHealth.innerHTML = '<p class="health-player">Health: ' + setPlayerHealth + '</p>';
            console.log('player remaning health ' + setPlayerHealth)
            currentPlayerHealth = setPlayerHealth;
            //change your stamina
            currentEnemyStamina = currentEnemyStamina * 0.9;
            let getEnemyStamina = document.querySelector('.stamina-enemy');
            getEnemyStamina.innerHTML = '<p class="stamina-enemy">Stamina: ' + currentEnemyStamina + '</p>';
            //see if the enemy is still alive
            if (setPlayerHealth <= 0) {
                //if so, display "you won" message
                alert('You LOST!! Next time, choose a better character!! Reload to play again!');
            } else {
                alert('You have been attacked my your enemy! Now you can attack them!');
                //change button to atk agin
                let getActions = document.querySelector(".actions");
                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacks()">Attack again!!</a>';        
                //you attck
                return;
            }
        }//end of player defends func
    }
}