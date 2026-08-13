import { RootShell } from "@/components/root-shell";
import { metadataFor } from "@/lib/metadata";

export const metadata = metadataFor("en");

export default function EnLayout({ children }: LayoutProps<"/">) {
  return <RootShell lang="en">{children}</RootShell>;
}
