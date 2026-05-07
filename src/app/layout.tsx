import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html><body><header className="border-b"><div className="max-w-6xl mx-auto p-4 flex gap-3"><b>BISA</b><Link href="/">Home</Link><Link href="/apply">Apply</Link><Link href="/track">Track</Link><Link href="/admin/login">Admin</Link></div></header><main className="max-w-6xl mx-auto p-6">{children}</main></body></html>;
}
