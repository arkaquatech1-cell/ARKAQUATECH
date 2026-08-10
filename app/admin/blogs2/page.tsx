import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default async function AdminBlogsPage() {
  const supabase = await createClient();

  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-red-50 p-6 text-red-600">
            Failed to load blogs: {error.message}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-black text-[#021B2F]">
              Blog Management
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage ARK AQUATECH blog posts
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0A6EBD] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0A6EBD]/20 transition hover:-translate-y-0.5 hover:bg-[#075a9c]"
          >
            <Plus className="h-4 w-4" />
            Add New Blog
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="mb-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Blogs
            </p>

            <p className="mt-2 text-3xl font-black text-[#021B2F]">
              {blogs?.length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Published
            </p>

            <p className="mt-2 text-3xl font-black text-green-600">
              {blogs?.filter((blog) => blog.published).length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Featured
            </p>

            <p className="mt-2 text-3xl font-black text-[#0A6EBD]">
              {blogs?.filter((blog) => blog.featured).length ?? 0}
            </p>
          </div>
        </div>

        {/* Blogs */}
        {!blogs || blogs.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <h2 className="text-2xl font-black text-[#021B2F]">
              No blogs yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Create your first blog post and it will appear here.
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
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Blog
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Category
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="border-b border-slate-100 last:border-0"
                    >
                      {/* Blog */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          {blog.image_url ? (
                            <img
                              src={blog.image_url}
                              alt={blog.title}
                              className="h-16 w-24 rounded-xl object-cover"
                            />
                          ) : (
                            <div className="flex h-16 w-24 items-center justify-center rounded-xl bg-slate-100 text-xs text-slate-400">
                              No Image
                            </div>
                          )}

                          <div className="max-w-md">
                            <h3 className="font-bold text-[#021B2F]">
                              {blog.title}
                            </h3>

                            <p className="mt-1 line-clamp-2 text-xs text-slate-500">
                              {blog.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-[#F0F7FF] px-3 py-1.5 text-xs font-bold text-[#0A6EBD]">
                          {blog.category}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-5 text-sm text-slate-500">
                        {blog.published_date
                          ? new Date(
                              blog.published_date
                            ).toLocaleDateString("en-IN")
                          : "-"}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        {blog.published ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600">
                            <CheckCircle2 className="h-4 w-4" />
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">
                            <XCircle className="h-4 w-4" />
                            Draft
                          </span>
                        )}

                        {blog.featured && (
                          <div className="mt-1 text-xs font-semibold text-[#0A6EBD]">
                            ★ Featured
                          </div>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200"
                            title="View"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>

                          <Link
                            href={`/admin/blogs/edit/${blog.id}`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0A6EBD] transition hover:bg-blue-100"
                            title="Edit"
                          >
                            <Pencil className="h-4 w-4" />
                          </Link>

                          <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}



// import type { Metadata } from "next";
// import Link from "next/link";
// import {
//   ArrowRight,
//   CalendarDays,
//   Clock3,
//   Droplets,
//   Fish,
//   Waves,
//   Factory,
//   FlaskConical,
//   Leaf,
// } from "lucide-react";

// import { createClient } from "@/lib/supabase/server";

// export const metadata: Metadata = {
//   title: "Aquaculture Blogs & Insights | ARK AQUATECH",
//   description:
//     "Explore expert insights from ARK AQUATECH on Biofloc fish farming, RAS aquaculture, hatchery engineering, shrimp farming, water management and sustainable aquaculture technologies.",
//   keywords: [
//     "aquaculture blogs",
//     "biofloc fish farming",
//     "RAS aquaculture",
//     "shrimp farming",
//     "fish farming",
//     "aquaculture technology",
//     "hatchery engineering",
//     "water management",
//     "ARK AQUATECH",
//   ],
// };

// const iconMap: Record<string, any> = {
//   "Biofloc Technology": Fish,
//   "RAS Systems": Waves,
//   "Water Management": Droplets,
//   "Shrimp Farming": FlaskConical,
//   "Hatchery Engineering": Factory,
//   Sustainability: Leaf,
// };

// export default async function BlogsPage() {
//   const supabase = await createClient();

//   const { data: blogs, error } = await supabase
//     .from("blogs")
//     .select(
//       `
//       id,
//       title,
//       slug,
//       description,
//       category,
//       published_date,
//       read_time,
//       image_url,
//       content,
//       featured,
//       published
//       `
//     )
//     .eq("published", true)
//     .order("featured", { ascending: false })
//     .order("published_date", { ascending: false });

//   if (error) {
//     console.error("SUPABASE BLOG ERROR:", error);
//   }

//   const blogList = blogs ?? [];

//   const featuredBlog =
//     blogList.find((blog) => blog.featured === true) ??
//     blogList[0];

//   const otherBlogs = featuredBlog
//     ? blogList.filter((blog) => blog.id !== featuredBlog.id)
//     : [];

//   const formatDate = (date: string) => {
//     if (!date) return "";

//     return new Date(date).toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-white">

//       {/* =========================================================
//           HERO
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#031A2B] pb-24 pt-44 sm:pb-28 sm:pt-48">

//         <div className="absolute inset-0">

//           <div className="absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-[#0A6EBD]/20 blur-[130px]" />

//           <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#63C96A]/10 blur-[130px]" />

//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)",
//               backgroundSize: "70px 70px",
//             }}
//           />

//         </div>

//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mx-auto max-w-4xl text-center">

//             <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 backdrop-blur-xl">

//               <span className="mr-2 h-2 w-2 rounded-full bg-[#63C96A]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
//                 Knowledge & Insights
//               </span>

//             </div>

//             <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">

//               Aquaculture

//               <span className="block bg-gradient-to-r from-[#54B5FF] to-[#63C96A] bg-clip-text text-transparent">
//                 Knowledge Hub
//               </span>

//             </h1>

//             <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 text-slate-300 sm:text-[17px]">
//               Expert insights, technologies and practical knowledge for
//               building smarter, sustainable and high-performance aquaculture
//               operations.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           FEATURED ARTICLE
//       ========================================================= */}
//       {featuredBlog && (
//         <section className="py-20 sm:py-24">

//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//             <div className="mb-10">

//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A6EBD]">
//                 Featured Article
//               </span>

//               <h2 className="mt-3 text-3xl font-black tracking-tight text-[#021B2F] sm:text-4xl">
//                 Latest Aquaculture Insights
//               </h2>

//             </div>

//             <article className="group grid overflow-hidden rounded-[35px] border border-slate-100 bg-[#F8FBFE] lg:grid-cols-2">

//               {/* IMAGE */}
//               <div className="relative min-h-[350px] overflow-hidden lg:min-h-[520px]">

//                 {featuredBlog.image_url ? (
//                   <img
//                     src={featuredBlog.image_url}
//                     alt={featuredBlog.title}
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
//                     <Fish className="h-16 w-16 text-[#0A6EBD]" />
//                   </div>
//                 )}

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#021B2F]/50 via-transparent to-transparent" />

//                 <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0A6EBD] shadow-xl">
//                   {featuredBlog.category}
//                 </span>

//               </div>

//               {/* CONTENT */}
//               <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

//                 <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">

//                   <span className="flex items-center gap-2">
//                     <CalendarDays className="h-4 w-4 text-[#0A6EBD]" />

//                     {formatDate(featuredBlog.published_date)}
//                   </span>

//                   {featuredBlog.read_time && (
//                     <span className="flex items-center gap-2">
//                       <Clock3 className="h-4 w-4 text-[#0A6EBD]" />

//                       {featuredBlog.read_time}
//                     </span>
//                   )}

//                 </div>

//                 <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.03em] text-[#021B2F] sm:text-4xl">
//                   {featuredBlog.title}
//                 </h2>

//                 <p className="mt-6 text-[15px] leading-8 text-slate-600 sm:text-base">
//                   {featuredBlog.description}
//                 </p>

//                 <Link
//                   href={`/blogs/${featuredBlog.slug}`}
//                   className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(10,110,189,0.2)] transition-all duration-300 hover:-translate-y-1"
//                 >
//                   Read Full Article

//                   <ArrowRight className="h-4 w-4" />
//                 </Link>

//               </div>

//             </article>

//           </div>

//         </section>
//       )}

//       {/* =========================================================
//           BLOG GRID
//       ========================================================= */}
//       <section className="bg-[#F7FAFC] py-20 sm:py-24">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

//             <div>

//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A6EBD]">
//                 Learn & Explore
//               </span>

//               <h2 className="mt-3 text-3xl font-black tracking-tight text-[#021B2F] sm:text-4xl">
//                 Latest Articles
//               </h2>

//             </div>

//             <p className="max-w-md text-sm leading-7 text-slate-500">
//               Stay informed about aquaculture technology, engineering,
//               sustainability and modern farming practices.
//             </p>

//           </div>

//           {otherBlogs.length === 0 ? (

//             <div className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-20 text-center">

//               <Fish className="mx-auto h-12 w-12 text-[#0A6EBD]" />

//               <h3 className="mt-5 text-xl font-black text-[#021B2F]">
//                 No more articles yet
//               </h3>

//               <p className="mt-2 text-sm text-slate-500">
//                 New aquaculture articles will appear here.
//               </p>

//             </div>

//           ) : (

//             <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

//               {otherBlogs.map((blog) => {

//                 const Icon =
//                   iconMap[blog.category] ?? Fish;

//                 return (

//                   <article
//                     key={blog.id}
//                     className="group overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]"
//                   >

//                     {/* IMAGE */}
//                     <Link
//                       href={`/blogs/${blog.slug}`}
//                       className="relative block h-[240px] overflow-hidden"
//                     >

//                       {blog.image_url ? (
//                         <img
//                           src={blog.image_url}
//                           alt={blog.title}
//                           className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         />
//                       ) : (
//                         <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
//                           <Icon className="h-12 w-12 text-[#0A6EBD]" />
//                         </div>
//                       )}

//                       <div className="absolute inset-0 bg-gradient-to-t from-[#021B2F]/40 to-transparent" />

//                       <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0A6EBD] shadow-xl">

//                         <Icon className="h-5 w-5" />

//                       </div>

//                     </Link>

//                     {/* CONTENT */}
//                     <div className="p-7">

//                       <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A6EBD]">
//                         {blog.category}
//                       </span>

//                       <Link href={`/blogs/${blog.slug}`}>

//                         <h3 className="mt-3 text-xl font-black leading-[1.35] text-[#021B2F] transition-colors duration-300 group-hover:text-[#0A6EBD]">
//                           {blog.title}
//                         </h3>

//                       </Link>

//                       <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
//                         {blog.description}
//                       </p>

//                       <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

//                         <div className="flex items-center gap-2 text-xs text-slate-500">

//                           <CalendarDays className="h-3.5 w-3.5" />

//                           {formatDate(blog.published_date)}

//                         </div>

//                         <Link
//                           href={`/blogs/${blog.slug}`}
//                           aria-label={`Read ${blog.title}`}
//                           className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F7FF] text-[#0A6EBD] transition-all duration-300 group-hover:bg-[#0A6EBD] group-hover:text-white"
//                         >

//                           <ArrowRight className="h-4 w-4" />

//                         </Link>

//                       </div>

//                     </div>

//                   </article>

//                 );

//               })}

//             </div>

//           )}

//         </div>

//       </section>

//       {/* =========================================================
//           CTA
//       ========================================================= */}
//       <section className="py-20 sm:py-24">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="relative overflow-hidden rounded-[40px] bg-[#031A2B] px-6 py-16 text-center sm:px-12 lg:py-20">

//             <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#0A6EBD]/30 blur-[100px]" />

//             <div className="absolute -bottom-24 -right-20 h-[300px] w-[300px] rounded-full bg-[#63C96A]/20 blur-[100px]" />

//             <div className="relative mx-auto max-w-3xl">

//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#63C96A]">
//                 Build Smarter Aquaculture
//               </span>

//               <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">

//                 Planning Your Next

//                 <span className="block text-[#54B5FF]">
//                   Aquaculture Project?
//                 </span>

//               </h2>

//               <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
//                 Talk to ARK AQUATECH about commercial aquaculture
//                 infrastructure, Biofloc, RAS, hatchery and water management
//                 solutions.
//               </p>

//               <Link
//                 href="/contact"
//                 className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#021B2F] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//               >
//                 Discuss Your Project

//                 <ArrowRight className="h-4 w-4" />
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }