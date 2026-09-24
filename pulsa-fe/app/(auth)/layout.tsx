export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-[#1c4032] text-slate-950">
      {children}
    </div>
  );
}
