import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  published_date: string;
  read_time: string | null;
  image_url: string | null;
  content: string | null;
  featured: boolean | null;
  published: boolean | null;
};

function formatDate(date: string) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    console.error("BLOG DETAIL ERROR:", error);
    notFound();
  }

  if (!blog) {
    notFound();
  }

  const currentBlog = blog as Blog;

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[#031A2B] px-4 pb-16 pt-40 sm:px-6 sm:pt-44">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blogs1"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <div className="mt-8">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0A6EBD]">
              {currentBlog.category}
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {currentBlog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {currentBlog.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#54B5FF]" />
                {formatDate(currentBlog.published_date)}
              </span>

              {currentBlog.read_time && (
                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#54B5FF]" />
                  {currentBlog.read_time}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        {/* IMAGE */}
        {currentBlog.image_url && (
          <div className="mb-12 overflow-hidden rounded-[30px]">
            <img
              src={currentBlog.image_url}
              alt={currentBlog.title}
              className="h-auto max-h-[600px] w-full object-cover"
            />
          </div>
        )}

        {/* BLOG CONTENT */}
        <div className="mx-auto max-w-3xl">
          {currentBlog.content ? (
            <div className="whitespace-pre-wrap text-[16px] leading-8 text-slate-700">
              {currentBlog.content}
            </div>
          ) : (
            <p className="text-slate-500">
              No blog content available.
            </p>
          )}

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              href="/blogs1"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A6EBD] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#075a9c]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Blogs
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}