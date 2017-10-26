
const actions = [];
function loadActions() {
    actions.push({
        name: 'copy',
        do: require('./doCopy')
    });
}

const exitCodes = {
    'NO_OPTION':'No option was provided',
    'INVALID_OPTION': 'Invalid option'
};

function abort(code) {
    console.log(`Exiting with code: ${exitCodes[code]}`);
    process.exit(1);
}

function validate(args) {
    if(args.length === 0){
        abort('NO_OPTION'); 
    }
}

function findAction(name){
    return actions.find( it => it.name === name);
}

function _do(args) {
    validate(args);
    const option = args[0];
    const action = findAction(option);
    if(action){
        action.do(args.slice(1));
    }else{
        abort('INVALID_OPTION');
    }
}

const args = process.argv.slice(2);
loadActions();
_do(args);


