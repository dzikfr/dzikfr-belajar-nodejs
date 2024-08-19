console.log('Hello world');

const halo = 'halo';
const cetakNama = (nama, umur) => `${halo} nama saya ${nama}, dan umur ${umur}`;
const dataMhs = {
    nama: 'Dzikri',
    asal: 'Tangerang',
    cetakMhs(){
        return `halo nama saya ${this.nama} dari ${this.asal}`;
    } 
};
class Person{
    constructor(){
        console.log('kelas person sudah dibuat');
    }
};



module.exports = {
    halo,
    cetakNama,
    dataMhs,
    Person
}