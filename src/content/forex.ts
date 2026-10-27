/**
 * All copy, links and data for the /forex landing page.
 * Migrated verbatim from the Framer site (get.mifx.com/forex).
 * Edit here — components only handle layout.
 */
import type { StaticImageData } from "next/image";

import flagEurusd from "@/assets/images/flag-eurusd.png";
import flagGbpusd from "@/assets/images/flag-gbpusd.png";
import flagUsdjpy from "@/assets/images/flag-usdjpy.png";
import iconGold from "@/assets/images/icon-gold.png";
import iconNasdaq from "@/assets/images/icon-nasdaq.png";
import iconKemudahan from "@/assets/images/icon-kemudahan.png";
import iconKecepatan from "@/assets/images/icon-kecepatan.png";
import iconKeamanan from "@/assets/images/icon-keamanan.png";
import toolSignal from "@/assets/images/tool-signal.webp";
import toolSentiment from "@/assets/images/tool-sentiment.webp";
import toolNews from "@/assets/images/tool-news.webp";
import testiYudha from "@/assets/images/testi-yudha-keling.webp";
import testiAndy from "@/assets/images/testi-andy-senjaya.webp";
import testiTheresa from "@/assets/images/testi-theresa-learns.webp";
import testiOmBen from "@/assets/images/testi-om-ben-trader.webp";
import testiDennis from "@/assets/images/testi-dennis-sll.webp";

export const links = {
  login: "https://client.mifx.com/login",
  openAccountHeader: "https://client.mifx.com/open-demo-account",
  openAccount: "https://mifx.com/open-demo-account",
  appDownload: "https://mifx.onelink.me/XIut/4ixzpe93",
} as const;

export const hero = {
  titleLine1: "Eksekusi Peluang",
  titleLine2: "Trading Forex",
  titleAccent: "Lebih Cepat",
  cta: "Mulai Trading Forex",
  regulatedLabel: "Teregulasi resmi di Indonesia",
};

export type TradingTool = {
  title: string;
  description: string;
  image: StaticImageData;
};

export const tradingTools = {
  title: "Validasi & Eksekusi Lebih Cepat",
  titleAccent: "Dengan Beragam Trading Tools",
  subtitle: "Proses trading jadi lebih efisien dengan trading tools andalan.",
  items: [
    {
      title: "Trading Signal",
      description: "Temukan peluang trading terbaik langsung dari penyedia analisis global terpercaya.",
      image: toolSignal,
    },
    {
      title: "Sentiment Analysis",
      description:
        "Raih peluang profit lebih optimal lewat analisis tren harga dari sentimen pemberitaan global.",
      image: toolSentiment,
    },
    {
      title: "News",
      description: "Dapatkan market insight terkini lewat update Macro & Technical overview.",
      image: toolNews,
    },
  ] satisfies TradingTool[],
};

export const spreadColumns = [
  { key: "product", label: "Produk" },
  {
    key: "spread",
    label: "Target Spread",
    hint: {
      title: "Apa itu Target Spread?",
      body: "Target spread adalah selisih antara harga beli dengan harga jual untuk produk tertentu dalam kondisi pasar normal",
    },
  },
  {
    key: "size",
    label: "Ukuran Transaksi",
    hint: {
      title: "Apa itu Ukuran Transaksi",
      body: "Ukuran transaksi adalah jumlah lot yang digunakan pada setiap transaksi trading.",
    },
  },
  {
    key: "swap",
    label: "Free Swap",
    hint: {
      title: "Apa itu Free Swap?",
      body: "Free swap adalah fitur bebas biaya inap. Dapat diaktifkan sesuai ketentuan yang berlaku",
    },
  },
] as const;

export type SpreadRow = {
  product: string;
  icon: StaticImageData;
  spread: string;
  size: string;
  swap: string;
};

export const spread = {
  title: "Maksimalkan Potensi Profit",
  titleAccent: "Dengan Spread Kompetitif",
  subtitle: "Maksimalkan potensi profit dengan spread dan biaya komisi yang rendah",
  cta: "Mulai Trading Sekarang",
  rows: [
    {
      product: "EURUSD",
      icon: flagEurusd,
      spread: "Mulai dari 0.3",
      size: "Mulai dari 0.01",
      swap: "Tersedia",
    },
    {
      product: "GBPUSD",
      icon: flagGbpusd,
      spread: "Mulai dari 0.9",
      size: "Mulai dari 0.01",
      swap: "Tersedia",
    },
    {
      product: "USDJPY",
      icon: flagUsdjpy,
      spread: "Mulai dari 0.9",
      size: "Mulai dari 0.01",
      swap: "Tersedia",
    },
    {
      product: "Gold",
      icon: iconGold,
      spread: "Mulai dari $0.29",
      size: "Mulai dari 0.01",
      swap: "Tersedia",
    },
    {
      product: "Nasdaq",
      icon: iconNasdaq,
      spread: "Mulai dari 1.1",
      size: "Mulai dari 0.01",
      swap: "Tersedia",
    },
  ] satisfies SpreadRow[],
};

export type Benefit = {
  title: string;
  /** Desktop/tablet copy */
  description: string;
  /** Shorter copy the Framer mobile breakpoint uses */
  descriptionMobile: string;
  icon: StaticImageData;
};

export const benefits = {
  title: "Satu Platform Trading Yang",
  titleAccent: "Memenuhi Semua Kebutuhan Trader",
  items: {
    keamanan: {
      title: "Keamanan",
      // Framer desktop copy read "BAPPEPTI" — corrected to the regulator's name, BAPPEBTI.
      description:
        "Platform yang resmi teregulasi BAPPEBTI dan bersertifikasi ISO 27001. Transaksi tercatat di bursa, serta dana tersimpan di rekening terpisah.",
      descriptionMobile:
        "Platform bersertifikasi ISO 27001, resmi Bappebti, transaksi tercatat di bursa, dan dana aman di rekening terpisah.",
      icon: iconKeamanan,
    },
    kemudahan: {
      title: "Kemudahan",
      description:
        "Kelola aktivitas trading lebih mudah via ponsel. Dilengkapi dengan Trading Tools serta edukasi lengkap bagi semua level trader.",
      descriptionMobile:
        "Buka akun mudah via ponsel, dilengkapi Trading Tools premium & edukasi lengkap untuk semua level trader.",
      icon: iconKemudahan,
    },
    kecepatan: {
      title: "Kecepatan",
      description:
        "Trading tanpa requote/delay di harga yang sesuai eksekusi market, serta penarikan dana yang cepat dan mudah.",
      descriptionMobile:
        "Trading tanpa requote/delay, harga sesuai eksekusi market, penarikan dana cepat & mudah.",
      icon: iconKecepatan,
    },
  } satisfies Record<string, Benefit>,
  cta: "Mulai Trading Forex",
};

export type Stat = {
  value: string;
  label: string;
  icon?: "app-store" | "google-play";
};

