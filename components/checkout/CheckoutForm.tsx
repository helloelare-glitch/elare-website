"use client";

import PaymentMethod from "./PaymentMethod";

type Props = {
  form: {
    fullName: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  errors: Record<string, string>;
  payment: string;
  setPayment: (value: string) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function CheckoutForm({
  form,
  errors,
  payment,
  setPayment,
  handleChange,
}: Props) {
  return (
    <div className="rounded-[32px] border border-[#262626] bg-gradient-to-b from-[#1A1A1A] to-[#141414] p-6 sm:p-8 lg:p-10">

      <h2
        className="text-3xl sm:text-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Delivery Details
      </h2>

      <p className="mt-3 text-gray-400">
        Please enter your shipping information.
      </p>

      <div className="mt-10 grid gap-6">

        {/* Full Name */}

        <div>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className={`w-full rounded-2xl border bg-[#111111] px-5 py-4 outline-none transition ${
              errors.fullName
                ? "border-red-500"
                : "border-[#333] focus:border-[#D4AF37]"
            }`}
          />
          {errors.fullName && (
            <p className="mt-2 text-sm text-red-400">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Mobile */}

        <div>
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className={`w-full rounded-2xl border bg-[#111111] px-5 py-4 outline-none transition ${
              errors.mobile
                ? "border-red-500"
                : "border-[#333] focus:border-[#D4AF37]"
            }`}
          />
          {errors.mobile && (
            <p className="mt-2 text-sm text-red-400">
              {errors.mobile}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={`w-full rounded-2xl border bg-[#111111] px-5 py-4 outline-none transition ${
              errors.email
                ? "border-red-500"
                : "border-[#333] focus:border-[#D4AF37]"
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        {/* Address */}

        <div>
          <textarea
            name="address"
            rows={4}
            value={form.address}
            onChange={handleChange}
            placeholder="House No, Street, Area"
            className={`w-full resize-none rounded-2xl border bg-[#111111] px-5 py-4 outline-none transition ${
              errors.address
                ? "border-red-500"
                : "border-[#333] focus:border-[#D4AF37]"
            }`}
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-400">
              {errors.address}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">

          <div>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className={`w-full rounded-2xl border bg-[#111111] px-5 py-4 outline-none transition ${
                errors.city
                  ? "border-red-500"
                  : "border-[#333] focus:border-[#D4AF37]"
              }`}
            />
            {errors.city && (
              <p className="mt-2 text-sm text-red-400">
                {errors.city}
              </p>
            )}
          </div>

          <div>
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
              className={`w-full rounded-2xl border bg-[#111111] px-5 py-4 outline-none transition ${
                errors.state
                  ? "border-red-500"
                  : "border-[#333] focus:border-[#D4AF37]"
              }`}
            />
            {errors.state && (
              <p className="mt-2 text-sm text-red-400">
                {errors.state}
              </p>
            )}
          </div>

        </div>

        <div>
          <input
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className={`w-full rounded-2xl border bg-[#111111] px-5 py-4 outline-none transition ${
              errors.pincode
                ? "border-red-500"
                : "border-[#333] focus:border-[#D4AF37]"
            }`}
          />
          {errors.pincode && (
            <p className="mt-2 text-sm text-red-400">
              {errors.pincode}
            </p>
          )}
        </div>

      </div>

      <PaymentMethod
        payment={payment}
        setPayment={setPayment}
      />

    </div>
  );
}