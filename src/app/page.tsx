"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.href = "./1";
  });
  return <div>Hello World</div>;
}
