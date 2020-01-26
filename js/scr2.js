// let helloTag = document.getElementsByTagName('div')[0];
// helloTag.onclick = function(){
//     this.classList.toggle('active')
// }



// let helloTag = document.getElementsByTagName('div');

// for (let i = 0; i < helloTag.length; i++) {
//     helloTag[i].onclick = function(){

//         for (let j = 0; j < helloTag.length; j++) {
//             helloTag[j].classList.remove('active');
//         }
        
//         this.classList.toggle('active');
//     } 
// }


 
// let icon = document.getElementsByClassName('fas')[0];
// icon.onclick = function(){

//     if(this.classList.contains("fa-arrow-down")){

//         this.classList.replace("fa-arrow-down","fa-arrow-up")
//     }else{
//         this.classList.replace("fa-arrow-up","fa-arrow-down")
//     }

// }

let headers = document.querySelectorAll(".header");
let ptags = document.querySelectorAll('.content p')[0]


for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", function(){
        ptags[i].classList.toggle("active")
    })
    
}

