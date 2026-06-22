"use client";

import { useState } from "react";
import {
  Grid2x2,
  Wrench,
  Zap,
  Paintbrush,
  LayoutPanelLeft,
  PackageOpen,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  CheckCircle,
  Clock,
  Shield,
  ThumbsUp,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Grid2x2,
    title: "Carrelage",
    subtitle: "Pose & Rénovation",
    description:
      "Pose de tous types de carrelage, faïence et rénovation de joints.",
  },
  {
    icon: Wrench,
    title: "Plomberie",
    subtitle: "Petite intervention",
    description:
      "Changement de robinetterie, réparation de fuites, installations sanitaires.",
  },
  {
    icon: Zap,
    title: "Électricité",
    subtitle: "Petite installation",
    description:
      "Remplacement de prises, pose de luminaires, interrupteurs, petits dépannages.",
  },
  {
    icon: Paintbrush,
    title: "Peinture",
    subtitle: "Intérieur & Extérieur",
    description:
      "Travaux de peinture soignés, rafraîchissement, finitions impeccables.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Placo",
    subtitle: "Pose & Cloison",
    description:
      "Aménagement intérieur, pose de plaques de plâtre, doublage, bandes.",
  },
  {
    icon: PackageOpen,
    title: "Montage de meubles",
    subtitle: "Rapide & Efficace",
    description:
      "Assemblage de mobilier en kit, cuisines équipées, dressings.",
  },
  {
    icon: Leaf,
    title: "Entretien extérieur",
    subtitle: "Jardinage & Petits travaux",
    description:
      "Tonte, taille de haies, nettoyage, petits aménagements extérieurs.",
  },
];

const REASSURANCE = [
  { icon: Shield, label: "Travail soigné & durable" },
  { icon: ThumbsUp, label: "Artisan de confiance" },
  { icon: Clock, label: "Réactif & ponctuel" },
  { icon: HeartHandshake, label: "Écoute & conseils personnalisés" },
];

const SERVICE_OPTIONS = [
  "Carrelage",
  "Plomberie",
  "Électricité",
  "Peinture",
  "Placo",
  "Montage de meubles",
  "Entretien extérieur",
  "Autre",
];

