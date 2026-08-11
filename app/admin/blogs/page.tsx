"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Eye,
  EyeOff,
  Star,
  CalendarDays,
} from "lucide-react";

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
  created_at: string | null;
  updated_at: string | null;
};

export default function AdminBlogsPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  useEffect(() => {
    checkUserAndLoadBlogs();
  }, []);

  const checkUserAndLoadBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("BLOG FETCH ERROR:", error);
        setError(error.message);
        return;
      }

      setBlogs(data || []);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load blogs."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    try {
      const { error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id);

      if (error) {
        alert(error.message);
        return;
      }

      setBlogs((current) =>
        current.filter((blog) => blog.id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to delete blog.");
    }
  };

  const togglePublished = async (
    id: string,
    currentStatus: boolean | null
  ) => {
    try {
      const newStatus = !currentStatus;

      const { error } = await supabase
        .from("blogs")
        .update({
          published: newStatus,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) {
        alert(error.message);
        return;
      }

      setBlogs((current) =>
        current.map((blog) =>
          blog.id === id
            ? {
                ...blog,
                published: newStatus,
              }
            : blog
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update blog.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const formatDate = (date: string) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-[#F7FAFC]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-black text-[#021B2F] sm:text-2xl">
              ARK AQUATECH
            </h1>

            <p className="text-xs font-medium text-slate-500">
              Blog Management
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#021B2F]">
              Blogs
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Create, edit and publish your aquaculture articles.
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A6EBD] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A6EBD]/20 transition hover:-translate-y-0.5 hover:bg-[#075a9c]"
          >
            <Plus className="h-5 w-5" />
            New Blog
          </Link>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 p-5">
            <p className="text-sm font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* LOADING */}
        {loading ? (
          <div className="rounded-3xl border border-slate-100 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#0A6EBD]" />

            <p className="mt-4 text-sm font-medium text-slate-500">
              Loading blogs...
            </p>
          </div>
        ) : blogs.length === 0 ? (
          /* EMPTY */
          <div className="rounded-3xl border border-slate-100 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F7FF]">
              <Plus className="h-7 w-7 text-[#0A6EBD]" />
            </div>

            <h3 className="mt-5 text-xl font-black text-[#021B2F]">
              No blogs yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Create your first blog post and publish it to the
              website.
            </p>

            <Link
              href="/admin/blogs/new"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0A6EBD] px-5 py-3 text-sm font-bold text-white"
            >
              <Plus className="h-4 w-4" />
              Create First Blog
            </Link>
          </div>
        ) : (
          /* BLOG LIST */
          <div className="space-y-4">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:p-6">
                  {/* IMAGE */}
                  <div className="h-32 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 md:w-48">
                    {blog.image_url ? (
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm font-bold text-slate-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* INFO */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#F0F7FF] px-3 py-1 text-[11px] font-bold text-[#0A6EBD]">
                        {blog.category}
                      </span>

                      {blog.featured && (
                        <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-600">
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </span>
                      )}

                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold ${
                          blog.published
                            ? "bg-green-50 text-green-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-black text-[#021B2F]">
                      {blog.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                      {blog.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {formatDate(blog.published_date)}
                      </span>

                      {blog.read_time && (
                        <span>{blog.read_time}</span>
                      )}
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    {blog.published && (
                      <Link
                        href={`/blogs1/${blog.slug}`}
                        target="_blank"
                        className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </Link>
                    )}

                    <button
                      onClick={() =>
                        togglePublished(
                          blog.id,
                          blog.published
                        )
                      }
                      className={`flex h-10 items-center gap-2 rounded-xl px-3 text-xs font-bold transition ${
                        blog.published
                          ? "bg-amber-50 text-amber-600 hover:bg-amber-100"
                          : "bg-green-50 text-green-600 hover:bg-green-100"
                      }`}
                    >
                      {blog.published ? (
                        <>
                          <EyeOff className="h-4 w-4" />
                          Unpublish
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4" />
                          Publish
                        </>
                      )}
                    </button>

                    <Link
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="flex h-10 items-center gap-2 rounded-xl bg-[#F0F7FF] px-3 text-xs font-bold text-[#0A6EBD] transition hover:bg-[#E2F0FF]"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="flex h-10 items-center gap-2 rounded-xl bg-red-50 px-3 text-xs font-bold text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}