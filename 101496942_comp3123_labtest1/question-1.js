function lowerCase(str) {
    return new Promise((res, rej) => {
        if (!Array.isArray(str)) {
            rej("Input must be an array");
            return;
        }
        const words = str.filter((item) => typeof item === "string")
        .map((word) => word.toLowerCase());
        res(words);
    });
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCase(mixedArray)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });