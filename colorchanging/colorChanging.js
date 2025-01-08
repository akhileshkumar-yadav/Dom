const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 12)];

    }
    return color;
};


let intervalId;
const startColorChange = () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();

    }, 1000);
   
};

const stopColorChange = () => {
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#btn1').addEventListener('click', startColorChange)
document.querySelector('#btn2').addEventListener('click', stopColorChange)

// console.log('Hello, World!');
