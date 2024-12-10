const countValue =  document.querySelector('.count');
const inc = document.querySelector('.inc');
const res = document.querySelector('.res');
const dec = document.querySelector('.dec');

let count = 0;

function increase(){
   count += 1;
   countValue.textContent = count;
}
function decrease(){
    if(countValue.textContent >= 1){
        count -= 1;
    }
    else{
        reset();
    }
    countValue.textContent = count;
}
function reset(){
    count = 0;
    countValue.textContent = count;
}

inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);
res.addEventListener('click', reset);