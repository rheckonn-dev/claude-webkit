import { RootShell } from "@/components/root-shell";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("es");

// Both root layouts sit at "/" as far as typed routes are concerned — a route
// group adds no URL segment, so "/es" is not a valid layout path here.
export default function EsLayout({ children }: LayoutProps<"/">) {
  return <RootShell lang="es">{children}</RootShell>;
}
