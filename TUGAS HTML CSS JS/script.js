$(document).ready(function() {
    let menu = $('#menu-icon');
    let navbar = $('.navbar');

    menu.click(function() {
        navbar.toggleClass('active');
    });

    $(window).scroll(function() {
        navbar.removeClass('active');
    });

    $('#subscribeBtn').click(function(event) {
        event.preventDefault(); 
        let email = $.trim($('#emailInput').val()); 
        if (email === "") {
            alert("Email harus diisi!");
        } else {
            alert("Selamat bergabung!");
            $('#emailInput').val(""); 
        }
    });
});