export const stats: Stat[] = [
  { value: "2 Juta+", label: "Total Download" },
  { value: "25+", label: "Tahun Pengalaman" },
  { value: "4.4", label: "Rating App Store", icon: "app-store" },
  { value: "4.3", label: "Rating Play Store", icon: "google-play" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo: StaticImageData;
  rating: number;
};

export const testimonials = {
  title: "Kata Mereka",
  titleAccent: "Tentang MIFX",
  subtitle: "Para trader telah memilih MIFX sebagai platform trading forex mereka.",
  items: [
    {
      name: "Yudha Keling",
      role: "Influencer Keuangan",
      quote:
        "MIFX, M-nya itu memudahkan! Karena di mana lagi bisa trading forex dengan data lengkap, sinyal terkurasi, dan insight untuk bantu arahin strategi trading? Cuma di MIFX!",
      photo: testiYudha,
      rating: 5,
    },
    {
      name: "Andy Senjaya",
      role: "Influencer Keuangan",
      quote:
        "Aplikasi MIFX punya semua yang diperlukan oleh para trader khususnya trader Indonesia. Mulai dari video edukasi sampai Trading Signal. Highly recommended!",
      photo: testiAndy,
      rating: 5,
    },
    {
      name: "Theresa Learns",
      role: "Influencer Keuangan",
      quote:
        "Aku mulai pertama trading di MIFX pake demo akun sambil belajar, sampai sudah familiar baru masuk pakai uang asli. Trading forex di MIFX so far paling oke dan easy to use.",
      photo: testiTheresa,
      rating: 5,
    },
    {
      name: "Om Ben Trader",
      role: "Influencer Keuangan",
      quote: "Aplikasi nya mantap, mudah dipahami buat pemula Fitur nya juga lengkap Top banget dah mifx",
      photo: testiOmBen,
      rating: 5,
    },
    {
      name: "Dennis SLL",
      role: "Professional trader",
      quote:
        "Aplikasi MIFX bener-bener fungsional: deposit & WD gampang, tracking akun simpel, banyak hadiah. Tradingnya juga mulai dari Rp500rb & bisa microlot, pas buat pemula!",
      photo: testiDennis,
      rating: 5,
    },
  ] satisfies Testimonial[],
};

export const finalCta = {
  titleAccent: "Sekarang Saatnya",
  title: "Trading Forex dengan MIFX",
  cta: "Mulai Trading Forex",
};

export const footer = {
  columns: [
    {
      title: "MIFX",
      links: [
        { label: "Tentang", href: "https://mifx.com/about-us" },
        { label: "Produk Kami", href: "https://mifx.com/pilihan-product" },
        { label: "Trading Tools", href: "https://mifx.com/about-us/trading-tools" },
        { label: "Download Platform", href: "https://mifx.com/online-trading" },
        { label: "Program Referral", href: "https://mifx.com/referral-program" },
        { label: "Blog", href: "https://mifx.com/academy/blogs" },
      ],
    },
    {
      title: "Bantuan",
      links: [
        { label: "Support Center", href: "https://mifx.zendesk.com/hc/id" },
        { label: "Hubungi Kami", href: "https://mifx.com/contact-us" },
        { label: "Pengaduan", href: "https://mifx.com/pengaduan" },
        { label: "Waspada Penipuan", href: "https://mifx.com/pemberitahuan" },
        { label: "Bug Bounty", href: "https://mifx.com/bounty" },
      ],
    },
  ],
  legal: {
    title: "Legalitas",
    items: [
      "Badan Pengawas Perdagangan Berjangka Komoditi: Nomor 178/BAPPEBTI/SI/I/2003",
      "Otoritas Jasa Keuangan: Nomor S-126/PM.02/2025",
      "Bank Indonesia: Nomor 27/214/DPPK/Srt/B",
      "Bursa Komoditi dan Derivatif Indonesia: Nomor 010/SPKB/ICDX/DIR/III/2010",
      "Bursa Berjangka Jakarta: Nomor SPAB-044/BBJ/03/02",
      "Indonesia Clearing House: Nomor 003/SPKK/ICH-MIF/VII/2017",
      "Kliring Berjangka Indonesia: Nomor 14/AK-KBI/III/2003",
    ],
  },
  social: {
    title: "Ikuti Kami",
    links: [
      { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/mifx.indonesia/" },
      { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/@MIFX" },
      { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@mifx.indonesia" },
      { label: "LinkedIn", icon: "linkedin", href: "https://id.linkedin.com/company/pt-mifx" },
    ],
  },
  appTitle: "Dapatkan Aplikasi MIFX",
  disclaimer:
    "PT Monex Investindo Futures beroperasi berdasarkan izin dan berada di bawah pengawasan BAPPEBTI, BI, serta OJK untuk produk derivatif keuangan dengan aset yang mendasari berupa Efek, serta merupakan anggota bursa BBJ dan BKDI dan anggota kliring berjangka KBI & Indonesia Clearing House.",
} as const;
