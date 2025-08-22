import { AuthProvider } from "@/context/AuthProvider";
import AppLayout from "../layout/AppLayout";

export default function AuthorizedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout>
      <AuthProvider>{children}</AuthProvider>
    </AppLayout>
  );
}
