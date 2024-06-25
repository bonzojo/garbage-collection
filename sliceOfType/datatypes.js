//Primitive Values

const datatypes = [null, undefined, 123456789012345n, Symbol(), 'string', 123, true];

function dataTypeReadOut() {
    for (let i = 0; i < datatypes.length; i++) {
        if (typeof datatypes[i] === 'symbol') {
            console.log(' Primitive Value: ' + datatypes[i].toString() + ' ----typeof----> ' + typeof datatypes[i]);
        } else {
            console.log(' Primitive Value: ' + datatypes[i] + ' ----typeof----> ' + typeof(datatypes[i]));
        }
    }
}
dataTypeReadOut();
