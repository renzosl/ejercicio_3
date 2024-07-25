function decode(s) {
    let stack = [];
    let current = '';
    
    for (let char of s) {
        if (char === '(') {
            stack.push(current);
            current = '';
        } else if (char === ')') {
            current = stack.pop() + current.split('').reverse().join('');
        } else {
            current += char;
        }
    }
    
    return current;
}

module.exports = decode;