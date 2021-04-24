/*
  pada program ini terdapat fungsi-fungsi berikut yang sudah dibuat oleh rekan kerja anda:
  - displayFruit(fruit, fruitIndex)
    Memberitahukan kepada sistem buah yang ditampilkan adalah fruit yang berada pada indeks fruitIndex
  - getSearchedFruit()
    Mengembalikan string menyatakan buah yang dicari
  - getDeletedFruitIndex()
    Mengembalikan number menyatakan indeks tempat objek buah yang ingin dihapus disimpan
*/

/***********************************************************************/
/*** (1) Membuat struktur data untuk menyimpan data buah yang dijual ***/
/***********************************************************************/

let fruits = [{
  name: "Jeruk",
  price: 5000,
  discount: 0
},
{
  name: "Apel",
  price: 10000,
  discount: 10
},
{
  name: "Melon",
  price: 14000,
  discount: 15
},
{
  name: "Pepaya",
  price: 7000,
  discount: 5
},
{
  name: "Buah Naga",
  price: 15000,
  discount: 20
},
{
  name: "Anggur",
  price: 60000,
  discount: 45
}]

/*******************************************************/
/*** (2) Mengimplementasikan algoritma linear search ***/
/*******************************************************/
function linearSearch() {
  var buah = getSearchedFruit();
  for (let i = 0; i < fruits.length; i++) {
    if (buah == fruits[i].name) {
      return displayFruit(fruits[i], i);
    }
  }
}

/**********************************************/
/*** (3) Menampilkan semua buah yang dijual ***/
/**********************************************/

function displayFruits() {
  fruits.forEach((value, index) => {
    return displayFruit(value, index);
  });
}


/****************************************************/
/*** (4) Mencari dan menampilkan buah yang dicari ***/
/****************************************************/

function searchFruit() {
  linearSearch();
}

/********************************************/
/*** (5) Menghapus data buah yang dipilih ***/
/********************************************/

function deleteFruit() {
  fruits.splice(getDeletedFruitIndex(), 1);
  console.log(fruits);
}