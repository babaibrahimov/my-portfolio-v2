let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
})

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', {delay: 200, origin:'top'});
sr.reveal('.home-img', {delay: 200, origin:'top'});
sr.reveal('.about-text', {delay: 200, origin:'top'});
sr.reveal('.about-img', {delay: 200, origin:'top'});
sr.reveal('.skills-bar', {delay: 600, origin:'bottom'});
// sr.reveal('.contact-form', {delay: 200, origin:'top'});


let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 2; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 2;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}


// EMAIL JS
function validate() {
    let name = document.querySelector('.fullname')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else
        {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_bolgq3f","template_zbvd8c8",{
        from_name: name,
        email_id: email,
        message: msg,
    })
}




function emptyerror() {
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty!",
        icon: "error",
      })
}

function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      })
}