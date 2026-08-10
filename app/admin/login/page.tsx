"use client";

import { FormEvent, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
      );

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while logging in."
      );

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#031A2B] px-4 py-10 sm:px-6">
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="w-full max-w-md">

          {/* Logo / Brand */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#54B5FF] to-[#63C96A] shadow-xl">
              <span className="text-xl font-black text-white">
                AA
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white">
              ARK AQUATECH
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Blog Management
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-[30px] border border-white/10 bg-white p-7 shadow-2xl sm:p-9">

            <div className="mb-7">
              <h2 className="text-2xl font-black text-[#021B2F]">
                Admin Login
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Login to manage ARK AQUATECH blogs.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#021B2F]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-[#021B2F] outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-[#021B2F]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-[#021B2F] outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                  <p className="text-sm font-medium text-red-600">
                    {error}
                  </p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A6EBD] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#0A6EBD]/20 transition hover:-translate-y-0.5 hover:bg-[#075a9c] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Logging in..."
                ) : (
                  <>
                    Login to Dashboard
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </form>

            <div className="mt-7 border-t border-slate-100 pt-5 text-center">
              <p className="text-xs text-slate-400">
                ARK AQUATECH Admin Panel
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}