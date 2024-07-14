let boxes=document.querySelectorAll('#bt');
let reset=document.querySelector('#reset')
let win=document.querySelector('#win');

let chanceX=true;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(chanceX)
        {
            box.innerText="O";
            chanceX=false;
        }
        else
        {
            box.innerText="X";
            chanceX=true;
        }
        console.log("button was clicked");
        box.disabled=true;

        checkWinner();
        
    })
})

function checkWinner(){
    for(i of winPattern){
        posval1=boxes[i[0]].innerText,
        posval2=boxes[i[1]].innerText,
        posval3=boxes[i[2]].innerText

        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1== posval2 && posval2==posval3){
                console.log("Winner");
                win.innerText=`Winner: ${posval1}`;
                boxes.forEach((box)=>{
                    box.disabled=true;
                });
                return;
            }
        }
    } 
}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    chanceX = true;
    win.innerText = ""; // Ensure this is the correct element ID
});

