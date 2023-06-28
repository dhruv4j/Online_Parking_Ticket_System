$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.accordion-heading').click(function(){

        $('.accordion .accordion-content').slideUp();

        $(this).next('.accordion-content').slideDown();

    });

});

const typed = new Typed('.multiple-text', {
    strings: ['DigiPark', 'DigiPark'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function displaymessage(){
    event.preventDefault();
    document.getElementById('feedbackform').innerHTML="<h1>Thank you for your feedback!</h1>";
    alert('Message has been sent.')
    setTimeout(() => {
        document.getElementById('feedbackform').innerHTML=`<div class="inputBox">
        <input type="text" placeholder="Name" required>
        <input type="text" placeholder="Surname" required>
        </div>

        <div class="inputBox">
        <input type="email" placeholder="Email" required>
        <input type="number" placeholder="Contact Number" required>
        </div>

        <textarea name="" id="" cols="30" rows="10" placeholder="Your Experience With Us..." required></textarea>

        <input type="submit" value="message" class="btn" id="messagebtn">`;
    }, 5000);
}

function slotform(){
    event.preventDefault();
    alert('Validation successfull click again to continue.');
    document.getElementById('suprise').outerHTML=`<input type="button" id="suprise" onclick="newpage()" class="submitbtn" value="Book Slot">`;
    console.log(document.getElementById('suprise'));
}
function newpage(){
    window.location="admin.html";
}
