let h4 = document.querySelector("h4");
let  btn = document.querySelector("#add");
let check = 0;

 btn.addEventListener("click" , function(){
    if(check == 0){
    h4.innerHTML = "Friends";
    h4.style.color = "green";
    btn.innerHTML = "Remove";
    
    check = 1;
    }else{
    h4.innerHTML = "Stranger";
    h4.style.color = "red";
    btn.innerHTML = "Add Friend";
    // btn.style.backgroundColor = 'green';
    check = 0;
    }
})

