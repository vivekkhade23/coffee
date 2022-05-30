let confirm = document.querySelector("form");
confirm.addEventListener("submit", function () {
    event.preventDefault();
    alert("Your order is accepted")
    setTimeout(function () {
        alert("Your order is being Prepared");
        c1();
    }, 3000)

    function c1() {
        setTimeout(function () {
            alert("Your order is being packed");
            c2();
        }, 5000);

        function c2() {
            setTimeout(() => {
                alert("Your order is out for delivery");
                c3();
            }, 2000);
        }

        function c3() {
            setTimeout(() => {
                alert("Order delivered")
            }, 2000);
        }

    }


});