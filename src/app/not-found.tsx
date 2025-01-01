"use client";
import "./404.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="notFound">
        <h1>404</h1>
        <h6>Página no encontrada</h6>
        <Link href="/1">Regresar a la página principal</Link>
      </div>
    </>
  );
}
