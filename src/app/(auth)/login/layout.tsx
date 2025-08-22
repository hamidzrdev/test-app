import UnAuthorizedProvider from "@/components/provider/unAuthorizedProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UnAuthorizedProvider>{children}</UnAuthorizedProvider>;
}
