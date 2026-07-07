import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">

      {/* Hero */}

      <section className="border-b border-[#262626]">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">

          <p className="text-xs uppercase tracking-[0.4em] text-[#C8A34D]">
            CHECKOUT
          </p>

          <h1
            className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Complete
            <br />

            <span className="text-[#D4AF37]">
              Your Order
            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            You're just one step away from receiving your
            premium ElAre experience.
          </p>

        </div>

      </section>

      {/* Checkout */}

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">

          <CheckoutForm />

          <OrderSummary />

        </div>

      </section>

    </main>
  );
}