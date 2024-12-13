// pages/about.js
"use client";
import Container from "@/components/ui/container";
import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <Container title="Tentang Named Data Network (NDN)">
      <p>
        Named Data Network (NDN) adalah inovasi teknologi jaringan yang
        dirancang untuk menggantikan atau berjalan di atas protokol TCP/IP yang
        digunakan di Internet saat ini. NDN mengganti alamat IP dengan *nama
        data* untuk mengirim dan menerima informasi. Pendekatan ini membawa
        banyak manfaat, terutama dalam hal keamanannya yang lebih baik,
        skalabilitas yang lebih tinggi, dan komunikasi yang lebih efisien.
      </p>
      <br />
      <p>
        Proyek ini dimulai dengan tujuan untuk meningkatkan cara kita
        berinteraksi dengan data di dunia digital, dengan menyediakan sistem
        yang lebih aman, efisien, dan terdesentralisasi. Di dalam NDN, setiap
        data yang dikirimkan ditandatangani secara digital, memungkinkan
        keamanan yang lebih terintegrasi di dalam jaringan daripada sistem yang
        ada sekarang yang hanya mengandalkan perlindungan data sebagai tambahan.
        Teknologi ini memberikan solusi untuk masalah-masalah yang tidak bisa
        diselesaikan oleh pendekatan yang lebih tua, seperti mengurangi
        ketergantungan pada penyedia layanan besar dan memungkinkan komunikasi
        yang lebih terdistribusi serta lebih pribadi.
      </p>
      <br />

      <p>
        Kenapa kami memilih untuk meneliti dan mengembangkan NDN? Karena kami
        percaya bahwa dunia digital harus beralih menuju model yang lebih
        terbuka dan terdesentralisasi, di mana kontrol atas data tidak
        dimonopoli oleh entitas tertentu. Dengan NDN, kami dapat menciptakan
        fondasi untuk aplikasi yang lebih aman dan dapat dipercaya, yang sangat
        cocok untuk aplikasi yang membutuhkan komunikasi yang cepat dan aman,
        seperti metaverse, augmented reality, atau layanan di mana koneksi
        internet mungkin terganggu.
      </p>

      {/* Video YouTube Frame */}
      <div style={styles.videoFrame}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/6qbRriSdw0Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Informasi tentang fokus penelitian */}
      <div style={styles.researchFocus}>
        <p>
          Penelitian ini berfokus pada pengembangan sistem video streaming yang
          menggunakan Named Data Networking (NDN) untuk menyediakan pengalaman
          streaming yang lebih efisien, aman, dan terdesentralisasi. Dengan NDN,
          kami berharap dapat meningkatkan kecepatan distribusi data dan
          mengurangi ketergantungan pada server sentral, yang seringkali menjadi
          titik kegagalan dalam sistem streaming tradisional.
        </p>
      </div>

      {/* Video YouTube Frame */}
      <div style={styles.videoFrame}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/watch?v=ud9YOlekH6c"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Link
          className="text-blue-600 underline"
          href={"https://www.youtube.com/watch?v=ud9YOlekH6c"}
        >
          sumber video : https://www.youtube.com/watch?v=ud9YOlekH6c
        </Link>
      </div>
    </Container>
  );
};

const styles = {
  videoFrame: {
    marginTop: "40px",
    marginBottom: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  researchFocus: {
    marginTop: "20px",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#333",
    textAlign: "center",
  },
};

export default About;
