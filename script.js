function onButtonClick(){
    alert('ButtonClicked')
}

    

 const button = document.querySelector('button');
    button.addEventListener('click', onButtonClick);

const newButton =document.createElement('button')
newButton.textContent = 'click me!'
document.body.appendChild(newButton);

newButton.addEventListener('click' ,() => {
    alert('New button clicked!');
})