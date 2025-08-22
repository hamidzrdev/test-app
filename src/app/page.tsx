import LoginForm from "@/components/auth/LoginForm";
import AppHeader from "@/components/layout/AppHeader";
import AppLayout from "@/components/layout/AppLayout";


export default function Home() {
  return (
    <>
    <AppHeader/>
    <AppLayout>
<LoginForm/>
</AppLayout>
</>
  );
}
