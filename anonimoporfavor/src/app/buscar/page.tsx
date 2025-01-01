"use client";

import { useRouter } from "next/navigation";
import { ParamsSearch } from "../../../types/Params";

export default function GetPages({ params }: { params: ParamsSearch }) {
  const router = useRouter();
  router.push('buscar/""/1');
  return <div></div>;
}
