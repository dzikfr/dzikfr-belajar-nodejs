const fs = require('fs');

//Membuat file
//SYNCRONUS
// Membuat folder 'core_module' jika belum ada
if (!fs.existsSync('core_module')) {
    fs.mkdirSync('core_module');
}
//menulis string ke file dan mengecek apakah folder sudah ada atau belum
try{
    fs.writeFileSync('core_module/test.txt','ini menulis ke file secara syncronous')
}catch(e){
    console.log(e);
}


//menulis string ke file secara asyncronous
fs.writeFile('core_module/test_async.txt', 'ini menulis ke file seacara asyncronus', (e) => console.log(e)); 



//Membaca file
//secara syncronus
console.log(fs.readFileSync('core_module/test.txt','utf-8'))

//secara asyncronus
fs.readFile('core_module/test_async.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});

