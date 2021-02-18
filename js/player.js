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
            this.PlayerAttacksFirst();
        }else {
            this.EnemyAttacksFirst();
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





    PlayerAttacksFirst: function() {
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




         //enemy attacks
         let calcEnemyDamageAfterHacks;
         let calcEnemyDamageAfterStamina;
         //calculate enemy hacks
         if (enemy.hacks > 0) {
             //if the enemy has hacks
             calcDamageAfterStamina = enemy.strength * enemy.hacks / 100;
             console.log('calcEnemyDamageAfterHacks' + calcEnemyDamageAfterHacks);
         } else {
             //if there aren't hacks
             calcDamageAfterHacks = player.strength;
             console.log('calcEnemyDamageAfterHacks' + calcEnemyDamageAfterHacks);
         }
         //calculate stamina
         calcEnemyDamageAfterStamina = enemy.stamina / 250 * calcEnemyDamageAfterHacks;
         //calculate final damage that they are sending
         finalEnemyAttackDamage = calcDamageAfterStamina;
         console.log("finalEnemyAttackDamage" + finalEnemyAttackDamage);

         //calculate defenses
         let getPlayerCuteness = player.cuteness;
         console.log('player Cuteness' + getPlayerCuteness);
         let calcPlayerAgilityRandomNumber;
         calcPlayerAgilityRandomNumber = Math.random() * 8;
         console.log('your agilityrandomnumber' + calcPlayerAgilityRandomNumber);
         let getPlayerAgility = enemy.aglilty / 100;
         console.log('yor agility' + getPlayerAgility);
         //calc probability of doging
         if (calcPlayerAgilityRandomNumber <= getPlayerAgility) {
             //you doged it!
             console.log("You're lucky as hell!!");
             return
         } else {
             //you don't doge it:(
             console.log("You did not doge the enmy");
             if (getPlayerCuteness > 0) {
                 //calculate cuteness dmg reduction amount
                 getPlayerCuteness = getPlayerCuteness / 10;
                 //calculate final dmg after defenses
                 finalEnemyAttackDamage = finalEnemyAttackDamage - getPlayerCuteness;
                 console.log('final enemy atk dmg ' + finalEnemyAttackDamage);
                 let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
                 //changer player health after attacks
                 let getPlayerHealth = document.querySelector('.health-player');
                 getPlayerHealth.innerHTML = '<p class="health-player">Health: ' + setPlayerHealth + '</p>';
                 console.log('your remaning health: ' + setPlayerHealth);
                 currentPlayerHealth = setPlayerHealth;
                 //see if the enemy is alive
                 if (setPlayerHealth <= 0) {
                     //if so, say that you lost
                     alert('You lost :( Reload to play again. Next time, chosse a better chatracter');
                 } else {
                     return
                 }
             } else {
                 console.log('final enemy atk dmg ' + finalEnemyAttackDamage);
                 let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
                 //changer player health after attacks
                 let getPlayerHealth = document.querySelector('.health-player');
                 getPlayerHealth.innerHTML = '<p class="health-player">Health: ' + setPlayerHealth + '</p>';
                 console.log('your remaning health: ' + setPlayerHealth);
                 currentPlayerHealth = setPlayerHealth;
                 //see if the enemy is alive
                 if (setPlayerHealth <= 0) {
                     //if so, say that you lost
                     alert('You lost :( Reload to play again. Next time, chosse a better chatracter');
                } else {
                     return
                    }
                }   
             
            }




        } else {
            //they didn't doge it
            console.log('your enemy did not doge your attack!');
            if (getEnemyCuteness > 0) {
                //calculate cuteness damage reduction amount
                getEnemyCuteness = getEnemyCuteness / 10;
                //calculate final damage after cuteness damage reduction
                finalAttackDamage = finalAttackDamage - getEnemyCuteness;
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



                    //enemy attacks
                    let calcEnemyDamageAfterHacks;
                    let calcEnemyDamageAfterStamina;
                    //calculate enemy hacks
                    if (enemy.hacks > 0) {
                        //if the enemy has hacks
                        calcDamageAfterStamina = enemy.strength * enemy.hacks / 100;
                        console.log('calcEnemyDamageAfterHacks' + calcEnemyDamageAfterHacks);
                    } else {
                        //if there aren't hacks
                        calcDamageAfterHacks = player.strength;
                        console.log('calcEnemyDamageAfterHacks' + calcEnemyDamageAfterHacks);
                    }
                    //calculate stamina
                    calcEnemyDamageAfterStamina = enemy.stamina / 250 * calcEnemyDamageAfterHacks;
                    //calculate final damage that they are sending
                    finalEnemyAttackDamage = calcDamageAfterStamina;
                    console.log("finalEnemyAttackDamage" + finalEnemyAttackDamage);

                    //calculate defenses
                    let getPlayerCuteness = player.cuteness;
                    console.log('player Cuteness' + getPlayerCuteness);
                    let calcPlayerAgilityRandomNumber;
                    calcPlayerAgilityRandomNumber = Math.random() * 8;
                    console.log('your agilityrandomnumber' + calcPlayerAgilityRandomNumber);
                    let getPlayerAgility = enemy.aglilty / 100;
                    console.log('yor agility' + getPlayerAgility);
                    //calc probability of doging
                    if (calcPlayerAgilityRandomNumber <= getPlayerAgility) {
                        //you doged it!
                        console.log("You're lucky as hell!!");
                        let getActions = document.querySelector(".actions");
                        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacksFirst()">Attack again!!</a>';
                        return;
                    } else {
                        //you don't doge it:(
                        console.log("You did not doge the enmy");
                        if (getPlayerCuteness > 0) {
                            //calculate cuteness dmg reduction amount
                            getPlayerCuteness = getPlayerCuteness / 10;
                            //calculate final dmg after defenses
                            finalEnemyAttackDamage = finalEnemyAttackDamage - getPlayerCuteness;
                            console.log('final enemy atk dmg ' + finalEnemyAttackDamage);
                            let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
                            //changer player health after attacks
                            let getPlayerHealth = document.querySelector('.health-player');
                            getPlayerHealth.innerHTML = '<p class="health-player">Health: ' + setPlayerHealth + '</p>';
                            console.log('your remaning health: ' + setPlayerHealth);
                            currentPlayerHealth = setPlayerHealth;
                            //see if the enemy is alive
                            if (setPlayerHealth <= 0) {
                                //if so, say that you lost
                                alert('You lost :( Reload to play again. Next time, chosse a better chatracter');
                            } else {
                                let getActions = document.querySelector(".actions");
                                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacksFirst()">Attack again!!</a>';
                                return;
                            }
                        } else {
                            console.log('final enemy atk dmg ' + finalEnemyAttackDamage);
                            let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
                            //changer player health after attacks
                            let getPlayerHealth = document.querySelector('.health-player');
                            getPlayerHealth.innerHTML = '<p class="health-player">Health: ' + setPlayerHealth + '</p>';
                            console.log('your remaning health: ' + setPlayerHealth);
                            currentPlayerHealth = setPlayerHealth;
                            //see if the enemy is alive
                            if (setPlayerHealth <= 0) {
                                //if so, say that you lost
                                alert('You lost :( Reload to play again. Next time, chosse a better chatracter');
                            } else {
                                let getActions = document.querySelector(".actions");
                                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacksFirst()">Attack again!!</a>';
                                return;
                            }
                        }
                    }








                    //if you didn't win on first atk, enemy atcks
                }
                
            } else {
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



                    //enemy attacks
                    let calcEnemyDamageAfterHacks;
                    let calcEnemyDamageAfterStamina;
                    //calculate enemy hacks
                    if (enemy.hacks > 0) {
                        //if the enemy has hacks
                        calcDamageAfterStamina = enemy.strength * enemy.hacks / 100;
                        console.log('calcEnemyDamageAfterHacks' + calcEnemyDamageAfterHacks);
                    } else {
                        //if there aren't hacks
                        calcDamageAfterHacks = player.strength;
                        console.log('calcEnemyDamageAfterHacks' + calcEnemyDamageAfterHacks);
                    }
                    //calculate stamina
                    calcEnemyDamageAfterStamina = enemy.stamina / 250 * calcEnemyDamageAfterHacks;
                    //calculate final damage that they are sending
                    finalEnemyAttackDamage = calcDamageAfterStamina;
                    console.log("finalEnemyAttackDamage" + finalEnemyAttackDamage);

                    //calculate defenses
                    let getPlayerCuteness = player.cuteness;
                    console.log('player Cuteness' + getPlayerCuteness);
                    let calcPlayerAgilityRandomNumber;
                    calcPlayerAgilityRandomNumber = Math.random() * 8;
                    console.log('your agilityrandomnumber' + calcPlayerAgilityRandomNumber);
                    let getPlayerAgility = enemy.aglilty / 100;
                    console.log('yor agility' + getPlayerAgility);
                    //calc probability of doging
                    if (calcPlayerAgilityRandomNumber <= getPlayerAgility) {
                        //you doged it!
                        console.log("You're lucky as hell!!");
                        let getActions = document.querySelector(".actions");
                        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacksFirst()">Attack again!!</a>';
                        return;
                    } else {
                        //you don't doge it:(
                        console.log("You did not doge the enmy");
                        if (getPlayerCuteness > 0) {
                            //calculate cuteness dmg reduction amount
                            getPlayerCuteness = getPlayerCuteness / 10;
                            //calculate final dmg after defenses
                            finalEnemyAttackDamage = finalEnemyAttackDamage - getPlayerCuteness;
                            console.log('final enemy atk dmg ' + finalEnemyAttackDamage);
                            let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
                            //changer player health after attacks
                            let getPlayerHealth = document.querySelector('.health-player');
                            getPlayerHealth.innerHTML = '<p class="health-player">Health: ' + setPlayerHealth + '</p>';
                            console.log('your remaning health: ' + setPlayerHealth);
                            currentPlayerHealth = setPlayerHealth;
                            //see if the enemy is alive
                            if (setPlayerHealth <= 0) {
                                //if so, say that you lost
                                alert('You lost :( Reload to play again. Next time, chosse a better chatracter');
                            } else {
                                let getActions = document.querySelector(".actions");
                                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacksFirst()">Attack again!!</a>';
                                return;
                            }
                        } else {
                            console.log('final enemy atk dmg ' + finalEnemyAttackDamage);
                            let setPlayerHealth = currentPlayerHealth - finalEnemyAttackDamage;
                            //changer player health after attacks
                            let getPlayerHealth = document.querySelector('.health-player');
                            getPlayerHealth.innerHTML = '<p class="health-player">Health: ' + setPlayerHealth + '</p>';
                            console.log('your remaning health: ' + setPlayerHealth);
                            currentPlayerHealth = setPlayerHealth;
                            //see if the enemy is alive
                            if (setPlayerHealth <= 0) {
                                //if so, say that you lost
                                alert('You lost :( Reload to play again. Next time, chosse a better chatracter');
                            } else {
                                let getActions = document.querySelector(".actions");
                                getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacksFirst()">Attack again!!</a>';
                                return;
                            }
                        }
                    }
                }
            }
        }
    //end of PlayerAttacksFirst function
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    },
    





















    calcFirstAttack: function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        currentEnemyHealth = enemy.health;
        currentPlayerHealth = player.health;
        currentEnemyStamina = enemy.stamina;
        currentPlayerStamina = player.stamina;

        if (getPlayerSpeed > getEnemySpeed) {
            this.PlayerAttacksFirst();
        }else {
            this.EnemyAttacksFirst();
        }
        
    },

    EnemyAttacksFirst: function() {
        //player attack
        let calcDamageAfterHacks;
        let calcDamageAfterStamina;
        //calculate hacks
        if (enemy.hacks > 0) {
            //if there are hacks
            calcDamageAfterHacks = enemy.strength * enemy.hacks / 100;
            console.log('calcDamageAfterHacks ' + calcDamageAfterHacks);
        } else{
            //if there aren't hacks
        calcDamageAfterHacks = enemy.strength;
        console.log('calcDamageAfterHacks ' + calcDamageAfterHacks);
        }
        //calculate stamina
        calcDamageAfterStamina = enemy.stamina / 250 * calcDamageAfterHacks;
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
            //you dodged it
            console.log("You're lucky as hell'");
            let getActions = document.querySelector(".actions");
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.PlayerAttacksFirst()">Attack again!!</a>';
            return;


        } else {
            //you didn't doge it
            console.log('you did not doge your enemys attack!');
            if (getEnemyCuteness > 0) {
                //calculate cuteness damage reduction amount
                getEnemyCuteness = getEnemyCuteness / 10;
                //calculate final damage after cuteness damage reduction
                finalAttackDamage = finalAttackDamage - getEnemyCuteness;
                console.log('final attack dammage ' + finalAttackDamage);
                let setEnemyHealth = currentEnemyHealth - finalAttackDamage;
                //make sure that you can't have nevative health
                if(setEnemyHealth <= 0){
                    setEnemyHealth = 0;
                }
                //change your enemy's health for after you attacked them
                let getEnemyHealth = document.querySelector('.health-player');
                getEnemyHealth.innerHTML = '<p class="health-player">Health: ' + setEnemyHealth + '</p>';
                console.log('enemy remaning health ' + setEnemyHealth)
                currentEnemyHealth = setEnemyHealth;
                //change your stamina
                currentPlayerStamina = currentPlayerStamina * 0.9;
                let getPlayerStamina = document.querySelector('.stamina-enemy');
                getPlayerStamina.innerHTML = '<p class="stamina-enemy">Stamina: ' + currentPlayerStamina + '</p>';
                //see if the enemy is still alive
                if (setEnemyHealth <= 0) {
                    //if so, display "you won" message
                    alert('You lost! Next tome, choose a better character and Reload to play again!');
                } else {

                 }
                
            } else {
                console.log('final attack dammage ' + finalAttackDamage);
                let setEnemyHealth = currentEnemyHealth - finalAttackDamage;
                //make sure that you can't have nevative health
                if(setEnemyHealth <= 0){
                    setEnemyHealth = 0;
                }
                //change your enemy's health for after you attacked them
                let getEnemyHealth = document.querySelector('.health-player');
                getEnemyHealth.innerHTML = '<p class="health-player">Health: ' + setEnemyHealth + '</p>';
                console.log('enemy remaning health ' + setEnemyHealth)
                currentEnemyHealth = setEnemyHealth;
                //change your stamina
                currentPlayerStamina = currentPlayerStamina * 0.9;
                let getPlayerStamina = document.querySelector('.stamina-enemy');
                getPlayerStamina.innerHTML = '<p class="stamina-enemy">Stamina: ' + currentPlayerStamina + '</p>';
                //see if the enemy is still alive
                if (setEnemyHealth <= 0) {
                    //if so, display "you won" message
                    alert('You won!!! Congrats! Reload to play again!');
                } else {
                    return;
                }
            }
        }

    }
    //end of EnemyAttacksFirst function
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    
    








//end of let PlayerMoves
}



