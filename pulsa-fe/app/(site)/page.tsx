import Script from "next/script";
import type { Metadata } from "next";
import { getCategories } from "@/lib/api.products";
import { getUserProfile } from "@/lib/api.auth";
import { getUserOrders } from "@/lib/api.transactions";
import { getAppServerSession } from "@/lib/server-auth";
import type { UserAppOrder, UserCategoryItem } from "@/components/user/types";
import { GuestBottomNav } from "@/components/guest/GuestBottomNav";
import { CANONICAL_SITE_URL } from "@/lib/seo-articles";
import { SakuSiapHomeExperience, type HomeActivity } from "@/components/site/SakuSiapHomeExperience";

type SessionShape = {
  backendToken?: string;
  user?: {
    name?: string | null;
    email?: string | null;
  };
};

function formatActivityDate(value?: string | null) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

function activityIconFor(order: UserAppOrder) {
  const text = `${order.produk_nama_snapshot || ""} ${order.produk_sku_snapshot || ""}`.toLowerCase();
  if (text.includes("token") || text.includes("pln") || text.includes("listrik")) {
    return "/06_aktivitas/aktivitas_icon_token.webp";
  }
  if (text.includes("pulsa") || text.includes("data") || text.includes("telkomsel") || text.includes("indosat") || text.includes("xl")) {
    return "/06_aktivitas/aktivitas_icon_pulsa.webp";
  }
  return "/06_aktivitas/aktivitas_icon_tagihan.webp";
}

function mapHomeActivities(orders: UserAppOrder[]): HomeActivity[] {
  return orders.slice(0, 3).map((order) => ({
    id: order.invoice_id || String(order.id),
    name: order.produk_nama_snapshot || order.produk_sku_snapshot || "Transaksi",
    date: formatActivityDate(order.dibuat_pada),
    amount: Number(order.harga_final || 0),
    icon: activityIconFor(order),
  }));
}

const homeTitle = "SakuSiap | Pulsa, Paket Data, E-Wallet, Token Listrik, Game & PPOB";
const homeDescription =
  "SakuSiap melayani isi pulsa, paket data, top up e-wallet, token listrik, top up game, dan pembayaran PPOB dengan alur cepat untuk pelanggan, member, dan agen.";

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

export default async function GuestHomePage() {
  const session = (await getAppServerSession()) as SessionShape | null;
  const backendToken = session?.backendToken;
  const isLoggedIn = Boolean(backendToken);
  const profile = backendToken ? await getUserProfile(backendToken) : null;
  const latestOrders = backendToken ? ((await getUserOrders(backendToken, undefined, 3, 0)) as UserAppOrder[]) : [];
  const homeActivities = mapHomeActivities(Array.isArray(latestOrders) ? latestOrders : []);
  const displayName = String(profile?.nama || session?.user?.name || "").trim();
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
    <>
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

      <SakuSiapHomeExperience
        links={{
          topup: isLoggedIn ? "/user/account/topup" : "/login",
          transfer: isLoggedIn ? "/user/saldo/kirim" : "/login",
          history: isLoggedIn ? "/user/transaksi" : "/transaksi",
          bill: "/listrik/tagihan",
          allServices: "/kategori",
          pulsaData: "/pulsa-data",
          electricityToken: "/listrik/token",
          ewallet: "/ewallet",
          internet: "/internet-pascabayar",
          account: isLoggedIn ? "/user/account" : "/login",
        }}
        bottomNav={<GuestBottomNav isLoggedIn={isLoggedIn} />}
        activities={homeActivities}
        isLoggedIn={isLoggedIn}
        saldo={profile?.saldo ?? null}
        userName={displayName}
      />
    </>
  );
}
