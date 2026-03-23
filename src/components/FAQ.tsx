"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a whole-home water filtration system?",
    answer:
      "A whole-home water filtration system filters water at the main point of entry into your home, ensuring clean, filtered water flows through every faucet, shower, and appliance throughout your entire home. This means every drop of water you use — for drinking, cooking, bathing, and laundry — is purified.",
  },
  {
    question: "How does reverse osmosis work?",
    answer:
      "Reverse osmosis works by pushing water through a semipermeable membrane that removes contaminants like chlorine, heavy metals, bacteria, and other harmful substances. The membrane acts as an ultra-fine filter, allowing only pure water molecules to pass through while rejecting impurities, which are then flushed away.",
  },
  {
    question: "How often should I replace the filters?",
    answer:
      "Most filtration systems require filter replacement every 6 to 12 months, depending on your water usage and local water quality. We recommend following the product guidelines provided with your system. You can also contact our team at (360) 555-0142 for personalized maintenance recommendations.",
  },
  {
    question: "Why should I choose a water filtration system?",
    answer:
      "A water filtration system significantly improves your water quality by removing harmful toxins, chemicals, and contaminants. It protects your family's health, extends the life of your plumbing and appliances, improves the taste and smell of your water, and reduces your reliance on bottled water — saving money and reducing plastic waste.",
  },
  {
    question: "What contaminants does your system remove?",
    answer:
      "Our systems are designed to remove a wide range of contaminants including chlorine, lead, heavy metals, pesticides, bacteria, and other harmful toxins. Each system is NSF certified and independently tested to ensure it meets or exceeds industry standards for water purification.",
  },
  {
    question: "Will the filtration system affect my water pressure?",
    answer:
      "Our systems are specifically designed to maintain optimal water pressure throughout your home. The advanced filtration technology ensures thorough purification without creating noticeable drops in pressure, so you can enjoy clean water with the strong, consistent flow you expect.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-forest-500 mb-3">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cascade-950">
            Exploring Our Common Questions Answered
          </h2>
          <p className="mt-4 text-base md:text-lg text-snow-500">
            Everything you need to know about Cascadian water filtration
            systems.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-cascade-200 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left bg-white hover:bg-cascade-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cascade-400"
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-semibold text-cascade-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-cascade-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                  <p className="text-sm md:text-base text-snow-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
