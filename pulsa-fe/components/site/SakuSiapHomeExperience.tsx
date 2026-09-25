import Image from "next/image";
import Link from "next/link";
import type React from "react";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Eye,
  Plus,
  ReceiptText,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

const ASSET_BASE = "/sakusiap-assets";

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

const serviceItems = [
  {
    label: "Pulsa & Data",
    hrefKey: "pulsaData",
    icon: "/05_layanan_icons/pulsa_data_icon.webp",
  },
  {
    label: "Token Listrik",
    hrefKey: "electricityToken",
    icon: "/05_layanan_icons/token_listrik_icon.webp",
  },
  {
    label: "E-Wallet",
    hrefKey: "ewallet",
    icon: "/05_layanan_icons/e_wallet_icon.webp",
  },
  {
    label: "Tagihan",
    hrefKey: "bill",
    icon: "/05_layanan_icons/tagihan_icon.webp",
  },
  {
    label: "Paket Internet",
    hrefKey: "internet",
    icon: "/05_layanan_icons/paket_internet_icon.webp",
  },
  {
    label: "Lainnya",
    hrefKey: "allServices",
    icon: "/05_layanan_icons/lainnya_icon.webp",
  },
] as const;

const activityItems = [
  {
    label: "Token Listrik PLN",
    date: "12 Apr 2024, 10:24",
    amount: "Rp 50.000",
    icon: "/06_aktivitas/aktivitas_icon_token.webp",
  },
  {
    label: "Pulsa Telkomsel 50.000",
    date: "10 Apr 2024, 18:41",
    amount: "Rp 50.000",
    icon: "/06_aktivitas/aktivitas_icon_pulsa.webp",
  },
  {
    label: "Tagihan Air PDAM",
    date: "8 Apr 2024, 09:15",
    amount: "Rp 75.000",
    icon: "/06_aktivitas/aktivitas_icon_tagihan.webp",
  },
] as const;

function hrefFor(links: HomeLinks, key: (typeof serviceItems)[number]["hrefKey"]) {
  return links[key];
}

