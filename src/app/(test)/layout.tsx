import "@/config/block-registry";

export const metadata = {
  title: "Safahati — Component Test Lab",
  description: "Preview and test block templates in isolation",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
