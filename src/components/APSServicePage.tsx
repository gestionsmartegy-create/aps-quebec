/**
 * APSServicePage — Composant réutilisable pour les pages services APS Québec
 * Design: MedTech sobre, branding orange #F4631E + teal #0D7377
 * Style: Asymétrique, photos réelles, sections vidéo, features grid, CTA
 */

import { Link } from "wouter";
import APSNavbar from "./APSNavbar";
import { useState } from "react";

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  stats: { value: string; label: string }[];
  videoTitle: string;
  videoDescription: string;
  videoUrl: string;
  videoThumbnail: string;
  features: ServiceFeature[];
  steps: ServiceStep[];
  benefitsTitle: string;
  benefits: { title: string; description: string; icon: string }[];
  testimonial?: { quote: string; author: string; role: string };
  ctaTitle: string;
  ctaDescription: string;
  color?: "teal" | "orange";
}

export default function APSServicePage({
  badge,
  title,
  titleHighlight,
  subtitle,
  heroImage,
  heroImageAlt,
  stats,
  videoTitle,
  videoDescription,
  videoUrl,
  videoThumbnail,
  features,
  steps,
  benefitsTitle,
  benefits,
  testimonial,
  ctaTitle,
  ctaDescription,
  color = "teal",
}: ServicePageProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const accent = color === "orange" ? "#F4631E" : "#0D7377";
  const accentLight = color === "orange" ? "#FFF3EE" : "#E6F4F4";

  return (
    <div className="min-h-screen bg-white font-['Outfit',sans-serif]">
      <APSNavbar />

      {/* Hero */}
      <section className="pt-20 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ backgroundColor: accentLight, color: accent }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                {badge}
              </div>
              <h1
                className="text-4xl lg:text-5xl font-black leading-tight mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#0F2A1A" }}
              >
                {title}{" "}
                <span style={{ color: accent }}>{titleHighlight}</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/devenir-partenaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: accent }}
                >
                  Devenir partenaire →
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
                  style={{ borderColor: accent, color: accent }}
                >
                  ← Retour aux services
                </Link>
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl opacity-10"
                style={{ backgroundColor: accent }}
              />
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="relative w-full h-80 lg:h-[480px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
                  style={{ backgroundColor: accent }}
                >
                  ✓
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Service APS</div>
                  <div className="text-sm font-bold text-gray-800">Disponible 7j/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ backgroundColor: accent }} className="py-8 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center text-white">
                  <div className="text-3xl font-black mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: accentLight, color: accent }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
              Présentation du service
            </div>
            <h2
              className="text-3xl lg:text-4xl font-black mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#0F2A1A" }}
            >
              {videoTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{videoDescription}</p>
          </div>

          {/* Video player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
            {!videoPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src={videoThumbnail}
                  alt="Aperçu vidéo"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl transition-all hover:scale-110"
                    style={{ backgroundColor: accent }}
                  >
                    ▶
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-white text-sm font-semibold">{videoTitle}</div>
                  <div className="text-white/60 text-xs">Cliquez pour regarder</div>
                </div>
              </div>
            ) : (
              <iframe
                src={`${videoUrl}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={videoTitle}
              />
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: accentLight, color: accent }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
              Fonctionnalités
            </div>
            <h2
              className="text-3xl lg:text-4xl font-black"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#0F2A1A" }}
            >
              Ce que comprend ce service
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 bg-white"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: accentLight }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ backgroundColor: "#0F2A1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Comment ça fonctionne
            </div>
            <h2
              className="text-3xl lg:text-4xl font-black text-white"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              3 étapes simples
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-white/20 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4 text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-black"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#0F2A1A" }}
            >
              {benefitsTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-5xl mb-6" style={{ color: accent }}>
              "
            </div>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
              {testimonial.quote}
            </blockquote>
            <div className="font-bold text-gray-900">{testimonial.author}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: accent }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {ctaTitle}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/devenir-partenaire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-lg font-bold text-lg transition-all hover:shadow-xl hover:scale-105"
              style={{ color: accent }}
            >
              Devenir partenaire APS →
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg text-white border-2 border-white/40 transition-all hover:bg-white/10"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-8 bg-[#0F2A1A] text-center">
        <p className="text-white/40 text-sm">
          © 2025 APS Québec — Powered by{" "}
          <a href="/" className="text-white/60 hover:text-white transition-colors">
            Vaistat Technology
          </a>
        </p>
      </footer>
    </div>
  );
}
