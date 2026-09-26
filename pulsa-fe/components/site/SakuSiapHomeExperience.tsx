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
    <Link href={href} prefetch={false} className="ss-action">
      <span className="ss-action-icon">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

export function SakuSiapHomeExperience({
  links,
  bottomNav,
  userName,
}: SakuSiapHomeExperienceProps) {
  return (
    <main className="sakusiap-home-screen ss-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .brand-app-header{display:none!important}
            .ss-page{min-height:100svh;background:#edf8f3;color:#073d33}
            .ss-shell{width:min(100%,1180px);margin:0 auto;padding:24px 24px 120px}
            .ss-header{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:18px}
            .ss-logo{display:flex;align-items:center;gap:14px;min-width:0}
            .ss-logo img{width:56px;height:56px;border-radius:16px;box-shadow:0 12px 24px rgba(5,91,67,.16)}
            .ss-name{display:block;font-size:34px;line-height:.95;font-weight:900;color:#063d34;white-space:nowrap}
            .ss-tagline{display:block;margin-top:6px;font-size:15px;font-weight:800;color:#0a7a55;white-space:nowrap}
            .ss-header-actions{display:flex;align-items:center;gap:12px}
            .ss-round{position:relative;display:grid;width:48px;height:48px;place-items:center;border-radius:999px;background:#fff;color:#073d33;box-shadow:0 8px 20px rgba(6,78,59,.08);border:1px solid rgba(7,61,51,.1)}
            .ss-round-green{background:#caf2d8;color:#078153}
            .ss-dot{position:absolute;right:9px;top:8px;width:10px;height:10px;border-radius:999px;background:#ff7048;border:2px solid #fff}
            .ss-top{display:grid;grid-template-columns:minmax(0,1fr) 420px;gap:24px;margin-top:28px;align-items:stretch}
            .ss-card{border-radius:28px;border:1px solid rgba(7,61,51,.08);box-shadow:0 18px 48px rgba(6,78,59,.08)}
            .ss-hero{position:relative;overflow:hidden;min-height:300px;background:#f7fffb;padding:34px}
            .ss-hero-copy{position:relative;z-index:1;max-width:430px}
            .ss-eyebrow{font-size:17px;font-weight:900;color:#05734d}
            .ss-title{margin-top:12px;font-size:52px;line-height:1;font-weight:900;color:#073d33}
            .ss-subtitle{margin-top:18px;font-size:20px;line-height:1.55;font-weight:700;color:#56746d}
            .ss-hero-img{position:absolute;right:0;bottom:0;width:42%;max-width:360px;height:auto}
            .ss-right{display:grid;gap:14px;align-content:start}
            .ss-balance{overflow:hidden;border-radius:28px;background:linear-gradient(135deg,#056241 0%,#11915f 56%,#70c784 100%);padding:26px;color:#fff;box-shadow:0 22px 54px rgba(5,98,65,.22)}
            .ss-balance-main{display:flex;gap:16px;align-items:flex-start;min-width:0}
            .ss-wallet{display:grid;width:56px;height:56px;flex:0 0 auto;place-items:center;border-radius:18px;background:rgba(2,44,34,.25)}
            .ss-wallet img{width:40px;height:40px;object-fit:contain}
            .ss-balance-meta{min-width:0;flex:1}
            .ss-balance-label{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:900;color:rgba(255,255,255,.92)}
            .ss-amount{margin-top:12px;white-space:nowrap;font-size:48px;line-height:1;font-weight:900;letter-spacing:0}
            .ss-topup{display:flex;margin-top:22px;align-items:center;justify-content:center;gap:8px;border-radius:18px;background:#fff;padding:13px 18px;font-size:14px;font-weight:900;color:#076342;box-shadow:0 12px 26px rgba(0,0,0,.13)}
            .ss-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
            .ss-action{display:flex;min-width:0;align-items:center;justify-content:center;gap:8px;border-radius:18px;background:#fff;padding:13px 12px;font-size:14px;font-weight:900;color:#073d33;box-shadow:0 12px 28px rgba(6,78,59,.08);border:1px solid rgba(7,61,51,.08)}
            .ss-action-icon{display:grid;width:32px;height:32px;flex:0 0 auto;place-items:center;border-radius:999px;background:#e2f7eb;color:#05734d}
            .ss-section{margin-top:24px;border-radius:28px;background:#fff;padding:24px;box-shadow:0 14px 42px rgba(6,78,59,.08);border:1px solid rgba(7,61,51,.08)}
            .ss-section-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}
            .ss-section-title{font-size:24px;font-weight:900;color:#073d33}
            .ss-all{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:900;color:#3d6d61}
            .ss-services{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px}
            .ss-service{display:flex;flex-direction:column;align-items:center;gap:12px;border-radius:20px;background:#f4fbf7;padding:16px;text-align:center;border:1px solid rgba(7,61,51,.05)}
            .ss-service-icon{display:grid;width:64px;height:64px;place-items:center;border-radius:18px;background:#fff;box-shadow:0 8px 18px rgba(6,78,59,.05)}
            .ss-service-icon img{width:40px;height:40px;object-fit:contain}
            .ss-service-label{font-size:14px;font-weight:900;color:#143a34}
            .ss-lower{display:grid;grid-template-columns:minmax(0,1fr) 420px;gap:24px;margin-top:24px}
            .ss-activity-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:16px;align-items:center;padding:16px 0;border-top:1px solid rgba(7,61,51,.08)}
            .ss-activity-row:first-child{border-top:0}
            .ss-activity-icon{display:grid;width:48px;height:48px;place-items:center;border-radius:16px;background:#fff6d9}
            .ss-activity-icon img{width:28px;height:28px;object-fit:contain}
            .ss-activity-name{font-size:16px;font-weight:900;color:#102b28;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
            .ss-activity-date{margin-top:3px;font-size:12px;font-weight:800;color:#6f8491}
            .ss-activity-amount{font-size:16px;font-weight:900;color:#102b28;white-space:nowrap}
            .ss-status{display:inline-flex;align-items:center;gap:4px;border-radius:999px;background:#ecfdf3;padding:4px 10px;font-size:12px;font-weight:900;color:#078153}
            .ss-side{display:grid;gap:24px}
            .ss-bill,.ss-promo{position:relative;min-height:190px;overflow:hidden;border-radius:28px;padding:24px;box-shadow:0 14px 42px rgba(6,78,59,.08)}
            .ss-bill{border:1px solid rgba(251,191,36,.55);background:#fff6df}
            .ss-promo{background:linear-gradient(135deg,#075b3e 0%,#0c7a53 58%,#054b36 100%);color:#fff}
            .ss-side-copy{position:relative;z-index:1;max-width:235px}
            .ss-side-title{font-size:30px;line-height:1.08;font-weight:900;color:#073d33}
            .ss-promo .ss-side-title{color:#fff}
            .ss-side-btn{display:inline-flex;margin-top:20px;align-items:center;gap:8px;border-radius:999px;background:#075b3e;padding:12px 18px;font-size:14px;font-weight:900;color:#fff}
            .ss-promo .ss-side-btn{background:#fff;color:#073d33}
            .ss-bill-img{position:absolute;right:0;bottom:0;width:55%;height:auto}
            .ss-promo-img{position:absolute;right:0;bottom:-32px;width:170px;height:170px;object-fit:contain}
            .ss-mobile-nav{display:none}
            @media (max-width: 1199px){
              .ss-shell{width:min(100%,945px);padding:16px 16px 96px}
              .ss-top,.ss-lower{grid-template-columns:1fr}
              .ss-right{gap:12px}
              .ss-hero{min-height:190px;padding:22px}
              .ss-title{font-size:42px}
              .ss-subtitle{font-size:16px;line-height:1.45}
              .ss-hero-img{width:46%;max-width:260px}
              .ss-services{grid-template-columns:repeat(6,minmax(0,1fr))}
              .ss-side{grid-template-columns:1fr 1fr}
              .ss-mobile-nav{display:block}
            }
            @media (max-width: 720px){
              .ss-shell{padding:16px 16px 96px}
              .ss-logo{gap:10px}
              .ss-logo img{width:40px;height:40px;border-radius:13px}
              .ss-name{max-width:150px;overflow:hidden;text-overflow:ellipsis;font-size:clamp(20px,6.4vw,32px)}
              .ss-tagline{max-width:150px;overflow:hidden;text-overflow:ellipsis;font-size:12px}
              .ss-round{width:36px;height:36px}
              .ss-header-actions{gap:6px}
              .ss-top{gap:20px;margin-top:20px}
              .ss-hero{min-height:136px;border-radius:22px;padding:16px}
              .ss-hero-copy{max-width:61%}
              .ss-eyebrow{font-size:12px}
              .ss-title{margin-top:8px;font-size:22px;line-height:1.12}
              .ss-subtitle{margin-top:8px;font-size:12px;line-height:1.55}
              .ss-hero-img{width:46%;max-width:150px}
              .ss-balance{border-radius:24px;padding:16px}
              .ss-wallet{width:44px;height:44px;border-radius:15px}
              .ss-wallet img{width:32px;height:32px}
              .ss-balance-label{font-size:12px}
              .ss-amount{font-size:clamp(29px,8.5vw,44px)}
              .ss-topup{margin-top:16px}
              .ss-section{margin-top:20px;border-radius:24px;padding:16px}
              .ss-section-title{font-size:18px}
              .ss-services{grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
              .ss-service{gap:8px;border-radius:18px;padding:12px}
              .ss-service-icon{width:56px;height:56px;border-radius:16px}
              .ss-service-icon img{width:36px;height:36px}
              .ss-service-label{font-size:12px}
              .ss-activity-row{grid-template-columns:auto minmax(0,1fr) auto;gap:12px}
              .ss-status{display:none}
              .ss-side{grid-template-columns:1fr}
              .ss-bill,.ss-promo{border-radius:24px}
            }
          `,
        }}
      />

      <div className="ss-shell">
        <header className="ss-header">
          <Link href="/" prefetch={false} className="ss-logo">
            <Image src={`${ASSET_BASE}/01_header/logo_symbol.webp`} alt="" width={56} height={56} priority />
            <span>
              <span className="ss-name">SakuSiap</span>
              <span className="ss-tagline">Siap sehari-hari</span>
            </span>
          </Link>

          <div className="ss-header-actions">
            <button type="button" aria-label="Notifikasi" className="ss-round">
              <Bell className="h-5 w-5" />
              <span className="ss-dot" />
            </button>
            <Link href={links.account} prefetch={false} aria-label="Akun" className="ss-round ss-round-green">
              <ShieldCheck className="h-5 w-5 fill-[#078153]/10" />
            </Link>
          </div>
        </header>

        <section className="ss-top">
          <div className="ss-card ss-hero">
            <div className="ss-hero-copy">
              <p className="ss-eyebrow">Halo, {userName || "Selamat Datang"}!</p>
              <h1 className="ss-title">Semua siap.</h1>
              <p className="ss-subtitle">Pulsa, tagihan, saldo.</p>
            </div>
            <Image
              src={`${ASSET_BASE}/01_header/ilustrasi_ruang_tamu.webp`}
              alt=""
              width={360}
              height={220}
              priority
              sizes="(min-width: 1200px) 360px, 46vw"
              className="ss-hero-img"
            />
          </div>

          <div className="ss-right">
            <section className="ss-balance">
              <div className="ss-balance-main">
                <span className="ss-wallet">
                  <Image
                    src={`${ASSET_BASE}/02_saldo_transparan/saldo_icon_wallet_transparan.webp`}
                    alt=""
                    width={44}
                    height={44}
                  />
                </span>
                <div className="ss-balance-meta">
                  <div className="ss-balance-label">
                    Saldo Utama <Eye className="h-4 w-4" />
                  </div>
                  <div className="ss-amount">Rp 250.000</div>
                </div>
              </div>
              <Link href={links.topup} prefetch={false} className="ss-topup">
                <Plus className="h-4 w-4" /> Isi Saldo
              </Link>
            </section>

            <section className="ss-actions">
              <QuickAction href={links.topup} icon={<Plus className="h-4 w-4" />} label="Isi" />
              <QuickAction href={links.transfer} icon={<Send className="h-4 w-4" />} label="Transfer" />
              <QuickAction href={links.history} icon={<ReceiptText className="h-4 w-4" />} label="Riwayat" />
            </section>
          </div>
        </section>

        <section className="ss-section">
          <div className="ss-section-head">
            <h2 className="ss-section-title">Layanan</h2>
            <Link href={links.allServices} prefetch={false} className="ss-all">
              Semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="ss-services">
            {services.map(([label, key, icon]) => (
              <Link key={label} href={serviceHref(links, key)} prefetch={false} className="ss-service">
                <span className="ss-service-icon">
                  <Image src={`${ASSET_BASE}${icon}`} alt="" width={42} height={42} />
                </span>
                <span className="ss-service-label">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="ss-lower">
          <section className="ss-section">
            <div className="ss-section-head">
              <h2 className="ss-section-title">Aktivitas</h2>
              <Link href={links.history} prefetch={false} className="ss-all">
                Semua <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              {activities.map(([label, date, amount, icon]) => (
                <div key={label} className="ss-activity-row">
                  <span className="ss-activity-icon">
                    <Image src={`${ASSET_BASE}${icon}`} alt="" width={30} height={30} />
                  </span>
                  <div className="min-w-0">
                    <p className="ss-activity-name">{label}</p>
                    <p className="ss-activity-date">{date}</p>
                  </div>
                  <p className="ss-activity-amount">{amount}</p>
                  <span className="ss-status">
                    <CheckCircle2 className="h-3 w-3 fill-emerald-600 text-white" /> OK
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="ss-side">
            <Link href={links.bill} prefetch={false} className="ss-bill">
              <div className="ss-side-copy">
                <h2 className="ss-side-title">Tagihan rumah. Cepat.</h2>
                <span className="ss-side-btn">
                  Bayar <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <Image
                src={`${ASSET_BASE}/03_banner_utama/banner_rumah_dan_tanaman.webp`}
                alt=""
                width={260}
                height={170}
                className="ss-bill-img"
              />
            </Link>

            <Link href={links.bill} prefetch={false} className="ss-promo">
              <div className="ss-side-copy">
                <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-black">Promo</span>
                <h2 className="ss-side-title mt-5">Cashback Rp 25.000</h2>
                <span className="ss-side-btn">
                  Cek <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <Image
                src={`${ASSET_BASE}/07_promo/promo_ilustrasi_hp.webp`}
                alt=""
                width={170}
                height={170}
                className="ss-promo-img"
              />
            </Link>
          </div>
        </section>
      </div>

      <div className="ss-mobile-nav">{bottomNav}</div>
    </main>
  );
}
