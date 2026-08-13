// "use client";

// import { FormEvent, useState } from "react";
// import { createBrowserClient } from "@supabase/ssr";
// import { useRouter } from "next/navigation";






// import {
//   ArrowLeft,
//   Upload,
//   Image as ImageIcon,
//   Save,
//   Loader2,
// } from "lucide-react";
// import Link from "next/link";

// export default function NewBlogPage() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Biofloc Technology");
//   const [date, setDate] = useState(
//     new Date().toISOString().split("T")[0]
//   );
//   const [readTime, setReadTime] = useState("5 min read");
//   const [content, setContent] = useState("");
//   const [featured, setFeatured] = useState(false);
//   const [published, setPublished] = useState(true);

//   const [image, setImage] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");



//   const createSlug = (value: string) => {
//     return value
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");
//   };

//   const handleImageChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       setError("Please select an image file.");
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       setError("Image size must be less than 5MB.");
//       return;
//     }

//     setError("");
//     setImage(file);

//     const previewUrl = URL.createObjectURL(file);
//     setImagePreview(previewUrl);
//   };

//   const handleSubmit = async (
//     e: FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     setError("");

//     if (!title.trim()) {
//       setError("Please enter a blog title.");
//       return;
//     }

//     if (!description.trim()) {
//       setError("Please enter a short description.");
//       return;
//     }

//     if (!content.trim()) {
//       setError("Please enter the blog content.");
//       return;
//     }

//     if (!image) {
//       setError("Please upload a blog image.");
//       return;
//     }
// try {
//   setLoading(true);

//   const supabase = createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
//   );

//   const baseSlug = createSlug(title);

// let slug = baseSlug;
// let counter = 2;

// /*
//  * Generate unique slug
//  */
// while (true) {
//   const { data: existingBlog, error: slugCheckError } =
//     await supabase
//       .from("blogs")
//       .select("id")
//       .eq("slug", slug)
//       .maybeSingle();

//   if (slugCheckError) {
//     throw slugCheckError;
//   }

//   if (!existingBlog) {
//     break;
//   }

//   slug = `${baseSlug}-${counter}`;
//   counter++;
// }
//   /*
//    * 2. Upload image
//    */
//   const fileExtension =
//     image.name.split(".").pop() || "jpg";

//   const fileName = `${Date.now()}-${Math.random()
//     .toString(36)
//     .substring(2)}.${fileExtension}`;

//   const filePath = `blogs/${fileName}`;

//   const { error: uploadError } = await supabase.storage
//     .from("blog-images")
//     .upload(filePath, image, {
//       cacheControl: "3600",
//       upsert: false,
//     });

//   if (uploadError) {
//     throw new Error(uploadError.message);
//   }

//   /*
//    * 3. Get public image URL
//    */
//   const { data: publicUrlData } = supabase.storage
//     .from("blog-images")
//     .getPublicUrl(filePath);

//   const imageUrl = publicUrlData.publicUrl;

//   /*
//    * 4. Save blog
//    */
//   const { error: insertError } = await supabase
//     .from("blogs")
//     .insert({
//       title: title.trim(),
//       slug,
//       description: description.trim(),
//       category,
//       published_date: date,
//       read_time: readTime,
//       image_url: imageUrl,
//       content: content.trim(),
//       featured,
//       published,
//     });

//   if (insertError) {
//     await supabase.storage
//       .from("blog-images")
//       .remove([filePath]);

//     throw new Error(insertError.message);
//   }

//   /*
//    * 5. Success
//    */
//   router.push("/admin/blogs");
//   router.refresh();

// } catch (err) {
//   console.error(err);

//   setError(
//     err instanceof Error
//       ? err.message
//       : "Something went wrong while publishing the blog."
//   );

// } finally {
//   setLoading(false);
// }

//   }
//   return (
//     <main className="min-h-screen bg-[#F7FAFC]">

//       {/* Header */}
//       <header className="border-b border-slate-200 bg-white">
//         <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-5 sm:px-6">

//           <Link
//             href="/admin/blogs"
//             className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
//           >
//             <ArrowLeft className="h-5 w-5" />
//           </Link>

