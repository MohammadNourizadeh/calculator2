// ........ variable ............
const screen = document.getElementById('screen');

// ........ func .........
const adder = (inp) => {
    screen.value += inp;
}

const clear = () => {
    screen.value = '';
}

const equal = () => {
    if (screen.value === '') {
        screen.value === ''
    } else {
        screen.value = eval(screen.value);
    }
}

const zero = document.getElementById('zero-btn').addEventListener('click', () => { adder(0) });
const one = document.getElementById('one-btn').addEventListener('click', () => { adder(1) });
const two = document.getElementById('two-btn').addEventListener('click', () => { adder(2) });
const three = document.getElementById('three-btn').addEventListener('click', () => { adder(3) });
const four = document.getElementById('four-btn').addEventListener('click', () => { adder(4) });
const five = document.getElementById('five-btn').addEventListener('click', () => { adder(5) });
const six = document.getElementById('six-btn').addEventListener('click', () => { adder(6) });
const seven = document.getElementById('seven-btn').addEventListener('click', () => { adder(7) });
const eight = document.getElementById('eight-btn').addEventListener('click', () => { adder(8) });
const nine = document.getElementById('nine-btn').addEventListener('click', () => { adder(9) });
const sum = document.getElementById('sum-btn').addEventListener('click', () => { adder('+') });
const sub = document.getElementById('sub-btn').addEventListener('click', () => { adder('-') });
const mult = document.getElementById('mult-btn').addEventListener('click', () => { adder('*') });
const allo = document.getElementById('allo-btn').addEventListener('click', () => { adder('/') });
const dot = document.getElementById('dot-btn').addEventListener('click', () => { adder('.') });

const AC = document.getElementById('ac-btn').addEventListener('click', () => { clear() });
const enter = document.getElementById('enter-btn').addEventListener('click', () => { equal() });