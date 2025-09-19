
const first_parameter = require('./first_parameter');

test('test undefined if no parameter given', () => {
   expect(first_parameter()).toBeUndefined();
});

test('test not undefined if arameter given', () => {
   expect(first_parameter(1)).not.toBeUndefined();
});

test('test falsy if no parameter given', () => {
   expect(first_parameter()).toBeFalsy();
});

test('test truthy if parameter given', () => {
   expect(first_parameter(1)).toBeTruthy();
});
