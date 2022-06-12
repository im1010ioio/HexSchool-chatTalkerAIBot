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
});