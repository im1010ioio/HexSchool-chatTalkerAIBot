$(document).ready(function () {
    var currentUserCount = $("input[name=plan]:checked").val();

    function setPrice(litePrice, proPrice) {
        $("#text-price-lite").text(litePrice);
        $("#text-price-pro").text(proPrice);
    };

    $(".btn-price").click(function () {
        setTimeout(() => {
            currentUserCount = $("input[name=plan]:checked").val();
            console.log(currentUserCount);
            $(".text-user-count").text(currentUserCount);
            switch (currentUserCount) {
                case "10000":
                    setPrice(600, 1600);
                    break;
                case "15000":
                    setPrice(900, 2000);
                    break;
                case "20000":
                    setPrice(1200, 2400);
                    break;
                case "25000":
                    setPrice(1800, 2800);
                    break;
                case ">25000":
                    setPrice(2400, 3600);
                    break;
                default:
            }
        }, 350);
    });

    $(".content-faq-title").click(function() {
        var currentFAQ = $(this).siblings("input[name=faq]").prop('checked');
        var speedFAQ = 250;
        
        if (currentFAQ == false) {
            $(this).siblings(".content-faq-desc").slideDown(speedFAQ);
            $(this).parents(".card-faq").siblings(".card-faq").find(".content-faq-desc").slideUp(speedFAQ);
            $(this).parents(".card-faq").siblings(".card-faq").find("input[name=faq]").prop('checked', false);
        } else {
            $(this).siblings(".content-faq-desc").slideUp(speedFAQ);
        }
    });

});