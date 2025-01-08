const buttons = document.querySelectorAll('.container');
const body = document.querySelector('body');
       console.log(buttons);
       
  buttons.forEach(function(btn) {
    console.log(btn);
    //  d
    btn.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
    })
})