import React from "react";
import Img1 from "../../assets/detail_product/1-home.png";
import Img2 from "../../assets/detail_product/2-keranjang.png";
import Img3 from "../../assets/detail_product/3-akun.png";
import Img4 from "../../assets/detail_product/4-order.png";
import Img5 from "../../assets/detail_product/5-alamat.png";
import Img6 from "../../assets/detail_product/6-login.png";
import CursorZoom from "react-cursor-zoom";
import "./detail.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const partDetail = [
    {
      id: 1,
      title: "Home",
      description:
        "Berfungsi sebagai etalase produk, dimana user atau guest dapat melihat pilihan produk. Dilengkapi dengan fitur pencarian untuk mencari produk, kategori untuk memfilter menu atau item yang ada di tampilan home, dan juga tag untuk menandakan keunikan dari setiap item. terdapat juga tombol keranjang untuk memasukan item pilihan kedalam keranjang.",
      img: Img1,
    },
    {
      id: 2,
      title: "Cart",
      description:
        "Pada halaman cart atau keranjang, user dapat menambah atau mengurangi item yang telah dipilih sebelumnya pada halaman home. informasi mengenai total harga, dan juga jumlah barang yang dipilih ditampilkan sebagai informasi. ada juga tombol untuk checkout keranjang belanja.",
      img: Img2,
    },
    {
      id: 3,
      title: "Account",
      description: "Tersedia juga halaman Account untuk mengetahuin informasi yang dimiliki oleh user terkait dengan detail profil, detail pemesanan, dan juga detil alamat user,serta tombol logout untuk mengeluarkan akun dari pos.",
      img: Img3,
    },
    {
      id: 4,
      title: "Pemesanan",
      description: "Halaman pemesanan dapat di akses oleh user untuk mengetahui detail pemesanan berupa item yang di order, jumlah barang, total harga, status pembayaran dan juga invoice dari orderan tersebut.",
      img: Img4,
    },
    {
      id: 5,
      title: "Alamat",
      description: "Untuk Alamat juga dapat ditambah ataupun dirubah sesuai dengan kebutuhan user, beberapa alamat dapat ditambahkan dan dapat dipilih saat melakukan pesanan",
      img: Img5,
    },
    {
      id: 6,
      title: "Login",
      description:
        "Halaman login diperlukan untuk mengakses fitur order, jika user tidak login, makan user dengan status guest hanya dapat melihat tampilan produk yang ada di halaman home dan menambahkannya ke keranjang, tetapi tidak dapat melanjutkan orderan ke proses pembayaran.",
      img: Img6,
    },
  ];
  return (
    <section id="detail">
      <div className="head container">
        <h1>Website POS</h1>
        <b>MongoDB || Express JS || Node JS || React JS</b>
        <p style={{ marginTop: "15px", marginBottom: "20px" }}>
          Website POS ini dibuat dengan menerapkan teknologi MERN yaitu React JS untuk frontend, redux untuk state management, Node JS dan Express JS untuk backend dan MongoDB sebagai database. Hak akses yang diterapkan dalam website POS
          ini dibagi ke dalam 3 role yaitu sebagai admin, user dan guest. Sedangkan guest memiliki hak akses yang sangat terbatas karena ada beberapa fitur website yang hanya bisa diakses jika sudah login (role user). Adapun fitur-fitur di
          dalam website POS ini akan dijelaskan secara detail sebagai berikut.
        </p>
      </div>
      <div className="container detail__container">
        {partDetail.map((detail) => (
          <article className="detail__item" key={detail.id}>
            <div className="detail__item-image">
              <CursorZoom
                image={{
                  src: detail.img,
                  width: 400,
                  height: 300,
                }}
                zoomImage={{
                  src: detail.img,
                  width: 700,
                  height: 700,
                }}
                cursorOffset={{ x: 80, y: -80 }}
                className="imageItem"
              />
            </div>
            <div className="detail__item-content">
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="container detail__item-cta">
        <Link to={"/"} className="btn">
          Home
        </Link>
      </div>
    </section>
  );
};

export default Detail;
