"use client";
import { useState } from "react";
const req = ["name_en", "mobile", "email", "current_office_name", "current_designation", "membership_type"];
export function MembershipApplicationForm() {
  const [data, setData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const field = (n: string, label: string, t = "text") => <div><label>{label}</label><input type={t} className="border p-2 w-full" value={data[n] || ""} onChange={(e) => setData({ ...data, [n]: e.target.value })} />{errors[n] && <p className="text-red-600 text-sm">{errors[n]}</p>}</div>;
  async function sub(ev: React.FormEvent) {
    ev.preventDefault();
    const ne: Record<string, string> = {};
    req.forEach((k) => !data[k] && (ne[k] = "Required"));
    if (!data.declaration_accepted) ne.declaration_accepted = "Required";
    if (data.email && !/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) ne.email = "Invalid email";
    setErrors(ne);
    if (Object.keys(ne).length) return;
    setLoading(true);
    const r = await fetch("/api/applications", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const j = await r.json(); setLoading(false);
    if (r.ok) location.href = `/apply/success?bisa_id=${encodeURIComponent(j.bisa_id)}`; else alert(j.error || "Failed");
  }
  return <form className="grid md:grid-cols-2 gap-3 mt-4" onSubmit={sub}>{field("name_en", "Name (English) *")}{field("name_bn", "Name (Bangla)")}{field("mobile", "Mobile *")}{field("email", "Email *", "email")}{field("current_office_name", "Current Office *")}{field("current_designation", "Current Designation *")}{field("membership_type", "Membership Type *")}{field("ministry", "Ministry")}{field("service_employee_id", "Service Employee ID")}{field("national_id", "National ID")}<label className="md:col-span-2"><input type="checkbox" checked={!!data.declaration_accepted} onChange={(e) => setData({ ...data, declaration_accepted: e.target.checked })} /> I accept declaration *</label>{errors.declaration_accepted && <p className="text-red-600 md:col-span-2">{errors.declaration_accepted}</p>}<button disabled={loading} className="bg-blue-900 text-white px-4 py-2 md:col-span-2">{loading ? "Submitting..." : "Submit"}</button></form>;
}