// ─── Components ──────────────────────────────────────────────────────────────

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#apropos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2744] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo texte */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="text-white font-black text-lg tracking-wider">
            DELAITRE
          </span>
          <span className="text-[#f5a623] font-semibold text-xs tracking-widest">
            MULTISERVICES
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#f5a623] hover:bg-[#e09510] text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Demander un devis
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-[#1a2744] border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-white font-medium border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center bg-[#f5a623] hover:bg-[#e09510] text-white font-bold px-4 py-3 rounded-lg transition-colors"
          >
            Demander un devis
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#1a2744] text-white pt-28 pb-20 px-4 overflow-hidden">
      {/* Décoration fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#f5a623] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Bouclier / badge */}
        <div className="inline-flex items-center gap-2 bg-[#f5a623]/20 border border-[#f5a623]/40 text-[#f5a623] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider">
          <Shield size={14} />
          VOS TRAVAUX DU QUOTIDIEN, RÉALISÉS AVEC SOIN
        </div>

        <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
          Votre artisan polyvalent de confiance
          <br />
          <span className="text-[#f5a623]">à Basse-sur-le-Rupt</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Rénovation, entretien et dépannage dans les Vosges. Jérôme Delaitre
          intervient rapidement pour tous vos petits et grands travaux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            Demander un devis gratuit
            <ChevronRight size={20} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            Voir nos services
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-3">
            Nos Services
          </h2>
          <div className="w-16 h-1 bg-[#f5a623] mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 text-lg">
            Un artisan, plusieurs compétences — pour simplifier votre vie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 bg-[#1a2744]/8 rounded-xl flex items-center justify-center">
                  <Icon size={24} className="text-[#1a2744]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-black text-[#1a2744] text-base uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#f5a623] mt-1 mb-1.5 rounded-full" />
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {s.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Reassurance() {
  return (
    <section id="apropos" className="bg-[#1a2744] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#f5a623] font-bold text-sm tracking-widest mb-2">
          POURQUOI NOUS CHOISIR
        </p>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-2">
          DEVIS GRATUIT
        </h2>
        <h2 className="text-3xl sm:text-5xl font-black text-[#f5a623] mb-10">
          & INTERVENTION RAPIDE
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {REASSURANCE.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon size={26} className="text-[#f5a623]" strokeWidth={1.5} />
                </div>
                <p className="text-white text-sm font-semibold text-center leading-snug">
                  {r.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Demande de devis – ${form.service || "Multiservices"}`
    );
    const body = encodeURIComponent(
      `Bonjour Jérôme,\n\nNom : ${form.prenom} ${form.nom}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\nService souhaité : ${form.service}\n\nMessage :\n${form.message}\n\nCordialement`
    );
    window.location.href = `mailto:jerome.delaitre88@orange.fr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-3">
            Demandez votre devis gratuit
          </h2>
          <div className="w-16 h-1 bg-[#f5a623] mx-auto rounded-full" />
          <p className="text-gray-600 mt-4">
            Réponse rapide garantie — Jérôme vous recontacte dans les plus
            brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Formulaire */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  size={56}
                  className="text-green-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  Demande envoyée !
                </h3>
                <p className="text-gray-600">
                  Votre client mail s'est ouvert. Jérôme vous répondra
                  rapidement.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#f5a623] font-semibold hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-1.5">
                      Prénom *
                    </label>
                    <input
                      required
                      name="prenom"
                      value={form.prenom}
                      onChange={handleChange}
                      placeholder="Jean"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/30 focus:border-[#1a2744] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-1.5">
                      Nom *
                    </label>
                    <input
                      required
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Dupont"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/30 focus:border-[#1a2744] transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-1.5">
                      Téléphone *
                    </label>
                    <input
                      required
                      name="telephone"
                      type="tel"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/30 focus:border-[#1a2744] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] mb-1.5">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/30 focus:border-[#1a2744] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-1.5">
                    Service souhaité *
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/30 focus:border-[#1a2744] transition bg-white"
                  >
                    <option value="">Choisissez un service…</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] mb-1.5">
                    Décrivez votre besoin *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre projet ou le problème à résoudre…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/30 focus:border-[#1a2744] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold text-base py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  Envoyer ma demande de devis
                  <ChevronRight size={18} />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Votre client mail s'ouvrira — aucune donnée stockée en ligne.
                </p>
              </form>
            )}
          </div>

          {/* Bloc coordonnées bleu foncé */}
          <div className="lg:col-span-2 bg-[#1a2744] rounded-2xl p-8 text-white h-full">
            <h3 className="font-black text-xl mb-1">Jérôme Delaitre</h3>
            <p className="text-[#f5a623] text-sm font-semibold mb-6 tracking-wide">
              Entrepreneur Individuel
            </p>

            <div className="space-y-5">
              <a
                href="mailto:jerome.delaitre88@orange.fr"
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 bg-[#f5a623]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#f5a623]/40 transition-colors">
                  <Mail size={18} className="text-[#f5a623]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-semibold break-all group-hover:text-[#f5a623] transition-colors">
                    jerome.delaitre88@orange.fr
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#f5a623]/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#f5a623]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    Adresse
                  </p>
                  <p className="text-sm font-semibold">
                    3 Route de Pubas
                    <br />
                    88120 Basse-sur-le-Rupt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#f5a623]/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#f5a623]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    Zone d'intervention
                  </p>
                  <p className="text-sm font-semibold">
                    Basse-sur-le-Rupt & Vosges (88)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">
                  Intervention rapide
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Disponible du lundi au samedi. Réponse rapide à votre demande
                de devis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111c35] text-gray-400 py-8 px-4 text-center text-xs">
      <p className="font-semibold text-white mb-1">DELAITRE MULTISERVICES</p>
      <p className="mb-1">
        3 Route de Pubas, 88120 Basse-sur-le-Rupt — Vosges (88)
      </p>
      <p className="mb-3">
        SIRET : 520 704 206 00025 — Entrepreneur Individuel
      </p>
      <p>
        © {new Date().getFullYear()} Delaitre Multiservices — Tous droits
        réservés
      </p>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Reassurance />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
