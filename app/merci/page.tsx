import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci | FANIS NETWORK",
  description:
    "Merci pour votre message. Notre équipe vous répondra rapidement pour donner vie à votre projet.",
};

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(220,38,38,0.15),transparent)]" />
      <div className="relative max-w-2xl w-full text-center space-y-6 py-24">
        <p className="text-sm uppercase tracking-[0.4em] text-[#dc2626]">
          Merci
        </p>
        <h1 className="text-4xl md:text-5xl font-light leading-tight">
          Votre message a bien été reçu.
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Nous reviendrons vers vous dans les plus brefs délais pour parler de
          votre projet et imaginer la prochaine étape de votre présence
          digitale.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-full text-sm tracking-[0.2em] transition-all duration-300"
          >
            RETOUR À L&apos;ACCUEIL
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 15L15 1M15 1H1M15 1V15"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
