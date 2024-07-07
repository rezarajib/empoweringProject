document.getElementById('btnSubmit').addEventListener('click',function(){
    const enterEmail = document.getElementById('userEmail');
    const enterValueE = enterEmail.value;
    const enterPass = document.getElementById('userPassword');
    const enterValueP = enterPass.value
    if (enterValueE === "rajibreza64@gmail.com" && enterValueP === "171-35-1830"){
        window.location.href = "homePage.html";
    }
    else{
        alert("You Are NOt You");
    }
})