// Add the coffee to local storage with key "coffee"

async function getdata() {
    let res = await fetch(`https://masai-mock-api.herokuapp.com/coffee/menu`)
    let data = await res.json();
    console.log(data.menu.data);

    append(data.menu.data);
}



getdata()
function append(data) {
    data.forEach(function (el) {
        let buck = document.getElementById("menu");


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
        btn.innerText = "Add to bucket";
        btn.setAttribute("id", "add_to_bucket");
        btn.addEventListener("click", function () {
            Addtobucket(el);
        });

        box.append(image, type, price, btn);

        buck.append(box);




    })
    let length = document.getElementById("coffee_count");
    length.innerText = null;
    
    let data2 = JSON.parse(localStorage.getItem("coffee"))
    length.append(data2.length);
    console.log(length.innerText);
}
function Addtobucket(el) {
    let data = JSON.parse(localStorage.getItem("coffee")) || [];
    data.push(el);
    localStorage.setItem("coffee", JSON.stringify(data));


    let length = document.getElementById("coffee_count");
    length.innerText = null;
    length.append(data.length);
    console.log(data);
    console.log(length.innerText);


}