"use client";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function Page() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  if (loading || !user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user.email}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
