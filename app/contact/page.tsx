import {
  Mail,
  MessageCircle,
  AtSign,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-[#262626]">

        <div className="absolute left-1/2 top-[-80px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A34D]/10 blur-[120px] lg:top-0 lg:h-[650px] lg:w-[650px] lg:blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-28">

          <p className="text-xs uppercase tracking-[0.45em] text-[#C8A34D]">
            CONTACT ELARE
          </p>

          <h1
            className="mt-6 text-4xl leading-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's Start A
            <br />
            <span className="text-[#D4AF37]">
              Conversation
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
            Whether it's a question, feedback, collaboration or simply
            to say hello—we'd love to hear from you.
          </p>

        </div>

      </section>

      {/* Contact */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">

        <div className="grid gap-12 lg:grid-cols-[1fr_520px]">

          {/* LEFT */}

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#C8A34D]">
              GET IN TOUCH
            </p>

            <h2
              className="mt-5 text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We'd Love
              <br />
              To Hear From You.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">
              Every message matters to us. Whether it's about your order,
              sizing, collaborations or feedback, our team is here to help.
            </p>

            <div className="mt-12 space-y-5">

              {/* Email */}

              <a
                href="mailto:hello.elare@gmail.com"
                className="group flex items-center gap-5 rounded-3xl border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_12px_40px_rgba(212,175,55,0.08)]"
              >

                <div className="rounded-2xl bg-[#D4AF37]/10 p-4">
                  <Mail className="text-[#D4AF37]" />
                </div>

                <div className="flex-1">

                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-lg text-white">
                    hello@elare.in
                  </p>

                </div>

                <ArrowRight
                  size={18}
                  className="text-[#D4AF37] transition group-hover:translate-x-1"
                />

              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/918501988162"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_12px_40px_rgba(212,175,55,0.08)]"
              >

                <div className="rounded-2xl bg-[#D4AF37]/10 p-4">
                  <MessageCircle className="text-[#D4AF37]" />
                </div>

                <div className="flex-1">

                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-lg text-white">
                    Chat With Us
                  </p>

                </div>

                <ArrowRight
                  size={18}
                  className="text-[#D4AF37] transition group-hover:translate-x-1"
                />

              </a>

              {/* Instagram */}

              <a
                href="https://instagram.com/fromelare"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_12px_40px_rgba(212,175,55,0.08)]"
              >

                <div className="rounded-2xl bg-[#D4AF37]/10 p-4">
                  <AtSign className="text-[#D4AF37]" />
                </div>

                <div className="flex-1">

                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    Instagram
                  </p>

                  <p className="mt-1 text-lg text-white">
                    @fromelare
                  </p>

                </div>

                <ArrowRight
                  size={18}
                  className="text-[#D4AF37] transition group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-[32px] border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-8">

            <h3
              className="text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Send a Message
            </h3>

            <form
              action="https://formsubmit.co/hello@elare.in"
              method="POST"
              className="mt-8 space-y-6"
            >

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
              />

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Your Message"
                className="w-full resize-none rounded-2xl border border-[#333] bg-[#111111] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                className="premium-button flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                Send Message
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-[#262626]">

        <div className="mx-auto max-w-5xl px-5 py-24 text-center">

          <h2
            className="text-5xl sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Wear Your Story.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Thank you for choosing ElAre.
            We're excited to be a part of your journey.
          </p>

          <Link
            href="/shop"
            className="premium-button mt-12 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Collection
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}