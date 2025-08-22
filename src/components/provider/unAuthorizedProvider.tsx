import AppHeader from "../layout/AppHeader";
import AppLayout from "../layout/AppLayout";

export default function UnAuthorizedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <AppLayout>{children}</AppLayout>
    </>
  );
}
