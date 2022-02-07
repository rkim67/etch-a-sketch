//Created by rkim67

const container = document.querySelector("#container");
container.style.backgroundColor = "white";
let inputSize = 16;

//Function to set up the grid, taking size input
function createGrid(inputSize){

    let squareSize = document.getElementById("container").clientHeight/inputSize;

    for (let i = 0; i < inputSize; i++){
        let div = document.createElement("div");
        
        for (let x = 0; x < inputSize; x++){
            let box = document.createElement("div");
            box.setAttribute("class","box");
            box.style.width = squareSize +"px";
            box.style.height = squareSize +"px";
            
            box.addEventListener("mouseover", (e) =>{
                e.target.style.backgroundColor = "black";
            });
            div.append(box);
        }

        container.append(div);
    }
    
}


function resetColor(){
    while (container.firstChild) container.removeChild(container.firstChild);
    createGrid(inputSize);

}

function newGrid(input=16){
    inputSize = input;
    resetColor();
}

//Creating the default grid with 16x16 dimensions
document.onload = createGrid(16);


