import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { getCategories } from "@/lib/api.products";
import type { UserCategoryItem } from "@/components/user/types";
import { GuestBottomNav } from "@/components/guest/GuestBottomNav";
import { CANONICAL_SITE_URL } from "@/lib/seo-articles";

const homeTitle = "SakuSiap | Pulsa, Paket Data, E-Wallet, Token Listrik, Game & PPOB";
const homeDescription =
  "SakuSiap melayani isi pulsa, paket data, top up e-wallet, token listrik, top up game, dan pembayaran PPOB dengan alur cepat untuk pelanggan, member, dan agen.";
const ASSET_BASE = "/sakusiap-assets";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "SakuSiap",
    "isi pulsa online",
    "paket data murah",
    "top up e-wallet",
    "token listrik online",
    "top up game",
    "PPOB online",
  ],
  alternates: {
    canonical: CANONICAL_SITE_URL,
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: CANONICAL_SITE_URL,
    siteName: "SakuSiap",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SakuSiap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/twitter-image"],
  },
};

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={`${ASSET_BASE}${src}`}
      alt={alt}
      className="block h-auto w-full select-none"
      draggable={false}
    />
  );
}

function OverlayLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      aria-label={label}
      className={`absolute rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70 ${className}`}
    >
      <span className="sr-only">{label}</span>
    </Link>
  );
}

export default async function GuestHomePage() {
  const categories = (await getCategories()) as UserCategoryItem[];
  const activeCategories = categories.filter((item) => item.aktif);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SakuSiap",
    url: CANONICAL_SITE_URL,
    description: homeDescription,
    inLanguage: "id-ID",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SakuSiap",
    url: CANONICAL_SITE_URL,
    logo: `${CANONICAL_SITE_URL}/images/logo-pulsakilat.svg`,
    image: `${CANONICAL_SITE_URL}/opengraph-image`,
    description: homeDescription,
  };

  const catalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SakuSiap",
    url: CANONICAL_SITE_URL,
    description: homeDescription,
    about: activeCategories.map((item) => item.nama),
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Kategori Produk SakuSiap",
      itemListElement: activeCategories.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: item.nama,
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Produk apa saja yang tersedia di SakuSiap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SakuSiap menyediakan isi pulsa, paket data, top up e-wallet, token listrik, top up game, BPJS, PDAM, internet pascabayar, TV, dan layanan PPOB lain untuk pelanggan, member, dan agen.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah SakuSiap cocok untuk calon member dan agen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. SakuSiap bisa dipakai untuk kebutuhan transaksi harian sekaligus untuk member, agen, reseller, dan kebutuhan H2H dengan katalog produk digital yang lengkap.",
        },
      },
      {
        "@type": "Question",
        name: "Apa keunggulan SakuSiap untuk transaksi produk digital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SakuSiap menata kategori produk secara jelas, menyediakan banyak layanan dalam satu tempat, dan memudahkan pembeli maupun penjual untuk melayani kebutuhan digital harian dengan lebih cepat.",
        },
      },
    ],
  };

  return (
    <main className="sakusiap-home-screen min-h-svh bg-[#edf8f3] text-[#073d33]">
      <style
        dangerouslySetInnerHTML={{
          __html: ".brand-app-header{display:none!important}",
        }}
      />
      <Script id="homepage-website-jsonld" type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="homepage-organization-jsonld" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="homepage-catalog-jsonld" type="application/ld+json">
        {JSON.stringify(catalogJsonLd)}
      </Script>
      <Script id="homepage-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <div className="mx-auto w-full max-w-[945px] overflow-hidden bg-[#edf8f3]">
        <div className="bg-[#f7fffb]">
          <SectionImage src="/00_sections/header_full.png" alt="SakuSiap siap untuk sehari-hari" />
        </div>

        <section className="relative">
          <SectionImage src="/00_sections/saldo_dan_aksi_full.png" alt="Saldo utama dan menu aksi cepat" />
          <OverlayLink href="/login" label="Isi saldo" className="right-[8%] top-[22%] h-[22%] w-[24%]" />
          <OverlayLink href="/login" label="Top up saldo" className="left-[3%] bottom-[4%] h-[29%] w-[29%]" />
          <OverlayLink href="/login" label="Transfer saldo" className="left-[34%] bottom-[4%] h-[29%] w-[29%]" />
          <OverlayLink href="/transaksi" label="Riwayat transaksi" className="right-[3%] bottom-[4%] h-[29%] w-[29%]" />
        </section>

        <Link href="/listrik/tagihan" prefetch={false} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70">
          <SectionImage src="/00_sections/banner_utama_full.png" alt="Bayar listrik dan tagihan jadi lebih mudah" />
        </Link>

        <section className="relative">
          <SectionImage src="/00_sections/layanan_favorit_full.png" alt="Layanan favorit SakuSiap" />
          <OverlayLink href="/kategori" label="Lihat semua layanan" className="right-[5%] top-[10%] h-[20%] w-[22%]" />
          <OverlayLink href="/pulsa-data" label="Pulsa dan data" className="left-[5%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/listrik/token" label="Token listrik" className="left-[21%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/ewallet" label="E-Wallet" className="left-[37%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/listrik/tagihan" label="Tagihan" className="left-[53%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/internet-pascabayar" label="Paket internet" className="left-[69%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/kategori" label="Lainnya" className="right-[3%] bottom-[7%] h-[56%] w-[12%]" />
        </section>

        <Link href="/transaksi" prefetch={false} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70">
          <SectionImage src="/00_sections/aktivitas_terakhir_full.png" alt="Aktivitas terakhir" />
        </Link>

        <Link href="/listrik/tagihan" prefetch={false} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70">
          <SectionImage src="/00_sections/promo_bawah_full.png" alt="Promo mingguan cashback hingga Rp 25.000" />
        </Link>
      </div>

      <GuestBottomNav isLoggedIn={false} />
    </main>
  );
}
