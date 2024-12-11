const countValue =  document.querySelector('.count');
const inc = document.querySelector('.inc');
const res = document.querySelector('.res');
const dec = document.querySelector('.dec');

let count = 0;

function increase(){
   count += 1;
   countValue.textContent = count;
   console.log(`Incremented to : ${count} from ${(count-1)}`);
}
function decrease(){
   if(countValue.textContent >= 1){
        count -= 1;
        console.log(`Decremented to : ${count} from ${(count+1)}`);
    }
    else{
        count = 0;
        alert("Can't decrement below 0!!!");
    }
    countValue.textContent = count;
    
}
function reset(){
    count = 0;
    if(countValue.textContent  != 0){
       
       console.log(`Reset to : 0`);
    }
    else{
       console.log("Value already Zero");
    }
    
    countValue.textContent = count;
}

inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);
res.addEventListener('click', reset);
