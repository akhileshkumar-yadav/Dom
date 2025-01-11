// ------------------- async/await -------------------
 function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data Received!');
            resolve('seccess fully completed')
        }, 2000);
    })
}

// async function name() {
console.log('start');

    async function getAllData() {
        await fun();
        await fun();
        await fun();
        await fun();
        console.log("await");
        
    }

    getAllData();
// }



