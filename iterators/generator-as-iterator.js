var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield "Hello";
    yield "World";
    yield "!";
};

for (let value of myIterable) {
    console.log(value);
}