let number = 5.73;

number = Math.floor(number)

// console.log(number);


// let ptag = document.querySelectorAll(".container div");

// for (let i = 0; i < ptag.length; i++) {
//     ptag[i].innerText = 'Hello Neptun'
//     ptag[i].style.color = 'red';
//     ptag[i].style.fontSize = '50px';
//     ptag[i].style.backgroundColor = 'pink';
    
// }
// console.log(ptag);


// let tor = document.querySelectorAll(".tor")[0];
// if(tor.classList.contains("active")){
//     alert('exist')
// }
// // tor.classList.toggle('active')
// console.log(tor.classList);

let itag = document.querySelectorAll('i')[0];
itag.classList.replace('fa-arrow-down', 'fa-arrow-up')

let imgTag = document.querySelectorAll('img')[0];
imgTag.src = 'https://images.pexels.com/photos/50582/selfie-monkey-self-portrait-macaca-nigra-50582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
console.log(imgTag);

let container = document.getElementsByClassName('container')[0];

container.onmouseover = function() {

    this.classList.add("active")
}
container.onmouseout = function(){

    this.classList.remove('active');
}
