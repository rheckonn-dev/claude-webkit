import { Marcellus, Jost } from "next/font/google";

/** Defined once and shared by both root layouts, so the two languages load
 *  exactly the same font files and the browser caches them across the switch. */
export const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});
