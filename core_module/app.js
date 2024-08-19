const fs = require('fs');

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