function ActionCard({
  href,
  icon,
  title,
  subtitle,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group flex min-w-0 flex-col items-center gap-2 rounded-[18px] border border-emerald-900/8 bg-white/92 p-3 text-center shadow-[0_12px_34px_rgba(6,78,59,0.08)] transition hover:-translate-y-0.5 hover:border-emerald-600/20 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/60 sm:flex-row sm:text-left"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[15px] bg-emerald-50 text-emerald-700 ring-1 ring-emerald-700/8 sm:h-11 sm:w-11">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-extrabold leading-tight text-[#083d34] sm:truncate sm:text-sm">{title}</span>
        <span className="mt-0.5 block text-[10px] font-medium leading-tight text-[#648079] sm:truncate sm:text-xs">{subtitle}</span>
      </span>
    </Link>
  );
}

export function SakuSiapHomeExperience({
  links,
  bottomNav,
  userName,
}: SakuSiapHomeExperienceProps) {
  return (
    <main className="sakusiap-home-screen min-h-svh bg-[#edf8f3] text-[#073d33]">
      <style
        dangerouslySetInnerHTML={{
          __html: ".brand-app-header{display:none!important}",
        }}
      />

      <div className="mx-auto min-h-svh w-full max-w-6xl px-4 pb-28 pt-4 sm:px-6 sm:pb-32 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" prefetch={false} className="flex min-w-0 items-center gap-3">
            <Image
              src={`${ASSET_BASE}/01_header/logo_symbol.webp`}
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 rounded-[14px] shadow-[0_12px_22px_rgba(5,91,67,0.16)]"
              priority
            />
            <span className="min-w-0">
              <span className="block truncate text-2xl font-black leading-none tracking-normal text-[#083d34] sm:text-3xl">
                SakuSiap
              </span>
              <span className="mt-1 block truncate text-xs font-semibold text-emerald-700 sm:text-sm">
                Siap untuk sehari-hari
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label="Notifikasi"
              className="relative grid h-11 w-11 place-items-center rounded-full bg-white/80 text-[#083d34] shadow-[0_10px_24px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8"
            >
              <Bell className="h-5 w-5" strokeWidth={2} />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#ff774d] ring-2 ring-white" />
            </button>
            <Link
              href={links.account}
              prefetch={false}
              aria-label="Akun"
              className="grid h-11 w-11 place-items-center rounded-full bg-[#d5f3df] text-emerald-700 shadow-[0_10px_24px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white">
                <ShieldCheck className="h-4.5 w-4.5" strokeWidth={2.4} />
              </span>
            </Link>
          </div>
        </header>

        <section className="relative mt-7 min-h-[156px] overflow-hidden rounded-[28px] bg-[#f7fffb]/72 p-5 shadow-[0_18px_48px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8 sm:grid sm:min-h-[230px] sm:grid-cols-[1fr_260px] sm:items-center sm:gap-6 sm:p-6 lg:min-h-[280px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10 max-w-[66%] min-w-0 sm:max-w-xl">
            <p className="text-xs font-black text-emerald-700 sm:text-sm">Halo, {userName || "Selamat Datang"}!</p>
            <h1 className="mt-2 text-[25px] font-black leading-tight text-[#073d33] sm:text-5xl sm:leading-[0.98] lg:text-6xl">
              Semua kebutuhan rumah tangga, lebih mudah.
            </h1>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#57756d] sm:mt-4 sm:text-lg sm:leading-7">
              SakuSiap bantu transaksi harianmu lebih cepat dan rapi.
            </p>
          </div>

          <div className="absolute bottom-0 right-0 h-[150px] w-[45%] max-w-[170px] sm:relative sm:h-[230px] sm:w-full sm:max-w-none lg:h-[280px]">
            <Image
              src={`${ASSET_BASE}/01_header/ilustrasi_ruang_tamu.webp`}
              alt="Ilustrasi ruang keluarga SakuSiap"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-contain object-bottom"
              priority
            />
            <div className="absolute right-3 top-2 max-w-[88px] rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-black leading-tight text-emerald-800 shadow-sm sm:left-5 sm:right-auto sm:top-5 sm:max-w-none sm:text-xs">
              Hidup lebih ringan
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#056241_0%,#159a63_54%,#73c58a_100%)] p-5 text-white shadow-[0_24px_60px_rgba(5,98,65,0.22)] sm:p-6">
            <div className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-lime-200/35" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[20px] bg-emerald-950/25 shadow-inner">
                  <Image
                    src={`${ASSET_BASE}/02_saldo_transparan/saldo_icon_wallet_transparan.webp`}
                    alt=""
                    width={44}
                    height={44}
                    className="h-10 w-10 object-contain"
                  />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-white/92">
                    Saldo Utama <Eye className="h-4 w-4" />
                  </div>
                  <div className="mt-2 text-[clamp(2.15rem,8vw,4rem)] font-black leading-none tracking-normal">
                    Rp 250.000
                  </div>
                  <p className="mt-2 text-sm font-medium text-white/84 sm:text-base">
                    Siap untuk transaksi harianmu
                  </p>
                </div>
              </div>
              <Link
                href={links.topup}
                prefetch={false}
                className="hidden shrink-0 items-center gap-2 rounded-[20px] bg-white px-4 py-3 text-sm font-black text-emerald-800 shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 sm:flex"
              >
                <Plus className="h-4 w-4" /> Isi Saldo
              </Link>
            </div>
            <Link
              href={links.topup}
              prefetch={false}
              className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-[18px] bg-white px-4 py-3 text-sm font-black text-emerald-800 shadow-[0_14px_30px_rgba(0,0,0,0.10)] sm:hidden"
            >
              <Plus className="h-4 w-4" /> Isi Saldo
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <ActionCard href={links.topup} icon={<Plus className="h-5 w-5" />} title="Isi Saldo" subtitle="Top up mudah" />
            <ActionCard href={links.transfer} icon={<Send className="h-5 w-5" />} title="Transfer" subtitle="Kirim sesama" />
            <ActionCard href={links.history} icon={<ReceiptText className="h-5 w-5" />} title="Riwayat" subtitle="Semua transaksi" />
          </div>
        </section>

        <section className="mt-5 overflow-hidden rounded-[28px] border border-amber-200/80 bg-[#fff7dc] shadow-[0_18px_50px_rgba(86,60,18,0.10)]">
          <div className="grid gap-2 p-5 sm:grid-cols-[1fr_1.1fr] sm:p-6">
            <div className="relative z-10 flex flex-col justify-center">
              <h2 className="max-w-md text-2xl font-black leading-tight text-[#073d33] sm:text-4xl">
                Bayar Listrik & Tagihan Jadi Lebih Mudah
              </h2>
              <p className="mt-3 max-w-sm text-sm font-semibold leading-6 text-[#56746d] sm:text-base">
                Rumah nyaman, hidup tenang. Semua beres di SakuSiap.
              </p>
              <Link
                href={links.bill}
                prefetch={false}
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#075b3e] px-5 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(5,91,62,0.24)] transition hover:-translate-y-0.5"
              >
                Bayar Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[170px] sm:min-h-[240px]">
              <Image
                src={`${ASSET_BASE}/03_banner_utama/banner_rumah_dan_tanaman.webp`}
                alt=""
                fill
                sizes="(min-width: 640px) 52vw, 100vw"
                className="object-contain object-bottom"
              />
              <span className="absolute left-3 top-2 grid h-16 w-16 place-items-center rounded-full bg-[#ffc52f] text-white shadow-[0_14px_28px_rgba(239,177,15,0.28)] sm:left-8 sm:top-4 sm:h-24 sm:w-24">
                <Zap className="h-8 w-8 fill-white sm:h-12 sm:w-12" />
              </span>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[28px] bg-white/92 p-4 shadow-[0_18px_50px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-black text-[#082f2a] sm:text-2xl">Layanan Favorit</h2>
            <Link href={links.allServices} prefetch={false} className="inline-flex items-center gap-1.5 text-xs font-black text-[#3d6d61] sm:text-sm">
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {serviceItems.map((item) => (
              <Link
                key={item.label}
                href={hrefFor(links, item.hrefKey)}
                prefetch={false}
                className="group flex min-w-0 flex-col items-center gap-2 rounded-[20px] bg-[#f4fbf7] p-3 text-center ring-1 ring-emerald-900/5 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                <span className="grid aspect-square w-full max-w-[70px] place-items-center rounded-[18px] bg-white shadow-sm">
                  <Image src={`${ASSET_BASE}${item.icon}`} alt="" width={44} height={44} className="h-9 w-9 object-contain" />
                </span>
                <span className="min-h-8 text-[11px] font-extrabold leading-tight text-[#143a34] sm:text-xs">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white/92 p-4 shadow-[0_18px_50px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-lg font-black text-[#082f2a] sm:text-2xl">Aktivitas Terakhir</h2>
              <Link href={links.history} prefetch={false} className="inline-flex items-center gap-1.5 text-xs font-black text-[#3d6d61] sm:text-sm">
                Lihat Semua <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y divide-emerald-900/8">
              {activityItems.map((item) => (
                <div key={item.label} className="grid grid-cols-[auto_1fr] items-center gap-3 py-3 sm:grid-cols-[auto_1fr_auto_auto]">
                  <span className="grid h-11 w-11 place-items-center rounded-[16px] bg-[#fff6d9]">
                    <Image src={`${ASSET_BASE}${item.icon}`} alt="" width={30} height={30} className="h-7 w-7 object-contain" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-[#102b28] sm:text-base">{item.label}</p>
                    <p className="mt-0.5 truncate text-xs font-semibold text-[#6f8491]">{item.date}</p>
                  </div>
                  <p className="col-start-2 text-sm font-black text-[#102b28] sm:col-start-auto sm:text-base">{item.amount}</p>
                  <span className="col-start-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 sm:col-start-auto">
                    <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-600 text-white" /> Berhasil
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={links.bill}
            prefetch={false}
            className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#075b3e_0%,#0c7a53_54%,#054b36_100%)] p-5 text-white shadow-[0_24px_60px_rgba(5,98,65,0.20)] transition hover:-translate-y-0.5 sm:p-6"
          >
            <span className="inline-flex rounded-full bg-white/16 px-3 py-1 text-xs font-black ring-1 ring-white/12">
              Promo Mingguan
            </span>
            <h2 className="relative z-10 mt-4 max-w-[330px] text-2xl font-black leading-tight sm:text-3xl">
              Cashback hingga Rp 25.000
            </h2>
            <p className="relative z-10 mt-2 max-w-[300px] text-sm font-medium text-white/84">
              Untuk pembayaran tagihan rumah tangga.
            </p>
            <span className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#073d33]">
              Cek Promo <ArrowRight className="h-4 w-4" />
            </span>
            <Image
              src={`${ASSET_BASE}/07_promo/promo_ilustrasi_hp.webp`}
              alt=""
              width={210}
              height={210}
              className="absolute -bottom-7 right-1 h-44 w-44 object-contain sm:right-4 sm:h-56 sm:w-56"
            />
          </Link>
        </section>
      </div>

      {bottomNav}
    </main>
  );
}
