function start() {

    console.log('Before promise')

    const p = new Promise((resolve, reject) => {
        setTimeout(reject, 2000, 'Intentional Error');
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.error('Encountered error ' + error);
    });

    console.log('After promise');
}

start() 