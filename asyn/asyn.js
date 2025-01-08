const fun = () => {
    console.log("Hello, World!");
    document.querySelector('h1').innerText = 'Hello, World!';
    document.querySelector('body').style.backgroundColor = '#65a634' + 1;
}

// const ref = setTimeout(fun, 2000);

// document.querySelector('#stop').addEventListener('click', () => {
//     clearTimeout(ref);
// })


const interval = setInterval(fun, 2000);
document.querySelector('#stop').addEventListener('click', () => {
    
    clearInterval(interval);
})