import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { FooterData } from "../types";

interface Props {
  data: FooterData;
}

export const Footer = ({ data }: Props) => {
  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col items-center gap-5 text-center"
      >
        {data.logoSrc && (
          <img
            src={data.logoSrc}
            alt="GrowthHub"
            className="h-7 w-auto opacity-90"
          />
        )}
        {data.nota && (
          <p className="text-sm text-muted-foreground font-light max-w-md leading-relaxed">
            {data.nota}
          </p>
        )}
        <a
          href={data.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground/85 hover:text-foreground transition-colors"
        >
          {data.siteLabel}
          <ArrowUpRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </footer>
  );
};
