//Created by rkim67

const container = document.querySelector("#container");

//Function to set up the grid, taking size input
function createGrid(inputSize){
    for (let i = 0; i < inputSize; i++){
        let div = document.createElement("div");
        
        for (let x = 0; x < inputSize; x++){
            let box = document.createElement("div");
            box.setAttribute("class","box");
            
            box.addEventListener("mouseover", (e) =>{
                e.target.style.backgroundColor = "black";
            });
            div.append(box);
        }

        container.append(div);
    }
    
}


function resetColor(){
}

document.onload = createGrid(16);

