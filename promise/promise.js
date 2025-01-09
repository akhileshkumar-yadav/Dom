let getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Data Received!');
            
            reject('Data not Received!');
        }, 2000);
    });
}

const promise = getData();
promise.then((res) => {
    console.log(res);
})
promise.catch((res) => {
    console.log(res);
})