"use client";

import { FormEvent, useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Biofloc Technology");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [content, setContent] = useState("");

  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);

  const [imageUrl, setImageUrl] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  /*
   * Load blog
   */
  useEffect(() => {
    const loadBlog = async () => {
      if (!id) return;

      try {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
        );

        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        if (!data) {
          throw new Error("Blog not found.");
        }

        setTitle(data.title || "");
        setDescription(data.description || "");
        setCategory(data.category || "Biofloc Technology");
        setDate(data.published_date || "");
        setReadTime(data.read_time || "");
        setContent(data.content || "");
        setFeatured(Boolean(data.featured));
        setPublished(Boolean(data.published));
        setImageUrl(data.image_url || "");
        setImagePreview(data.image_url || "");
      } catch (err) {
        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Failed to load blog."
        );
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [id]);

  /*
   * Image change
   */
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be less than 5MB.");
      return;
    }

    setError("");
    setNewImage(file);

    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
  };

  /*
   * Slug
   */
  const createSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  /*
   * Save changes
   */
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    if (!title.trim()) {
      setError("Please enter a blog title.");
      return;
    }

    if (!description.trim()) {
      setError("Please enter a description.");
      return;
    }

    if (!content.trim()) {
      setError("Please enter blog content.");
      return;
    }

    try {
      setSaving(true);

      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
      );

      const slug = createSlug(title);

      /*
       * Check duplicate slug
       */
      const { data: duplicate } = await supabase
        .from("blogs")
        .select("id")
        .eq("slug", slug)
        .neq("id", id)
        .maybeSingle();

      if (duplicate) {
        setError(
          "Another blog already uses this title."
        );
        setSaving(false);
        return;
      }

      let finalImageUrl = imageUrl;

      /*
       * Upload new image if selected
       */
      if (newImage) {
        const extension =
          newImage.name.split(".").pop() || "jpg";

        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}.${extension}`;

        const filePath = `blogs/${fileName}`;

        const { error: uploadError } =
          await supabase.storage
            .from("blog-images")
            .upload(filePath, newImage, {
              cacheControl: "3600",
              upsert: false,
            });

        if (uploadError) {
          throw uploadError;
        }

        const { data: publicUrlData } =
          supabase.storage
            .from("blog-images")
            .getPublicUrl(filePath);

        finalImageUrl =
          publicUrlData.publicUrl;
      }

      /*
       * Update blog
       */
      const { error: updateError } =
        await supabase
          .from("blogs")
          .update({
            title: title.trim(),
            slug,
            description: description.trim(),
            category,
            published_date: date,
            read_time: readTime,
            image_url: finalImageUrl,
            content: content.trim(),
            featured,
            published,
            updated_at: new Date().toISOString(),
          })
          .eq("id", id);

      if (updateError) {
        throw updateError;
      }

      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to update blog."
      );
    } finally {
      setSaving(false);
    }
  };

  /*
   * Loading
   */
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7FAFC]">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#0A6EBD]" />

          <p className="mt-3 text-sm text-slate-500">
            Loading blog...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7FAFC]">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-5 sm:px-6">

          <Link
            href="/admin/blogs"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <div>
            <h1 className="text-2xl font-black text-[#021B2F]">
              Edit Blog
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Update your ARK AQUATECH article.
            </p>
          </div>

        </div>
      </header>

      {/* Form */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Blog Information */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Blog Information
            </h2>

            <div className="mt-6 space-y-5">

              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#021B2F]">
                  Blog Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#021B2F]">
                  Short Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
                  required
                />
              </div>

              {/* Category / Date */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#021B2F]">
                    Category
                  </label>

                  <select
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-[#0A6EBD]"
                  >
                    <option>Biofloc Technology</option>
                    <option>RAS Systems</option>
                    <option>Water Management</option>
                    <option>Shrimp Farming</option>
                    <option>Hatchery Engineering</option>
                    <option>Sustainability</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#021B2F]">
                    Published Date
                  </label>

                  <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-[#0A6EBD]"
                  />
                </div>

              </div>

              {/* Read Time */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#021B2F]">
                  Read Time
                </label>

                <input
                  type="text"
                  value={readTime}
                  onChange={(e) =>
                    setReadTime(e.target.value)
                  }
                  placeholder="8 min read"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-[#0A6EBD]"
                />
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Blog Image
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Upload a new image if you want to replace
              the existing one.
            </p>

            <div className="mt-6">

              {imagePreview ? (
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={imagePreview}
                    alt={title}
                    className="h-[300px] w-full object-cover"
                  />

                  <label className="absolute bottom-4 right-4 cursor-pointer rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#021B2F] shadow-lg">
                    Change Image

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : (
                <label className="flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">

                  <ImageIcon className="h-8 w-8 text-[#0A6EBD]" />

                  <p className="mt-4 text-sm font-bold text-[#021B2F]">
                    Upload Blog Image
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>
              )}

            </div>
          </div>

          {/* Content */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Blog Content
            </h2>

            <textarea
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              rows={20}
              className="mt-6 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
              required
            />

          </div>

          {/* Publishing */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Publishing Options
            </h2>

            <div className="mt-6 space-y-4">

              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">

                <div>
                  <p className="font-bold text-[#021B2F]">
                    Featured Blog
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Show this article as featured.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) =>
                    setFeatured(e.target.checked)
                  }
                  className="h-5 w-5 accent-[#0A6EBD]"
                />

              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">

                <div>
                  <p className="font-bold text-[#021B2F]">
                    Published
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Published blogs appear on the website.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) =>
                    setPublished(e.target.checked)
                  }
                  className="h-5 w-5 accent-[#0A6EBD]"
                />

              </label>

            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <Link
              href="/admin/blogs"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A6EBD] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A6EBD]/20 transition hover:bg-[#075a9c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>

          </div>

        </form>
      </section>
    </main>
  );
}