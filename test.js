  const callGA = require('./'); // require the `index.js` file from the same directory.

    callGA('stop','ex2').then((err, resp) => {
        if (err) {
            console.log(err);
        } 
        console.log('test.js')     
        console.log(resp);
    });
