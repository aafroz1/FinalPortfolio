const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollX;
    if(top >=100) {
        header.classList.add('navbarDark');
    }

    
    else {
        header.classList.remove('navbarDark');
    }
}
