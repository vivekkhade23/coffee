// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee"));
console.log(data);
var total_price = data.reduce(function (sum, el) {
    return sum + el.price;
}, 0);

total = document.getElementById("total_amount");
total.innerText = null;
total.append(total_price);
console.log(total_price);

data.map(function (el, index) {
    let buck = document.getElementById("bucket");


    let box = document.createElement("div");
    box.setAttribute("id", "div")
    let type = document.createElement("h3");
    let image = document.createElement("img");
    image.setAttribute("id", "img");
    let price = document.createElement("h3");

    type.innerText = el.title;
    image.src = el.image;
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id", "remove_coffee");
    btn.addEventListener("click", function () {
        remove_coffee(el, index);
    });

    box.append(image, type, price, btn);

    buck.append(box);



})

function remove_coffee(el, index) {
    let data = JSON.parse(localStorage.getItem("coffee")) || [];
    data.splice(index, 1);
    localStorage.setItem("coffee", JSON.stringify(data));
    console.log(data)

    let buck = document.getElementById("bucket");
    buck.innerText = null;

    data.map(function (el, index) {



        let box = document.createElement("div");
        box.setAttribute("id", "div")
        let type = document.createElement("h3");
        let image = document.createElement("img");
        image.setAttribute("id", "img");
        let price = document.createElement("h3");

        type.innerText = el.title;
        image.src = el.image;
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.setAttribute("id", "remove_coffee");
        btn.addEventListener("click", function () {
            remove_coffee(el, index);
        });

        box.append(image, type, price, btn);



        buck.append(box);
    });
    var total_price = data.reduce(function (sum, el) {
        return sum + el.price;
    }, 0);

    total = document.getElementById("total_amount");
    total.innerText = null;
    total.append(total_price);
    console.log(total_price);



}