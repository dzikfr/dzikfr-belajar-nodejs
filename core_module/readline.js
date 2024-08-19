const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('masukkan nama anda :', (nama)=>{
    rl.question('masukan nomor HP anda :', (nomor)=>{
        

        const contact = {nama, nomor}
        const file = fs.readFileSync('core_module/contacts.json', 'utf  8')
        const contacts = JSON.parse(file);
        contacts.push(contact);

        fs.writeFileSync('core_module/contacts.json', JSON.stringify(contact));

        console.log(`Terima kasih ${nama}, nomor kamu adalah ${nomor}`)
        rl.close();
    });
});


// // const readline = require('readline');
// // const fs = require('fs');

// // // Membuat interface untuk input/output dari command line
// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout,
// // });

// // // Menanyakan nama pengguna
// // rl.question('Masukkan nama anda: ', (nama) => {
// //     // Menanyakan nomor HP pengguna
// //     rl.question('Masukkan nomor HP anda: ', (nomor) => {
// //         console.log(`Terima kasih ${nama}, nomor kamu adalah ${nomor}`);

// //         const contact = {
// //             nama: nama,
// //             nomorHP: nomor
// //         };

// //         // Memastikan folder core_module ada
// //         if (!fs.existsSync('core_module')) {
// //             fs.mkdirSync('core_module');
// //         }

// //         // Membaca file contacts.json jika ada, jika tidak ada maka buat array kosong
// //         let contacts = [];
// //         try {
// //             const file = fs.readFileSync('core_module/contacts.json', 'utf-8');
// //             contacts = JSON.parse(file);
// //         } catch (err) {
// //             console.log('File tidak ditemukan, membuat file baru.');
// //         }

// //         // Menambahkan kontak baru ke dalam array
// //         contacts.push(contact);

// //         // Menulis kembali array kontak ke dalam file
// //         fs.writeFileSync('core_module/contacts.json', JSON.stringify(contacts, null, 2));

// //         rl.close();
// //     });
// // });


// const readline = require('readline');
// const fs = require('fs');

// // Membuat interface untuk input/output dari command line
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Menanyakan nama pengguna
// rl.question('Masukkan nama anda: ', (nama) => {
//     // Menanyakan nomor HP pengguna
//     rl.question('Masukkan nomor HP anda: ', (nomor) => {
//         console.log(`Terima kasih ${nama}, nomor kamu adalah ${nomor}`);

//         const contact = {
//             nama: nama,
//             nomorHP: nomor
//         };

//         // Memastikan folder core_module ada
//         if (!fs.existsSync('core_module')) {
//             fs.mkdirSync('core_module');
//         }

//         // Membaca file contacts.json jika ada, jika tidak ada maka buat array kosong
//         let contacts = [];
//         try {
//             const file = fs.readFileSync('core_module/contacts.json', 'utf-8');
//             contacts = JSON.parse(file);

//             // Jika isi file bukan array, reset menjadi array kosong
//             if (!Array.isArray(contacts)) {
//                 contacts = [];
//             }
//         } catch (err) {
//             console.log('File tidak ditemukan atau tidak bisa dibaca dengan benar, membuat file baru.');
//         }

//         // Menambahkan kontak baru ke dalam array
//         contacts.push(contact);

//         // Menulis kembali array kontak ke dalam file
//         fs.writeFileSync('core_module/contacts.json', JSON.stringify(contacts, null, 2));

//         rl.close();
//     });
// });
