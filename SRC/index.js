const decode = require('./decode');

// Casos de prueba
const testCases = [
    { input: 'hola (odnum)', expected: 'hola mundo' },
    { input: '(olleh) (dlrow)!', expected: 'hello world!' },
    { input: 'sa(u(cla)atn)s', expected: 'santaclaus' }
];

// Ejecutar los casos de prueba
testCases.forEach(({ input, expected }) => {
    const result = decode(input);
    console.log(`Input: "${input}", Expected: "${expected}", Result: "${result}"`);
    console.assert(result === expected, `Test failed for input: ${input}`);
});