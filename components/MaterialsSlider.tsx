"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MaterialsSlider({ items }: { items: Array<{ title: string; image: string }> }) {
  return (
    <div className="-mx-4 mt-14 overflow-x-auto px-4 pb-4 [scrollbar-width:none]">
      <div className="flex gap-5">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            className="group relative h-[420px] min-w-[76vw] overflow-hidden border border-white/10 bg-white/[0.035] md:min-w-[390px]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
          >
            <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="font-serif text-3xl text-ivory">{item.title}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
