
const add_key = require('./key');

test('add one element', () => {
   const obj = {status:'ok'};
   expect(add_key(obj,'s2','ok2')).toEqual({status:'ok',s2:'ok2'});
});
