const object = {
    name: 'Xuyen Pham',
    age: '24',
    isMarried: false,
    hobbies: {
        monday: 'ngu nuong',
        tuesday: 'an com'
    }
}
const array = [1, 2, 3, 4, 5, 6];

function calculateTotal(a, b) {
    console.log(1, this)
    return a + b;
}

const calculateTotalArrowFunc = (a, b) => a + b;

// console.log(calculateTotalArrowFunc(3, 4))

const abcd = false;

console.log(abcd ?? 1)

// syntax condition ? value1 : value2;
