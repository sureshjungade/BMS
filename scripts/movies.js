// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let sum = JSON.parse(localStorage.getItem("amount"));
let wallet = document.getElementById("wallet");
wallet.innerText=sum;
async function searchmovies(){
    const query = document.getElementById("search").value;

    const url = `https://www.omdbapi.com/?s=${query}&apikey=eb63fe48`;

    try{
        const res = await fetch(url)

        const data = await res.json();
        console.log(data)
        return data.Search
    }
    catch(err){
        console.log(err);
    }
}

function append(data){
    let movies = document.getElementById("movies");
    console.log(data);
    movies.innerHTML=null;
    data.map(({Title,Poster}) =>{
        
        let div = document.createElement("div");

        let img = document.createElement("img")
        img.src=Poster;

        let title = document.createElement("h4")
        title.innerText=Title;
        let movedata = {
            Poster,
            Title,
        }
        let booknow = document.createElement("button")
        booknow.innerText="Book Now"
        booknow.setAttribute("class","book_now")
        booknow.addEventListener("click",function(){
            moveTo(movedata)
        })
        div.append(img,title,booknow)
        movies.append(div)

    })

}
function moveTo(movedata){
    localStorage.setItem("movie",JSON.stringify(movedata));
    window.location.href="checkout.html"
}

async function main(){
let data = await searchmovies()
console.log(data);
if(data==undefined){
    return false;
}
    append(data)
}


function search(func,delay){
    if(id){
        clearTimeout(id)

    }

    id = setTimeout(function(){
        func()
    },delay)
}