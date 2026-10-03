const fs  = require('fs');
fs.writeFile('test.txt', 'Hello, World!', function(err) {
    if(err) console.error(err);
    else console.log('File has been saved!');
    
})

fs.rename('test.txt', 'newtest.txt', function(err) {
    if(err) console.error(err.message);
    else console.log('File has been renamed!');})

fs.copyFile('newtest.txt', '/Users/ujjwal/Desktop/Copytest.txt', function(err){
    if (err) console.error(err.message);
    else console.log('File has been copied!');
}); 


fs.unlink('newtest.txt', function(err) {
    if(err) console.error(err.message);
    else console.log('File has been deleted!');})
//unlink delete the file from the system

fs.unlink('/Users/ujjwal/Desktop/Copytest.txt', function (err){
    if (err) console.error(err.message);
    else console.log('File has been deleted!');
});


fs.rmdir('./newtest.txt', function(err) {
    if(err) console.error(err.message);
    else console.log('Directory has been deleted!');      
});


// how to made a folder
