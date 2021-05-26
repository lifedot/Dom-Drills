document.addEventListener("DOMContentLoaded", function() {
    let div1 = document.createElement("div");
    div1.className = "header-container";
    document.body.appendChild(div1);
    let liBtn = document.getElementsByClassName("li-Btn")[0]

    let newh1 = document.createElement("h1");
    newh1.className = "h1";
    let newText = document.createTextNode("This is an h1");
    newh1.appendChild(newText);
    div1.appendChild(newh1);

    let newh2 = document.createElement("h2");
    newh2.className = "h2";
    let newText1 = document.createTextNode("This is an h2");
    newh2.appendChild(newText1);
    div1.appendChild(newh2);
   

    let newh3 = document.createElement("h3");
    newh3.className = "h3";
    let newText2 = document.createTextNode("This is an h3");
    newh3.appendChild(newText2);
    div1.appendChild(newh3);
    

    let newh4 = document.createElement("h4");
    newh4.className = "h4";
    let newText3 = document.createTextNode("This is an h4");
    newh4.appendChild(newText3);
    div1.appendChild(newh4);
    

    let newh5 = document.createElement("h5");
    newh5.className = "h5";
    let newText4 = document.createTextNode("This is an h5");
    newh5.appendChild(newText4);
    div1.appendChild(newh5);
    

    let newh6 = document.createElement("h6");
    newh6.className = "h6";
    let newText5 = document.createTextNode("This is an h6");
    newh6.appendChild(newText5);
    div1.appendChild(newh6);

    let colorsArray = ["blue", "pink", "orange", "purple", "green", "red", "teal", "brown"];
    
    let headings = [newh1, newh2, newh3, newh4, newh5, newh6];
    for (i = 0; i < headings.lenghth; i++){
        let heading = headings[i];
        heading.addEventListener("dblclick", function(){
            heading.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        });
    }
    let liCtr = 1

    liBtn.addEventListener("click", function(){
        let li = document.createElement("li")
        let liText = document.createTextNode(`This is list item ${liCtr}`)

        li.appendChild(liText)
        div1.appendChild(li)
        liCtr++

        li.addEventListener("click", function(){
            li.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        })

        li.addEventListener("dblclick", function(){
            li.remove()
        })
    })
})

