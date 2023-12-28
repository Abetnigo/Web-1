document.querySelectorAll('.btnDetails').forEach(item=>{
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>Informasi Belum Teredia</i>';
        

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;

        const nohp = '6288983304824';
        let pesan = 'https://api.whatsapp.com/send?phone=6288983304824&text=Halo min Saya Mau Beli Barang Ini ${gambar} ';

document.querySelector('.btnBeli').href = pesan;

    })
})