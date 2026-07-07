type Props = {
  payment: string;
  setPayment: (value: string) => void;
};

const methods = [
  {
    id: "upi",
    title: "UPI",
    desc: "Google Pay, PhonePe, Paytm & more",
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    desc: "Visa, Mastercard, RuPay",
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    desc: "Pay when your order arrives",
  },
];

export default function PaymentMethod({
  payment,
  setPayment,
}: Props) {
  return (
    <div className="mt-12">

      <h2
        className="text-3xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Payment Method
      </h2>

      <p className="mt-3 text-gray-400">
        Choose your preferred payment option.
      </p>

      <div className="mt-8 space-y-4">

        {methods.map((method) => (

          <button
            key={method.id}
            type="button"
            onClick={() => setPayment(method.id)}
            className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
              payment === method.id
                ? "border-[#D4AF37] bg-[#1A1A1A]"
                : "border-[#2A2A2A] bg-[#151515] hover:border-[#555]"
            }`}
          >

            <div>

              <h3 className="text-lg font-medium text-white">
                {method.title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {method.desc}
              </p>

            </div>

            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                payment === method.id
                  ? "border-[#D4AF37]"
                  : "border-gray-500"
              }`}
            >

              {payment === method.id && (
                <div className="h-3 w-3 rounded-full bg-[#D4AF37]" />
              )}

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}