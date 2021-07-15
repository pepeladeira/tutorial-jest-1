const validateEmail = require('./emailValido');

test('validateEmail deve retornar verdadeiro para xxx@gmail.com', () => {
    expect(validateEmail('xxx@gmail.com')).toBeTruthy();
});

test('validateEmail deve retornar falso para xxxAgmail.com', () => {
    expect(validateEmail('xxxAgmail.com')).toBeFalsy();
});