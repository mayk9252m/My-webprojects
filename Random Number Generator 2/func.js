document.getElementById("launch").addEventListener("click",test);

function test(){
    
    let dicetype = document.getElementById("dicetypes").value;
    let launchnum = document.getElementById("launchNum").value;
    let result = document.getElementById("result");
    fetch("work.php",{
        method: "post",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            dicetype : document.getElementById("diceTypes").value,
            launchnum : document.getElementById("launchNum").value
        })
    }).then(function(response){
        return response.json();
    }).then(function(data){
        while(result.childElementCount > 0){
            result.removeChild(result.firstChild);
        }
        for (let item = 0; item < data.length; item++) {
            let div = document.createElement("div");
            div.innerHTML = data[item];
            div.className = "dice";
            //div.classList.add("dice");
            result.appendChild(div);
            //console.log(result);
        }
        //result.innerHTML = data;
        console.log(data);
    })
}
