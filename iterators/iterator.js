let countToTen = {};
countToTen[Symbol.iterator] = () => {
    let count = 0;
    return {
        next() {
            count++;
            return count <= 10 ? {
                done: false,
                value: count
            } : {
                done: true
            };
        }
    }
}

for (let n of countToTen) {
    console.log(n);
}