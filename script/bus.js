
function buyTicket(){
    hideElementById('header-section');
    showElementById('main-section');
}

 // Get all <kbd> elements
 const keyElements = document.querySelectorAll('.kbd');

 // Add click event listener to each <kbd> element
 keyElements.forEach(key => {
   key.addEventListener('click', () => {
     const seat = key.innerText;
     // Add 'clicked' class to the clicked <kbd> element
     key.classList.add('bg-[#1DD100]');
    //  update seat
    const currentSeatElement = document.getElementById('current-seat');
    const currentSeatText = currentSeatElement.innerText;
    const currentSeat = parseInt(currentSeatText);
    const seatLeft = currentSeat-1;
    currentSeatElement.innerText = seatLeft;
    // add buying seat
    const currentBuyingSeatElement = document.getElementById('buying-seat');
    const currentBuyingSeatText = currentBuyingSeatElement.innerText;
    const currentBuyingSeat = parseInt(currentBuyingSeatText);
    const addSeat = currentBuyingSeat+1;
    currentBuyingSeatElement.innerText = addSeat;
    // append child
    const economyContainer = document.getElementById('economy-container')
    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-between');
    const p = document.createElement('p');
    p.innerText=seat;
    div.appendChild(p);
    const p1 = document.createElement('p');
    p1.innerText='Economy';
    div.appendChild(p1);
    const p2 = document.createElement('p');
    p2.innerText='550';
    div.appendChild(p2);

    economyContainer.appendChild(div);
    // add price
    const totalPriceElement=document.getElementById('seat-price');
    const totalPriceText=totalPriceElement.innerText;
    const updateTotalPrice=parseInt(totalPriceText);
    totalPriceElement.innerText=updateTotalPrice+550;
    const grandTotalElement= document.getElementById('grand-total');
    const grandTotalText=grandTotalElement.innerText;
    const grandTotalprice=parseInt(grandTotalText);
    grandTotalElement.innerText=grandTotalprice+550


   });
 });


//  show the success section
function clickNext(){
  hideElementById('main-section');
  showElementById('success-section');
 
 
}
