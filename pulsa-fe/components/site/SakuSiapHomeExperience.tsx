import Image from "next/image";
import Link from "next/link";
import type React from "react";

const ASSET_BASE = "/sakusiap-assets/00_sections";

type HomeLinks = {
  topup: string;
  transfer: string;
  history: string;
  bill: string;
  allServices: string;
  pulsaData: string;
  electricityToken: string;
  ewallet: string;
  internet: string;
  account: string;
};

type SakuSiapHomeExperienceProps = {
  links: HomeLinks;
  bottomNav: React.ReactNode;
  userName?: string | null;
};

type SectionAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const sections = {
  header: {
    src: "/header_full.png",
    alt: "SakuSiap siap untuk sehari-hari",
    width: 941,
    height: 258,
  },
  balance: {
    src: "/saldo_dan_aksi_full.png",
    alt: "Saldo utama dan aksi cepat SakuSiap",
    width: 856,
    height: 307,
  },
  heroBanner: {
    src: "/banner_utama_full.png",
    alt: "Bayar listrik dan tagihan jadi lebih mudah",
    width: 855,
    height: 257,
  },
  services: {
    src: "/layanan_favorit_full.png",
    alt: "Layanan favorit SakuSiap",
    width: 856,
    height: 213,
  },
  activity: {
    src: "/aktivitas_terakhir_full.png",
    alt: "Aktivitas terakhir SakuSiap",
    width: 856,
    height: 289,
  },
  promo: {
    src: "/promo_bawah_full.png",
    alt: "Promo mingguan SakuSiap",
    width: 855,
    height: 136,
  },
} satisfies Record<string, SectionAsset>;

function SectionImage({
  section,
  priority = false,
  className = "",
}: {
  section: SectionAsset;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`${ASSET_BASE}${section.src}`}
      alt={section.alt}
      width={section.width}
      height={section.height}
      sizes="(min-width: 768px) 945px, 100vw"
      priority={priority}
      className={`block h-auto w-full select-none ${className}`}
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

export function SakuSiapHomeExperience({ links, bottomNav }: SakuSiapHomeExperienceProps) {
  return (
    <main className="sakusiap-home-screen min-h-svh bg-[#edf8f3] text-[#073d33]">
      <style
        dangerouslySetInnerHTML={{
          __html: ".brand-app-header{display:none!important}",
        }}
      />

      <div className="mx-auto min-h-svh w-full max-w-[945px] overflow-hidden bg-[#edf8f3] pb-[92px] shadow-[0_0_70px_rgba(6,78,59,0.08)]">
        <SectionImage section={sections.header} priority />

        <section className="relative px-[4.15%]">
          <SectionImage section={sections.balance} priority />
          <OverlayLink href={links.topup} label="Isi saldo" className="right-[7.5%] top-[21%] h-[22%] w-[24.5%]" />
          <OverlayLink href={links.topup} label="Top up saldo" className="left-[6.5%] bottom-[5%] h-[28%] w-[27%]" />
          <OverlayLink href={links.transfer} label="Transfer saldo" className="left-[36.5%] bottom-[5%] h-[28%] w-[27%]" />
          <OverlayLink href={links.history} label="Riwayat transaksi" className="right-[6.5%] bottom-[5%] h-[28%] w-[27%]" />
        </section>

        <Link
          href={links.bill}
          prefetch={false}
          className="block px-[4.15%] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70"
        >
          <SectionImage section={sections.heroBanner} />
        </Link>

        <section className="relative px-[4.15%]">
          <SectionImage section={sections.services} />
          <OverlayLink href={links.allServices} label="Lihat semua layanan" className="right-[6%] top-[10%] h-[19%] w-[24%]" />
          <OverlayLink href={links.pulsaData} label="Pulsa dan data" className="left-[6.5%] bottom-[8%] h-[55%] w-[12.5%]" />
          <OverlayLink href={links.electricityToken} label="Token listrik" className="left-[22%] bottom-[8%] h-[55%] w-[12.5%]" />
          <OverlayLink href={links.ewallet} label="E-Wallet" className="left-[37.8%] bottom-[8%] h-[55%] w-[12.5%]" />
          <OverlayLink href={links.bill} label="Tagihan" className="left-[53.7%] bottom-[8%] h-[55%] w-[12.5%]" />
          <OverlayLink href={links.internet} label="Paket internet" className="left-[69.4%] bottom-[8%] h-[55%] w-[12.5%]" />
          <OverlayLink href={links.allServices} label="Lainnya" className="right-[5.4%] bottom-[8%] h-[55%] w-[12.5%]" />
        </section>

        <Link
          href={links.history}
          prefetch={false}
          className="block px-[4.15%] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70"
        >
          <SectionImage section={sections.activity} />
        </Link>

        <Link
          href={links.bill}
          prefetch={false}
          className="block px-[4.15%] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70"
        >
          <SectionImage section={sections.promo} />
        </Link>
      </div>

      {bottomNav}
    </main>
  );
}
