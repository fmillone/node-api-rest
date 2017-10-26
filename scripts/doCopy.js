let fs = require('fs-extra');

//   client -> dist/client
function printSuccessFor(origin, destination) {
    return () => console.log(`${origin} copied to ${destination}`);
}

function printErrors(err) {
    abort(err);
}

function abort(code) {
    console.log(`Exiting with code: ${code}`);
    process.exit(1);
}

function validate(args){
    if(args.length !== 2){
        abort('there must be 2 parameters');
    }
}


module.exports = args => {
    validate(args);
    const [origin, destination] = args;
    fs.copy(origin, destination)
        .then(printSuccessFor(origin, destination))
        .catch(printErrors);

};