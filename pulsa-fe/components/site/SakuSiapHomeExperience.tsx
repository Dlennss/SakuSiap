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

const services = [
  ["Pulsa", "pulsaData", "/05_layanan_icons/pulsa_data_icon.webp"],
  ["Token", "electricityToken", "/05_layanan_icons/token_listrik_icon.webp"],
  ["E-Wallet", "ewallet", "/05_layanan_icons/e_wallet_icon.webp"],
  ["Tagihan", "bill", "/05_layanan_icons/tagihan_icon.webp"],
  ["Internet", "internet", "/05_layanan_icons/paket_internet_icon.webp"],
  ["Semua", "allServices", "/05_layanan_icons/lainnya_icon.webp"],
] as const;

const activities = [
  ["Token PLN", "12 Apr", "Rp 50.000", "/06_aktivitas/aktivitas_icon_token.webp"],
  ["Pulsa Telkomsel", "10 Apr", "Rp 50.000", "/06_aktivitas/aktivitas_icon_pulsa.webp"],
  ["PDAM", "8 Apr", "Rp 75.000", "/06_aktivitas/aktivitas_icon_tagihan.webp"],
] as const;

function serviceHref(links: HomeLinks, key: (typeof services)[number][1]) {
  return links[key];
}

function QuickAction({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="flex min-w-0 items-center justify-center gap-2 rounded-[18px] bg-white px-3 py-3 text-sm font-black text-[#073d33] shadow-[0_12px_28px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/60"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e2f7eb] text-[#05734d]">
        {icon}
      </span>
      <span className="truncate">{label}</span>
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

      <div className="mx-auto min-h-svh w-full max-w-[945px] bg-[#edf8f3] px-4 pb-[96px] pt-4 md:px-8 md:pb-32">
        <header className="flex items-center justify-between gap-2">
          <Link href="/" prefetch={false} className="flex min-w-0 items-center gap-2.5">
            <Image
              src={`${ASSET_BASE}/01_header/logo_symbol.webp`}
              alt=""
              width={56}
              height={56}
              priority
              className="h-10 w-10 shrink-0 rounded-[13px] shadow-[0_10px_20px_rgba(5,91,67,0.16)] md:h-14 md:w-14"
            />
            <span className="min-w-0">
              <span className="block truncate text-xl font-black leading-none text-[#063d34] md:text-4xl">
                SakuSiap
              </span>
              <span className="mt-1 block truncate text-xs font-bold text-[#0a7a55] md:text-base">
                Siap sehari-hari
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
            <button
              type="button"
              aria-label="Notifikasi"
              className="relative grid h-9 w-9 place-items-center rounded-full bg-white text-[#073d33] shadow-sm ring-1 ring-emerald-900/10 md:h-12 md:w-12"
            >
              <Bell className="h-[18px] w-[18px] md:h-5 md:w-5" />
              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#ff7048] ring-2 ring-white md:right-2 md:top-2" />
            </button>
            <Link
              href={links.account}
              prefetch={false}
              aria-label="Akun"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#caf2d8] text-[#078153] shadow-sm ring-1 ring-emerald-900/10 md:h-12 md:w-12"
            >
              <ShieldCheck className="h-[18px] w-[18px] fill-[#078153]/10 md:h-5 md:w-5" />
            </Link>
          </div>
        </header>

        <section className="relative mt-5 min-h-[136px] overflow-hidden rounded-[22px] bg-[#f7fffb] p-4 shadow-[0_14px_38px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8 md:min-h-[230px] md:rounded-[24px] md:p-7">
          <div className="relative z-10 max-w-[61%] min-w-0 md:max-w-xl">
            <p className="text-xs font-black text-[#05734d] md:text-lg">
              Halo, {userName || "Selamat Datang"}!
            </p>
            <h1 className="mt-2 text-[22px] font-black leading-[1.12] text-[#073d33] md:text-5xl">
              Semua siap.
            </h1>
            <p className="mt-2 max-w-md text-xs font-semibold leading-5 text-[#56746d] md:mt-3 md:text-lg md:leading-7">
              Pulsa, tagihan, saldo.
            </p>
          </div>

          <Image
            src={`${ASSET_BASE}/01_header/ilustrasi_ruang_tamu.webp`}
            alt=""
            width={360}
            height={220}
            priority
            sizes="(min-width: 768px) 360px, 150px"
            className="absolute bottom-0 right-0 h-auto w-[46%] max-w-[150px] object-contain md:max-w-[360px]"
          />
        </section>

        <section className="mt-5 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#056241_0%,#11915f_56%,#70c784_100%)] p-4 text-white shadow-[0_22px_54px_rgba(5,98,65,0.23)] md:rounded-[26px] md:p-7">
          <div className="flex min-w-0 items-start gap-3 md:items-center md:justify-between md:gap-4">
            <div className="flex min-w-0 flex-1 gap-3 md:gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[15px] bg-emerald-950/25 md:h-14 md:w-14 md:rounded-[18px]">
                <Image
                  src={`${ASSET_BASE}/02_saldo_transparan/saldo_icon_wallet_transparan.webp`}
                  alt=""
                  width={44}
                  height={44}
                  className="h-8 w-8 object-contain md:h-10 md:w-10"
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs font-black text-white/90 md:text-sm">
                  Saldo Utama <Eye className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </div>
                <div className="mt-2 whitespace-nowrap text-[clamp(1.8rem,8.5vw,2.75rem)] font-black leading-none tracking-normal md:text-6xl">
                  Rp 250.000
                </div>
              </div>
            </div>
            <Link
              href={links.topup}
              prefetch={false}
              className="hidden shrink-0 items-center gap-2 rounded-[18px] bg-white px-5 py-3 text-sm font-black text-[#076342] shadow-[0_12px_26px_rgba(0,0,0,0.13)] md:flex"
            >
              <Plus className="h-4 w-4" /> Isi Saldo
            </Link>
          </div>
          <Link
            href={links.topup}
            prefetch={false}
            className="mt-4 flex items-center justify-center gap-2 rounded-[18px] bg-white px-5 py-3 text-sm font-black text-[#076342] shadow-[0_12px_26px_rgba(0,0,0,0.10)] md:hidden"
          >
            <Plus className="h-4 w-4" /> Isi Saldo
          </Link>
        </section>

        <section className="mt-3 grid grid-cols-3 gap-3">
          <QuickAction href={links.topup} icon={<Plus className="h-4 w-4" />} label="Isi" />
          <QuickAction href={links.transfer} icon={<Send className="h-4 w-4" />} label="Transfer" />
          <QuickAction href={links.history} icon={<ReceiptText className="h-4 w-4" />} label="Riwayat" />
        </section>

        <Link
          href={links.bill}
          prefetch={false}
          className="mt-5 grid min-h-[168px] overflow-hidden rounded-[24px] border border-amber-200/80 bg-[#fff6df] shadow-[0_14px_42px_rgba(86,60,18,0.09)] sm:grid-cols-[1fr_1.05fr]"
        >
          <div className="relative z-10 p-5 sm:p-7">
            <h2 className="max-w-sm text-2xl font-black leading-tight text-[#073d33] sm:text-4xl">
              Tagihan rumah. Cepat.
            </h2>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#075b3e] px-5 py-3 text-sm font-black text-white">
              Bayar <ArrowRight className="h-4 w-4" />
            </span>
          </div>
          <div className="relative min-h-[128px] sm:min-h-[220px]">
            <Image
              src={`${ASSET_BASE}/03_banner_utama/banner_rumah_dan_tanaman.webp`}
              alt=""
              fill
              sizes="(min-width: 640px) 430px, 100vw"
              className="object-contain object-bottom"
            />
          </div>
        </Link>

        <section className="mt-5 rounded-[24px] bg-white p-4 shadow-[0_14px_42px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-black text-[#073d33] sm:text-2xl">Layanan</h2>
            <Link href={links.allServices} prefetch={false} className="flex items-center gap-1 text-xs font-black text-[#3d6d61] sm:text-sm">
              Semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {services.map(([label, key, icon]) => (
              <Link
                key={label}
                href={serviceHref(links, key)}
                prefetch={false}
                className="flex flex-col items-center gap-2 rounded-[18px] bg-[#f4fbf7] p-3 text-center ring-1 ring-emerald-900/5"
              >
                <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-white shadow-sm">
                  <Image src={`${ASSET_BASE}${icon}`} alt="" width={38} height={38} className="h-9 w-9 object-contain" />
                </span>
                <span className="text-xs font-black leading-tight text-[#143a34]">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[24px] bg-white p-4 shadow-[0_14px_42px_rgba(6,78,59,0.08)] ring-1 ring-emerald-900/8 sm:p-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-black text-[#073d33] sm:text-2xl">Aktivitas</h2>
            <Link href={links.history} prefetch={false} className="flex items-center gap-1 text-xs font-black text-[#3d6d61] sm:text-sm">
              Semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-emerald-900/8">
            {activities.map(([label, date, amount, icon]) => (
              <div key={label} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3">
                <span className="grid h-11 w-11 place-items-center rounded-[15px] bg-[#fff6d9]">
                  <Image src={`${ASSET_BASE}${icon}`} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-[#102b28] sm:text-base">{label}</p>
                  <p className="text-xs font-bold text-[#6f8491]">{date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-[#102b28] sm:text-base">{amount}</p>
                  <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-black text-emerald-700">
                    <CheckCircle2 className="h-3 w-3 fill-emerald-600 text-white" /> OK
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link
          href={links.bill}
          prefetch={false}
          className="relative mt-5 flex min-h-[120px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#075b3e_0%,#0c7a53_58%,#054b36_100%)] p-5 text-white shadow-[0_22px_54px_rgba(5,98,65,0.18)]"
        >
          <div className="relative z-10">
            <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-black">Promo</span>
            <h2 className="mt-4 text-2xl font-black leading-tight">Cashback Rp 25.000</h2>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#073d33]">
              Cek <ArrowRight className="h-4 w-4" />
            </span>
          </div>
          <Image
            src={`${ASSET_BASE}/07_promo/promo_ilustrasi_hp.webp`}
            alt=""
            width={170}
            height={170}
            className="absolute -bottom-8 right-0 h-40 w-40 object-contain sm:h-52 sm:w-52"
          />
        </Link>
      </div>

      {bottomNav}
    </main>
  );
}
