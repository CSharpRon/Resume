'use strict'

var mdpdf = require('mdpdf')
    , path = require('path');

var outDir = path.join(__dirname, '..')

console.log(outDir)
let options = {
    source: path.join(outDir, 'Readme.md'),
    destination: path.join(outDir, 'Resume.pdf'),
    defaultStyle: true,
    ghStyle: true,
    styles: path.join(__dirname, 'styles.css'),
    pdf: {
        format: 'A4',
        orientation: 'portrait',
        border: {
            top: 30,
            left: 30,
            right: 30,
            bottom: 30
        }
    }
};

mdpdf.convert(options).then(() => {
    console.log('Resume created!');
}).catch((err) => {
    console.error(err);
});
