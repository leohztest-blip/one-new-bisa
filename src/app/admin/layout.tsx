import Link from "next/link";
export default function Layout({children}:{children:React.ReactNode}){return <div className="flex"><aside className="w-64 min-h-screen bg-blue-950 text-white p-4"><Link href="/admin">Dashboard</Link><br/><Link href="/admin/applications">Applications</Link></aside><main className="p-6 flex-1">{children}</main></div>}