//           <div>
//             <h1 className="text-2xl font-black text-[#021B2F]">
//               Add New Blog
//             </h1>

//             <p className="mt-1 text-sm text-slate-500">
//               Create and publish a new ARK AQUATECH article.
//             </p>
//           </div>

//         </div>
//       </header>

//       {/* Form */}
//       <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6"
//         >

//           {/* Basic Information */}
//           <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

//             <h2 className="text-xl font-black text-[#021B2F]">
//               Blog Information
//             </h2>

//             <div className="mt-6 space-y-5">

//               {/* Title */}
//               <div>
//                 <label className="mb-2 block text-sm font-bold text-[#021B2F]">
//                   Blog Title
//                 </label>

//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) =>
//                     setTitle(e.target.value)
//                   }
//                   placeholder="Enter blog title"
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
//                   required
//                 />
//               </div>

//               {/* Description */}
//               <div>
//                 <label className="mb-2 block text-sm font-bold text-[#021B2F]">
//                   Short Description
//                 </label>

//                 <textarea
//                   value={description}
//                   onChange={(e) =>
//                     setDescription(e.target.value)
//                   }
//                   placeholder="Write a short description for the blog..."
//                   rows={4}
//                   className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
//                   required
//                 />
//               </div>

//               {/* Category */}
//               <div className="grid gap-5 md:grid-cols-2">

//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-[#021B2F]">
//                     Category
//                   </label>

