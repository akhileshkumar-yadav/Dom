// async await is a new way to write asynchronous code. It is built on top of promises, so it is also non-blocking.
// It makes asynchronous code look and behave a little more like synchronous code.
 const fun = async () => {
    console.log("Hello, World!");
    document.querySelector('h1').innerText = 'Hello, World!';
    document.querySelector('body').style.backgroundColor = '#65a634' + 1;
 }
 fun();
 