import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[200vh] flex-col items-center justify-center bg-black font-sans text-white p-24">
      <main className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          The future of chargeback management is here.
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Integrated directly into your payment stack, Chargeflow provides the most smooth and powerful recovery automation on the market.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-500 transition-colors shadow-2xl shadow-blue-500/20">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-colors">
            View Pricing
          </button>
        </div>
      </main>
    </div>
  );
}
