function makeMoney  () {
    let numberOfCoins = document.querySelector ('#number').value;
    let coinType = document.querySelector('#coins').value;
   
    let coinHolder = document.querySelector('#coinHolder'); 

      for (let i = 0; i < numberOfCoins; i++){; 
    
        let coin = document.createElement("span")
        if (coinType === "Penny"){
        coin.classList.add("Penny")
        }
        else if (coinType ==="Nickel"){
        coin.classList.add("Nickel")
        }
        else if (coinType ==="Dime"){
            coin.classList.add("Dime")
        }
        else if (coinType === "Quarter"){
        coin.classList.add("Quarter")
        }
       coinHolder.append(coin);
    
    }

   }

//    const data = new FormData ();
//    let coinType = data.get('coins')
//    let numberOfCoins = data.get('number');
//    let button = function makeMoney () {
//    document.getElementById('number').addEventListener(onClick, function(){
//     for (let i = 0; i < numberOfCoins; i ++);
//    })

//    }