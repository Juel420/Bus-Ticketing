function hideElementById(elementId){
   const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
   const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setHighlited( elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-cyan-300')
}
function decressSeat(elementId){
    const element = document.getElementById(elementId);
    let currentCount = parseInt(element.textContent.split(' ')[1]);
    
        element.textContent = ` ${currentCount - 1} Seats left`;
    
    
}
