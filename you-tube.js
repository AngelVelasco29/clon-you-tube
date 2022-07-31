const search= document.querySelector('.search-flag');
const searchButton= document.querySelector('.button-flag');

search.onfocus=()=>{
    search.classList.add('search-display');
    searchButton.classList.add('button-display');
    searchButton.classList.remove('button-flag');
}

search.onblur= ()=>{
    search.classList.remove('search-display');
    searchButton.classList.remove('button-display');
    searchButton.classList.add('button-flag');
}
