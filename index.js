var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

console.log("Buku yang saya baca");
readBooks(10000, books[0], function(timeSpentBaru){
    readBooks(timeSpentBaru, books[1], function(timeSpentBaru1){
        readBooks(timeSpentBaru1, books[2], function(timeSpentBaru2){
            readBooks(timeSpentBaru2, books[3], function(timeSpentBaru3){
            console.log("Selesai, sisa waktu: "+ timeSpentBaru3)
        })
    });
});
});