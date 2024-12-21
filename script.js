//0rock 1paper 3scissor
let a = document.querySelector('#result')
function random(x){
    let bot = Math.floor(Math.random() * 3);
    if(bot==0){
        if(x==0){
            a.innerHTML = "tie";
            console.log("tie")
        }
        else if(x==1){
            a.innerHTML = "win";
            console.log("win")
        }
        else if(x==2){

            a.innerHTML = "lose";
            console.log("lose") 
        }
    }
    else if(bot==1){

        if(x==0){
            a.innerHTML = "win";
            console.log("win") 
        }
        else if(x==1){
            a.innerHTML = "tie";
            console.log("tie") 
        }
        else if(x==2){
            a.innerHTML = "lose";
            console.log("lose") 
        }
    }

    else if(bot==2){

        if(x==0){
            a.innerHTML = "lose";
            console.log("lose")
        }
        else if(x==1){
            a.innerHTML = "win";
            console.log("win") 
        }
        else if(x==2){
            a.innerHTML = "tie";
            console.log("tie") 
        }
    }

    }


