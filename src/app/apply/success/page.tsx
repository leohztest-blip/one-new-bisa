"use client";
import { useSearchParams } from "next/navigation";
export default function Page(){const id=useSearchParams().get("bisa_id");return <div><h1>Application Submitted Successfully</h1><p>{id}</p></div>}
