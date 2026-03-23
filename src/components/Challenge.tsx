"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Challenge() {
  return (
    <section className="section-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-[680px]">
          <motion.p
            className="text-sm font-medium tracking-[0.2em] uppercase text-accent-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0 }}
          >
            The Challenge
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.1] tracking-tighter text-theme-primary mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            AI is easy. Business is hard.
          </motion.h2>

          <motion.p
            className="text-base font-sans text-theme-secondary leading-[1.7] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            Ever seen a mind-blowing AI demo and thought, I need to buy that? Or
            sketched out an automation and thought, this could save us hundreds of
            hours? That feeling is real. The technology is transformative.
          </motion.p>

          <motion.p
            className="text-base font-sans text-theme-secondary leading-[1.7]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            The gap between that feeling and actual results is where most
            businesses get stuck. Strategy. Implementation. Adoption. Change
            management. The nuance between these is what separates an AI
            experiment from real business results. You don&apos;t need another
            tool. You need a partner you can trust.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
