const resPromise = () =>{
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({message: 'delayed success!'});
        }, 500);
    });
};
const rejPromise = () =>{
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej({error: 'delayed exception!'});
        }, 500);
    });
};
resPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
rejPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });