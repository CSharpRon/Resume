'use strict'

var mdpdf = require('mdpdf')
    , path = require('path');

var outDir = path.join(__dirname, '..')

console.log(outDir)
let options = {
    source: path.join(outDir, 'Readme.md'),
    destination: path.join(outDir, 'Resume.pdf'),
    ghStyle: true,
    pdf: {
        format: 'A4',
        orientation: 'portrait'
    }
};

mdpdf.convert(options).then(() => {
    console.log('Resume created!');
}).catch((err) => {
    console.error(err);
});
