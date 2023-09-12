const accessKey = "RKYDKit0KKxw94yUscl51G8ZQDGQ6NvuTT2ZBZ9Dx6U"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResult = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = "";
let page= 1;

async function searchImages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url)
    const data = await response.json()
    
    const results = data.results

    if(page === 1){
        searchResult.innerHTML = ""
    }

    results.map((result) =>{
       const imageWrapper = document.createElement('div')
       imageWrapper.classList.add("search-result")
       const image = document.createElement("img")
       imageLink.href = result.links.html 
       imageLink.target = "_blank"
       imageLink.textContent = result.alt_decription

       imageWrapper.appendChild(image)
       imageWrapper.appendChild(imageLink)
       imageWrapper.appendChild(imageWrapper)

    });
    page++ 

    if(page > 1 ){
        showMore.style.display = "block"
    }

}
formE1.addEventListener("submit",(event) =>{
      event.preventDefault()
      page = 1;
      searchImages()
})

showMore.addEventListener("click",(event)=>{
    searchImages()
})