//                   <select
//                     value={category}
//                     onChange={(e) =>
//                       setCategory(e.target.value)
//                     }
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-[#0A6EBD]"
//                   >
//                     <option>
//                       Biofloc Technology
//                     </option>
//                     <option>
//                       RAS Systems
//                     </option>
//                     <option>
//                       Water Management
//                     </option>
//                     <option>
//                       Shrimp Farming
//                     </option>
//                     <option>
//                       Hatchery Engineering
//                     </option>
//                     <option>
//                       Sustainability
//                     </option>
//                   </select>
//                 </div>

//                 {/* Date */}
//                 <div>
//                   <label className="mb-2 block text-sm font-bold text-[#021B2F]">
//                     Published Date
//                   </label>

//                   <input
//                     type="date"
//                     value={date}
//                     onChange={(e) =>
//                       setDate(e.target.value)
//                     }
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-[#0A6EBD]"
//                   />
//                 </div>

//               </div>

//               {/* Read Time */}
//               <div>
//                 <label className="mb-2 block text-sm font-bold text-[#021B2F]">
//                   Read Time
//                 </label>

//                 <input
//                   type="text"
//                   value={readTime}
//                   onChange={(e) =>
//                     setReadTime(e.target.value)
//                   }
//                   placeholder="8 min read"
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-[#0A6EBD]"
//                 />
//               </div>

//             </div>
//           </div>

//           {/* Image */}
//           <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

//             <h2 className="text-xl font-black text-[#021B2F]">
//               Blog Image
//             </h2>

//             <p className="mt-1 text-sm text-slate-500">
//               Upload a JPG, PNG or WebP image. Maximum 5MB.
//             </p>

//             <div className="mt-6">

//               {imagePreview ? (
//                 <div className="relative overflow-hidden rounded-2xl">
//                   <img
//                     src={imagePreview}
//                     alt="Blog preview"
//                     className="h-[300px] w-full object-cover"
//                   />

//                   <label className="absolute bottom-4 right-4 cursor-pointer rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#021B2F] shadow-lg">
//                     Change Image

//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleImageChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               ) : (
//                 <label className="flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-[#0A6EBD] hover:bg-[#F0F7FF]">

//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
//                     <ImageIcon className="h-7 w-7 text-[#0A6EBD]" />
//                   </div>

//                   <p className="mt-4 text-sm font-bold text-[#021B2F]">
//                     Click to upload image
//                   </p>

//                   <p className="mt-1 text-xs text-slate-400">
//                     JPG, PNG or WebP · Max 5MB
//                   </p>

//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />

//                 </label>
//               )}

//             </div>
//           </div>

//           {/* Content */}
//           <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

//             <h2 className="text-xl font-black text-[#021B2F]">
//               Blog Content
//             </h2>

//             <p className="mt-1 text-sm text-slate-500">
//               Write the complete article here.
//             </p>

//             <textarea
//               value={content}
//               onChange={(e) =>
//                 setContent(e.target.value)
//               }
//               placeholder="Write your complete blog content..."
//               rows={18}
//               className="mt-6 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
//               required
//             />

//           </div>

//           {/* Options */}
//           <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

//             <h2 className="text-xl font-black text-[#021B2F]">
//               Publishing Options
//             </h2>

//             <div className="mt-6 space-y-4">

//               <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">

//                 <div>
//                   <p className="font-bold text-[#021B2F]">
//                     Featured Blog
//                   </p>

//                   <p className="mt-1 text-xs text-slate-500">
//                     Show this article as the featured article.
//                   </p>
//                 </div>

//                 <input
//                   type="checkbox"
//                   checked={featured}
//                   onChange={(e) =>
//                     setFeatured(e.target.checked)
//                   }
//                   className="h-5 w-5 accent-[#0A6EBD]"
//                 />

//               </label>

//               <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">

//                 <div>
//                   <p className="font-bold text-[#021B2F]">
//                     Publish Now
//                   </p>

//                   <p className="mt-1 text-xs text-slate-500">
//                     Published blogs will appear on the website.
//                   </p>
//                 </div>

//                 <input
//                   type="checkbox"
//                   checked={published}
//                   onChange={(e) =>
//                     setPublished(e.target.checked)
//                   }
//                   className="h-5 w-5 accent-[#0A6EBD]"
//                 />

//               </label>

//             </div>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
//               <p className="text-sm font-semibold text-red-600">
//                 {error}
//               </p>
//             </div>
//           )}

//           {/* Buttons */}
//           <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

//             <Link
//               href="/admin/blogs"
//               className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
//             >
//               Cancel
//             </Link>

//             <button
//               type="submit"
//               disabled={loading}
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A6EBD] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A6EBD]/20 transition hover:bg-[#075a9c] disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                   Publishing...
//                 </>
//               ) : (
//                 <>
//                   <Upload className="h-4 w-4" />
//                   Publish Blog
//                 </>
//               )}
//             </button>

//           </div>

//         </form>
//       </section>
//     </main>
//   );
// }





"use client";

import { FormEvent, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  Loader2,
  Video,
  X,
} from "lucide-react";
import Link from "next/link";

export default function NewBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Biofloc Technology");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [readTime, setReadTime] = useState("5 min read");
  const [content, setContent] = useState("");
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);

  // Main image
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  // Multiple gallery images
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  // Video
  const [video, setVideo] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // MAIN IMAGE
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
      setError("Image size must be less than 5MB.");
      return;
    }

    setError("");
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // MULTIPLE IMAGES
  const handleGalleryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const validImages = files.filter((file) => {
      return (
        file.type.startsWith("image/") &&
        file.size <= 5 * 1024 * 1024
      );
    });

    if (validImages.length !== files.length) {
      setError("Only images under 5MB are allowed.");
      return;
    }

    setError("");

    setGalleryImages((prev) => [
      ...prev,
      ...validImages,
    ]);

    const previews = validImages.map((file) =>
      URL.createObjectURL(file)
    );

    setGalleryPreviews((prev) => [
      ...prev,
      ...previews,
    ]);

    e.target.value = "";
  };

  const removeGalleryImage = (index: number) => {
    URL.revokeObjectURL(galleryPreviews[index]);

    setGalleryImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setGalleryPreviews((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // VIDEO
  const handleVideoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      setError("Please select a video file.");
      return;
    }

  // 50MB limit
if (file.size > 50 * 1024 * 1024) {
  setError("Video size must be less than 50MB.");
  return;
}

    setError("");
    setVideo(file);
    setVideoPreview(URL.createObjectURL(file));

    e.target.value = "";
  };

  const removeVideo = () => {
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview);
    }

    setVideo(null);
    setVideoPreview("");
  };

  // SUBMIT
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
      setError("Please enter a short description.");
      return;
    }

    if (!content.trim()) {
      setError("Please enter the blog content.");
      return;
    }

    if (!image) {
      setError("Please upload a blog image.");
      return;
    }

    try {
      setLoading(true);

      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
      );

      // CREATE SLUG
      const baseSlug = createSlug(title);

      let slug = baseSlug;
      let counter = 2;

      while (true) {
        const {
          data: existingBlog,
          error: slugCheckError,
        } = await supabase
          .from("blogs")
          .select("id")
          .eq("slug", slug)
          .maybeSingle();

        if (slugCheckError) {
          throw slugCheckError;
        }

        if (!existingBlog) {
          break;
        }

        slug = `${baseSlug}-${counter}`;
        counter++;
      }

      // UPLOAD MAIN IMAGE
      const fileExtension =
        image.name.split(".").pop() || "jpg";

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExtension}`;

      const filePath = `blogs/${fileName}`;

      const { error: uploadError } =
        await supabase.storage
          .from("blog-images")
          .upload(filePath, image, {
            cacheControl: "3600",
            upsert: false,
          });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { data: publicUrlData } =
        supabase.storage
          .from("blog-images")
          .getPublicUrl(filePath);

      const imageUrl =
        publicUrlData.publicUrl;

      // CREATE BLOG
      const { data: createdBlog, error: insertError } =
        await supabase
          .from("blogs")
          .insert({
            title: title.trim(),
            slug,
            description: description.trim(),
            category,
            published_date: date,
            read_time: readTime,
            image_url: imageUrl,
            content: content.trim(),
            featured,
            published,
          })
          .select("id")
          .single();

      if (insertError || !createdBlog) {
        await supabase.storage
          .from("blog-images")
          .remove([filePath]);

        throw new Error(
          insertError?.message ||
            "Failed to create blog."
        );
      }

      // MEDIA ARRAY
      const blogMedia: {
        blog_id: string;
        media_type: "image" | "video";
        media_url: string;
        sort_order: number;
      }[] = [];

      // UPLOAD GALLERY IMAGES
      for (
        let i = 0;
        i < galleryImages.length;
        i++
      ) {
        const galleryFile = galleryImages[i];

        const extension =
          galleryFile.name.split(".").pop() || "jpg";

        const galleryFileName =
          `${Date.now()}-${Math.random()
            .toString(36)
            .substring(2)}.${extension}`;

        const galleryPath =
          `blogs/${galleryFileName}`;

        const { error: galleryUploadError } =
          await supabase.storage
            .from("blog-images")
            .upload(
              galleryPath,
              galleryFile,
              {
                cacheControl: "3600",
                upsert: false,
              }
            );

        if (galleryUploadError) {
          throw new Error(
            galleryUploadError.message
          );
        }

        const { data: galleryUrlData } =
          supabase.storage
            .from("blog-images")
            .getPublicUrl(galleryPath);

        blogMedia.push({
          blog_id: createdBlog.id,
          media_type: "image",
          media_url:
            galleryUrlData.publicUrl,
          sort_order: i,
        });
      }

      // UPLOAD VIDEO
      if (video) {
        const extension =
          video.name.split(".").pop() || "mp4";

        const videoFileName =
          `${Date.now()}-${Math.random()
            .toString(36)
            .substring(2)}.${extension}`;

        const videoPath =
          `blogs/${videoFileName}`;

        const { error: videoUploadError } =
          await supabase.storage
            .from("blog-videos")
            .upload(
              videoPath,
              video,
              {
                cacheControl: "3600",
                upsert: false,
              }
            );

        if (videoUploadError) {
          throw new Error(
            videoUploadError.message
          );
        }

        const { data: videoUrlData } =
          supabase.storage
            .from("blog-videos")
            .getPublicUrl(videoPath);

        blogMedia.push({
          blog_id: createdBlog.id,
          media_type: "video",
          media_url:
            videoUrlData.publicUrl,
          sort_order:
            galleryImages.length,
        });
      }

      // SAVE MEDIA
      if (blogMedia.length > 0) {
        const {
          error: mediaInsertError,
        } = await supabase
          .from("blog_media")
          .insert(blogMedia);

        if (mediaInsertError) {
          throw new Error(
            mediaInsertError.message
          );
        }
      }

      // SUCCESS
      router.push("/admin/blogs");
      router.refresh();

    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while publishing the blog."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7FAFC]">

      {/* HEADER */}
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
              Add New Blog
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Create and publish a new ARK AQUATECH article.
            </p>
          </div>

        </div>
      </header>

      {/* FORM */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* BLOG INFORMATION */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Blog Information
            </h2>

            <div className="mt-6 space-y-5">

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
                  placeholder="Enter blog title"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#021B2F]">
                  Short Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  placeholder="Write a short description for the blog..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
                  required
                />
              </div>

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

          {/* MAIN IMAGE */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Blog Image
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Upload a JPG, PNG or WebP image. Maximum 5MB.
            </p>

            <div className="mt-6">

              {imagePreview ? (
                <div className="relative overflow-hidden rounded-2xl">

                  <img
                    src={imagePreview}
                    alt="Blog preview"
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

                <label className="flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-[#0A6EBD] hover:bg-[#F0F7FF]">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <ImageIcon className="h-7 w-7 text-[#0A6EBD]" />
                  </div>

                  <p className="mt-4 text-sm font-bold text-[#021B2F]">
                    Click to upload image
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    JPG, PNG or WebP · Max 5MB
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

          {/* GALLERY IMAGES */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Gallery Images
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Upload multiple images. Each image must be under 5MB.
            </p>

            <div className="mt-6">

              <label className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-[#0A6EBD] hover:bg-[#F0F7FF]">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <ImageIcon className="h-7 w-7 text-[#0A6EBD]" />
                </div>

                <p className="mt-4 text-sm font-bold text-[#021B2F]">
                  Click to upload multiple images
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Select multiple JPG, PNG or WebP images
                </p>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryChange}
                  className="hidden"
                />

              </label>

            </div>

            {galleryPreviews.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

                {galleryPreviews.map(
                  (preview, index) => (
                    <div
                      key={preview}
                      className="relative overflow-hidden rounded-xl"
                    >

                      <img
                        src={preview}
                        alt={`Gallery ${index + 1}`}
                        className="h-32 w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeGalleryImage(index)
                        }
                        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>

                    </div>
                  )
                )}

              </div>
            )}

          </div>

          {/* VIDEO */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Blog Video
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Upload one video. Maximum 100MB.
            </p>

            <div className="mt-6">

              {videoPreview ? (

                <div className="relative overflow-hidden rounded-2xl">

                  <video
                    src={videoPreview}
                    controls
                    className="h-[300px] w-full bg-black object-contain"
                  />

                  <button
                    type="button"
                    onClick={removeVideo}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>

                </div>

              ) : (

                <label className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-[#0A6EBD] hover:bg-[#F0F7FF]">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Video className="h-7 w-7 text-[#0A6EBD]" />
                  </div>

                  <p className="mt-4 text-sm font-bold text-[#021B2F]">
                    Click to upload video
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    MP4, WebM or other video · Max 100MB
                  </p>

                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="hidden"
                  />

                </label>

              )}

            </div>
          </div>

          {/* CONTENT */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-black text-[#021B2F]">
              Blog Content
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Write the complete article here.
            </p>

            <textarea
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              placeholder="Write your complete blog content..."
              rows={18}
              className="mt-6 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 outline-none transition focus:border-[#0A6EBD] focus:bg-white focus:ring-4 focus:ring-[#0A6EBD]/10"
              required
            />

          </div>

          {/* OPTIONS */}
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
                    Show this article as the featured article.
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
                    Publish Now
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Published blogs will appear on the website.
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

          {/* ERROR */}
          {error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <Link
              href="/admin/blogs"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A6EBD] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A6EBD]/20 transition hover:bg-[#075a9c] disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Publish Blog
                </>
              )}

            </button>

          </div>

        </form>

      </section>
    </main>
  );
}