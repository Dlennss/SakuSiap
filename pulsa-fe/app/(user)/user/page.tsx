import { getAppServerSession } from "@/lib/server-auth";
import { SakuSiapHomeExperience } from "@/components/site/SakuSiapHomeExperience";
import type { UserSession } from "@/components/user/types";
import { UserAuthClientSync } from "@/components/user/UserAuthClientSync";
import { UserBottomNav } from "@/components/user/UserBottomNav";

type SessionShape = {
  user?: UserSession;
  backendToken?: string;
};

export default async function UserAppHomePage() {
  const session = (await getAppServerSession()) as SessionShape | null;

  return (
    <>
      {session?.backendToken ? <UserAuthClientSync backendToken={session.backendToken} /> : null}

      <SakuSiapHomeExperience
        userName={session?.user?.name}
        links={{
          topup: "/user/account/topup",
          transfer: "/user/saldo/kirim",
          history: "/user/transaksi",
          bill: "/user/listrik/tagihan",
          allServices: "/user/kategori",
          pulsaData: "/user/pulsa-data",
          electricityToken: "/user/listrik/token",
          ewallet: "/user/ewallet",
          internet: "/user/kategori",
          account: "/user/account",
        }}
        bottomNav={<UserBottomNav />}
      />
    </>
  );
}
