const expect = require('expect');
const {generateMessage} = require('./message');

describe('Message', ()=>{
  it('should return message', ()=>{
    var from = 'Ankur';
    var text = 'Hello';
    var message = generateMessage('Ankur', 'Hello');
    
    expect(message.from).toBe(from);
  });
});
