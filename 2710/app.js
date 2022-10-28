let key = "b68a7d79992b7f40551dbd706e6b4caa";

const button = document.querySelector("#button");


let value = "";
let pagenr = 1;


button.addEventListener("click", () => {
    const input = document.querySelector("#input").value;
    getmovie(input, pagenr);
});

async function getmovie(value, pagenr) {
    console.log("Aranan Kelime : ", value)
    await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${key}&page=${pagenr}`
    ).then(response => {
        response.json().then(res => {

            console.log(res)
        })
    })
}





