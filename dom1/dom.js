// const H = document.getElementById('head1')
// H.style.color = 'red'
// H.style.padding = '10px'
// H.style.textDecoration = 'underline'
// H.style.fontSize = '50px'

// const Class = document.getElementById('head1').className
// console.log(Class);

// const cla = document.getElementById('head1').getAttribute('class')
const cla = document.getElementById('head1')
cla.style.color = "red"
cla.style.textAlign = "center"
cla.style.backgroundColor = 'gray'
cla.style.padding = "10px"


// const detail = document.getElementById('unorder')
// // console.log(detail.innerText)
// // console.log(detail.innerText = "This is a unordered list");
// const find = detail.getElementsByClassName('list')
// console.log(find);
// // conver in array
// const array = Array.from(find)
// const array2 = array.forEach((l,index) =>{
//     if(index%2===0){
//         l.style.color = "blue"
//         l.style.fontSize = '30px'
//     }
//     else{
//         l.style.color = "red"
//     }
// })
// console.log(array);

const qr = document.getElementById('unorder')
console.log(qr);
const lis = qr.getElementsByClassName('list')
console.log(lis);

const qur = document.querySelectorAll('.list')
console.log(qur);
qur.forEach((A , index) => {
    if(index%2===0){
        A.style.color = "blue"
        A.style.fontSize = '30px'
    }
    else if(index%3===0){
        A.style.color = "red "

    }
    else{
        A.style.color = "green"
    }
})








