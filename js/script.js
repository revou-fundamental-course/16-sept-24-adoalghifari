// Fungsi untuk mengganti nama pengguna
function replaceName() {
  var name = prompt("Siapakah Nama Anda?", "");
  if (name) {
    document.getElementById("name").innerHTML = name; // Mengganti nama pengguna di elemen dengan ID 'name'
  }
}

// Menambahkan event listener untuk tombol ganti nama
document.getElementById("tombol").addEventListener("click", replaceName);

// Inisialisasi untuk slideshow
var slideIndex = 1;
showDivs(slideIndex); // Menampilkan gambar pertama

// Fungsi untuk mengubah slide
function plusDivs(n) {
  showDivs((slideIndex += n)); // Menambahkan atau mengurangi slideIndex
}

// Fungsi untuk menampilkan gambar
function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow"); // Mendapatkan semua gambar dengan kelas 'img-slideshow'

  if (n > imgList.length)
    slideIndex = 1; // Jika slideIndex lebih dari jumlah gambar, kembali ke slide pertama
  else if (n < 1) slideIndex = imgList.length; // Jika slideIndex kurang dari 1, kembali ke slide terakhir

  // Menyembunyikan semua gambar
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block"; // Menampilkan gambar yang sesuai dengan slideIndex
}

// Mengatur interval untuk secara otomatis mengganti gambar setiap 5 detik
setInterval(() => {
  plusDivs(1); // Menambah slideIndex untuk menampilkan gambar berikutnya
}, 5000);

// Fungsi untuk validasi form
function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const genderElements = document.forms["message-form"]["gender"];
  const messages = document.forms["message-form"]["messages"].value;
  let gender = "";

  // Mendapatkan jenis kelamin yang terpilih
  for (let i = 0; i < genderElements.length; i++) {
    if (genderElements[i].checked) {
      gender = genderElements[i].value; // Mendapatkan nilai jenis kelamin
      break;
    }
  }

  // Memeriksa apakah ada yang kosong
  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("tidak boleh ada yang kosong"); // Menampilkan alert jika ada yang kosong
    return false; // Mencegah form untuk dikirim
  }

  setSenderUI(name, birthDate, gender, messages); // Mengatur tampilan hasil
  return false; // Mencegah form untuk dikirim
}

// Fungsi untuk menampilkan hasil input pengguna
function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name; // Menampilkan nama
  document.getElementById("sender-birth-date").innerHTML = birthDate; // Menampilkan tanggal lahir
  document.getElementById("sender-gender").innerHTML = gender; // Menampilkan jenis kelamin
  document.getElementById("sender-messages").innerHTML = messages; // Menampilkan pesan
}

// Fungsi untuk menampilkan waktu saat ini
function displayCurrentTime() {
  const currentTimeElement = document.getElementById("current-time");

  // Update setiap detik
  setInterval(function () {
    const now = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedTime = now.toLocaleDateString("en-GB", options); // Mengatur format waktu
    currentTimeElement.innerHTML = formattedTime; // Menampilkan waktu saat ini
  }, 1000);
}

// Fungsi yang dijalankan saat halaman dimuat
window.onload = function () {
  replaceName(); // Mengganti nama saat halaman dimuat
  displayCurrentTime(); // Menampilkan waktu saat ini
};
