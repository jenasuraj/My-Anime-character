
var urlParams = new URLSearchParams(window.location.search);

        let name = urlParams.get('a') 
        let age = urlParams.get('b') 
        let anime = urlParams.get('c');
        let choice=urlParams.get('select');
        

        if (choice == 'iq') {
            
            document.querySelector('mini-image').src = "images/lelouch(1).png"
        }
        else if (choice == 'friendly') {
            document.querySelector('.mini-image').src = "images/Naruto.png"}
        else if (choice == 'badass') 
        {
            document.querySelector('.mini-image').src = "images/shanks.png"}

            let winner = Math.random() < 0.3 ? true : false

            document.getElementById("take").innerText="Thanks a lot for choosing our site";