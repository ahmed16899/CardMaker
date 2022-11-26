let win;
function submitData() {
    win = open('index1.html', '', 'width=500 , height=500');
    

    const message = document.createElement("h1");
    message.innerText=document.getElementById("massage").value;
    win.document.write("your card is ");
    win.document.body.appendChild(message);
    console.log(message.innerHTML)


    const image = document.createElement("img");
    image.src = document.querySelector('input[name="picture"]:checked').value
    win.document.body.appendChild(image);
    console.log(image.src)

}

function winClose()
{
    win.close();
}