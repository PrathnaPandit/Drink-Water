const smallCups = document.querySelectorAll('.box');
const liter = document.querySelector('.liters');
const percent = document.querySelector('.percent');
const remained = document.querySelector('.center');

smallCups.forEach((box , index) => {
     box.addEventListener('click', () => highlightcups(index));
})

function highlightcups(index) {
if(smallCups[index].classList.contains('fill') && !smallCups[index+1].classList.contains('fill')) {
    index=index-1;
}
smallCups.forEach((box, index1) => {
    if(index1 <= index){
        box.classList.add('fill');
    } else{
        box.classList.remove('fill');
    }
})
  
   bigCup(index)
}

function bigCup(index) {
    const fullCups = index+1;
    const totalCups = smallCups.length;
    
    if( fullCups == 0) {
        percent.style.display = 'none';
        liter.innerHTML = '2L';
    } else {
        percent.style.display = 'block';
        percent.style.height =`${fullCups / totalCups * 322}px`
        percent.innerHTML = `${fullCups * 12.5}%`
        liter.innerHTML =`${2-(fullCups*0.25)}L`
    }

}



