// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let sum = JSON.parse(localStorage.getItem("amount"));
let wallet = document.getElementById("wallet");
wallet.innerText=sum;

const getData = JSON.parse(localStorage.getItem("movie"));
console.log(getData)
let movies = document.getElementById("movie");
let div = document.createElement("div")
let img = document.createElement("img")
        img.src=getData.Poster;

        let title = document.createElement("h2")
        title.innerText=getData.Title;
        div.append(title,img)
        movies.append(div)


function confirm(){
    
    let user_name = document.getElementById("user_name").value;
    let number_of_seats = document.getElementById("number_of_seats").value;
    console.log(number_of_seats)
    let cost = number_of_seats*100;
    
    if(user_name=="" || number_of_seats==""){
        alert("Insufficient Data!")
    }
    else if(cost>sum){
        alert("Insufficient Balance!")
    }
    else if(cost<=sum){
        sum = sum - cost;
        alert("Booking Successful!");
        wallet.innerText=sum;
        localStorage.setItem("amount",JSON.stringify(sum))
    }
    
    localStorage.setItem("amount",JSON.stringify(sum))
    console.log(sum)
    
}