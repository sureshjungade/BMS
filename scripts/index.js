// Store the wallet amount to your local storage with key "amount"
let sum = JSON.parse(localStorage.getItem("amount")) || 0;
let wallet = document.getElementById("wallet");
wallet.innerText=sum;


let add_to_wallet = document.getElementById("add_to_wallet");

function addtowallet(){
    let amount = document.getElementById("amount").value;
    console.log(amount)
    sum = sum + Number(amount);
    console.log(sum)
    wallet.innerText=sum;
    localStorage.setItem("amount",JSON.stringify(sum))
    
}
