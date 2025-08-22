import AuthorizedProvider from "@/components/provider/authorizedProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthorizedProvider>{children}</AuthorizedProvider>;
}
