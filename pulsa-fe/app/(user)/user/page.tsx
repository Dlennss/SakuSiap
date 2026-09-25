import Link from "next/link";
import { getAppServerSession } from "@/lib/server-auth";
import type { UserSession } from "@/components/user/types";
import { UserBottomNav } from "@/components/user/UserBottomNav";
import { UserAuthClientSync } from "@/components/user/UserAuthClientSync";

type SessionShape = {
  user?: UserSession;
  backendToken?: string;
};

const ASSET_BASE = "/sakusiap-assets";

function SectionImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={`${ASSET_BASE}${src}`}
      alt={alt}
      className={`block h-auto w-full select-none ${className}`}
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

export default async function UserAppHomePage() {
  const session = (await getAppServerSession()) as SessionShape | null;

  return (
    <main className="sakusiap-home-screen min-h-svh bg-[#edf8f3] text-[#073d33]">
      <style
        dangerouslySetInnerHTML={{
          __html: ".brand-app-header{display:none!important}",
        }}
      />

      {session?.backendToken ? <UserAuthClientSync backendToken={session.backendToken} /> : null}

      <div className="mx-auto w-full max-w-[945px] overflow-hidden bg-[#edf8f3]">
        <div className="bg-[#f7fffb]">
          <SectionImage src="/00_sections/header_full.png" alt="SakuSiap siap untuk sehari-hari" />
        </div>

        <section className="relative">
          <SectionImage src="/00_sections/saldo_dan_aksi_full.png" alt="Saldo utama dan menu aksi cepat" />
          <OverlayLink href="/user/account/topup" label="Isi saldo" className="right-[8%] top-[22%] h-[22%] w-[24%]" />
          <OverlayLink href="/user/account/topup" label="Top up saldo" className="left-[3%] bottom-[4%] h-[29%] w-[29%]" />
          <OverlayLink href="/user/saldo/kirim" label="Transfer saldo" className="left-[34%] bottom-[4%] h-[29%] w-[29%]" />
          <OverlayLink href="/user/transaksi" label="Riwayat transaksi" className="right-[3%] bottom-[4%] h-[29%] w-[29%]" />
        </section>

        <Link href="/user/listrik/tagihan" prefetch={false} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70">
          <SectionImage src="/00_sections/banner_utama_full.png" alt="Bayar listrik dan tagihan jadi lebih mudah" />
        </Link>

        <section className="relative">
          <SectionImage src="/00_sections/layanan_favorit_full.png" alt="Layanan favorit SakuSiap" />
          <OverlayLink href="/user/kategori" label="Lihat semua layanan" className="right-[5%] top-[10%] h-[20%] w-[22%]" />
          <OverlayLink href="/user/pulsa-data" label="Pulsa dan data" className="left-[5%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/user/listrik/token" label="Token listrik" className="left-[21%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/user/ewallet" label="E-Wallet" className="left-[37%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/user/listrik/tagihan" label="Tagihan" className="left-[53%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/user/kategori" label="Paket internet" className="left-[69%] bottom-[7%] h-[56%] w-[12%]" />
          <OverlayLink href="/user/kategori" label="Lainnya" className="right-[3%] bottom-[7%] h-[56%] w-[12%]" />
        </section>

        <Link href="/user/transaksi" prefetch={false} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70">
          <SectionImage src="/00_sections/aktivitas_terakhir_full.png" alt="Aktivitas terakhir" />
        </Link>

        <Link href="/user/listrik/tagihan" prefetch={false} className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/70">
          <SectionImage src="/00_sections/promo_bawah_full.png" alt="Promo mingguan cashback hingga Rp 25.000" />
        </Link>
      </div>

      <UserBottomNav />
    </main>
  );
}
