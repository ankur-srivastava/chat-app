# Chat App
A chat app built using node.js

/server : for node.js code

/public : for HTML's

Heroku URL - https://evening-plateau-12166.herokuapp.com/

To test:

1. Open two browser windows with same URL. Open developer tools on both.

2. Now in console type : socket.emit('newMessage', {from: 'Ankur', text: 'Helloooss'}); and hit enter.

3. This event should get displayed in both windows.
