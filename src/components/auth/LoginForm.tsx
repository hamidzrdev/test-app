"use client";
import { useState } from "react";
import LoginContainer from "../container/LoginContainer";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import AuthFaq from "./components/AuthFaq";
import {
  ArrowRight,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Divider from "../ui/Divider";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else router.push("/dashboard");
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <LoginContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AuthFaq />
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-bold text-3xl">Smarter Payments,Real Rewards.</h2>
          <p className="text-sm mb-4">
            Earn crypto rewards at checkout — no wallet required.
          </p>

          <Button
            className="border-1 border-gray-300 rounded-full hover:bg-white/20"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <div className="flex flex-row items-center gap-2">
              <Image
                src="assets/images/brands/google.svg"
                alt="Google Logo"
                width={16}
                height={16}
              />
              Log In With Google
            </div>
          </Button>
          <Divider>
            <p className="text-white font-bold">OR</p>
          </Divider>

          <form
            className="flex flex-col gap-3 text-left"
            onSubmit={handleLogin}
          >
            <Input
              type="email"
              id="email"
              name="email"
              icon={<MailIcon className="text-gray-400" size={16} />}
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              icon={<LockIcon className="text-gray-400" size={16} />}
              actions={
                showPassword ? (
                  <EyeIcon
                    onClick={handleShowPassword}
                    className="text-gray-400 cursor-pointer"
                    size={16}
                  />
                ) : (
                  <EyeOffIcon
                    onClick={handleShowPassword}
                    className="text-gray-400 cursor-pointer"
                    size={16}
                  />
                )
              }
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Link href="/forgot-password">
              <Button variant="link">Forgot Password ?</Button>
            </Link>
            <Button
              className="bg-white text-gray-700 font-bold w-full"
              variant="icon"
              rightIcon={<ArrowRight />}
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
            <div className="flex flex-row items-center justify-center gap-1">
              Don't have an account ?
              <Link href="/register">
                <Button variant="link">Sign Up</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
}
