console.log("ini javascript");

console.log(10);

// cara mendefinisakan variable di dalam javascript

// variable string
var nama = "Ozy";

// variable number
var umur = 13;

console.log(nama, umur);

// manipulasi DOM

// mengakses satu element
var elementJudul = document.getElementById("judul");

console.log(elementJudul);

// ganti tulisan
elementJudul.textContent = "Belajar Javascript Dasar";

var playground = document.getElementById("playground");

console.log(playground);
playground.style.backgroundColor = "yellow";

playground.style.textAlign = "center";

// membuat element

var paragraf = document.createElement("p");
paragraf.textContent = "ini paragraf buatanku";

// masukan = append

playground.appendChild(paragraf);
