const button = document.querySelector("button");
        const output = document.querySelector(".output");
        const player1 = document.querySelector("#player1");
        const player2 = document.querySelector("#player2");
        const player3 = document.querySelector("#player3");
        const player4 = document.querySelector("#player4");
        const player5 = document.querySelector("#player5");
        const player6 = document.querySelector("#player6");
        const player7 = document.querySelector("#player7");
        const player8 = document.querySelector("#player8");
        const player9 = document.querySelector("#player9");
        const player10 = document.querySelector("#player10");
        const dice = [[5],[1,9],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]];
        button.addEventListener("click", function () {
            let rolls = [roll(10),roll(10)];
            let temp;
            if(rolls[0] == rolls[1]){ temp="Draw"; }            //Start Game Dice Logic
            else if(rolls[0] > rolls[1]){ temp="Player 1 wins"; } // Adjust Logic For 10 Players Here
            else { temp="Player 2 wins"; }                      //End Game Dice logic
            updateOutput(player1,rolls[0]);
            updateOutput(player2,rolls[1]);
            updateOutput(player3,rolls[2]);
            updateOutput(player4,rolls[3]);
            updateOutput(player5,rolls[4]);
            updateOutput(player6,rolls[5]);
            updateOutput(player7,rolls[6]);
            updateOutput(player8,rolls[7]);
            updateOutput(player9,rolls[8]);
            updateOutput(player10,rolls[9]);
            output.innerHTML = temp;
        })
        
        function updateOutput(el,num){                      //Remove Method
            let holder = builder(num);
            if(el.children[0]){el.children[0].remove();}    //Edit So That Losing Players Are Removed
            el.appendChild(holder);                          //Remove Method
        }
        
        function builder(num){
            let div = document.createElement("div");
            let dieArray = dice[num-1];
            console.log(dieArray);
            for(let x=1;x<10;x++){
                let span = document.createElement("div");
                span.setAttribute("class","dot");
                if(dieArray.includes(x)){
                    span.classList.add("black");    
                }
                div.appendChild(span);
            }
            div.setAttribute("class","dice dealer");
            return div;
        }
        
 
        function roll(num) {
            let randomNumber = Math.floor(Math.random() * num) + 1;
            return randomNumber;
        }