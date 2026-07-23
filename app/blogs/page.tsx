import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Droplets,
  Fish,
  Waves,
  Factory,
  FlaskConical,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aquaculture Blogs & Insights | ARK AQUATECH",
  description:
    "Explore expert insights from ARK AQUATECH on Biofloc fish farming, RAS aquaculture, hatchery engineering, shrimp farming, water management and sustainable aquaculture technologies.",
  keywords: [
    "aquaculture blogs",
    "biofloc fish farming",
    "RAS aquaculture",
    "shrimp farming",
    "fish farming",
    "aquaculture technology",
    "hatchery engineering",
    "water management",
    "ARK AQUATECH",
  ],
};



const blogs = [
  {
    title: "What is Biofloc Fish Farming? Complete Guide for Modern Farmers",
    slug: "biofloc-fish-farming-complete-guide",
    description:
      "Understand how Biofloc Technology works, its major advantages, infrastructure requirements and how modern farmers can build productive aquaculture systems.",
    category: "Biofloc Technology",
    date: "July 18, 2026",
    readTime: "8 min read",
    image: "/Blog/blog1.jpg",
    icon: Fish,
    featured: true,
  },
  {
    title: "RAS Aquaculture Systems: The Future of Intensive Fish Farming",
    slug: "ras-aquaculture-systems-guide",
    description:
      "Discover how Recirculating Aquaculture Systems help farmers improve water efficiency, production control and year-round fish farming.",
    category: "RAS Systems",
    date: "July 12, 2026",
    readTime: "7 min read",
     image: "/Blog/blog2.jpg",
    icon: Waves,
  },
  {
    title: "How Smart Water Management Improves Aquaculture Productivity",
    slug: "smart-water-management-aquaculture",
    description:
      "Learn why water quality management is critical for commercial aquaculture and how modern engineering systems improve farm performance.",
    category: "Water Management",
    date: "July 5, 2026",
    readTime: "6 min read",
  image: "/Blog/blog3.jpg",
    icon: Droplets,
  },
  {
    title: "Commercial Shrimp Farming: Infrastructure & Setup Guide",
    slug: "commercial-shrimp-farming-setup-guide",
    description:
      "Explore the essential infrastructure, water systems and operational planning required to develop a modern commercial shrimp farm.",
    category: "Shrimp Farming",
    date: "June 28, 2026",
    readTime: "9 min read",
  image: "/Blog/blog4.jpg",
    icon: FlaskConical,
  },
  {
    title: "Modern Fish Hatchery Design: Key Systems You Need",
    slug: "modern-fish-hatchery-design",
    description:
      "A practical overview of hatchery engineering, tank systems, filtration, aeration and water management for efficient aquatic production.",
    category: "Hatchery Engineering",
    date: "June 20, 2026",
    readTime: "7 min read",
   image: "/Blog/blog5.jpg",
    icon: Factory,
  },
  {
    title: "Sustainable Aquaculture: Building Smarter Farms for the Future",
    slug: "sustainable-aquaculture-smart-farming",
    description:
      "See how intelligent infrastructure, resource optimization and sustainable engineering are transforming commercial aquaculture.",
    category: "Sustainability",
    date: "June 14, 2026",
    readTime: "6 min read",
  image: "/Blog/blog6.jpg",
    icon: Leaf,
  },
];

export default function BlogsPage() {
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#031A2B] pb-24 pt-44 sm:pb-28 sm:pt-48">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-[#0A6EBD]/20 blur-[130px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#63C96A]/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 backdrop-blur-xl">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#63C96A]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                Knowledge & Insights
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Aquaculture
              <span className="block bg-gradient-to-r from-[#54B5FF] to-[#63C96A] bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 text-slate-300 sm:text-[17px]">
              Expert insights, technologies and practical knowledge for
              building smarter, sustainable and high-performance aquaculture
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
    

      {/* =========================================================
          FEATURED ARTICLE
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A6EBD]">
              Featured Article
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#021B2F] sm:text-4xl">
              Latest Aquaculture Insights
            </h2>
          </div>

          <article className="group grid overflow-hidden rounded-[35px] border border-slate-100 bg-[#F8FBFE] lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative min-h-[350px] overflow-hidden lg:min-h-[520px]">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#021B2F]/50 via-transparent to-transparent" />

              <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0A6EBD] shadow-xl">
                {featuredBlog.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#0A6EBD]" />
                  {featuredBlog.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#0A6EBD]" />
                  {featuredBlog.readTime}
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.03em] text-[#021B2F] sm:text-4xl">
                {featuredBlog.title}
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-slate-600 sm:text-base">
                {featuredBlog.description}
              </p>

              {/* <Link
                href={`/blogs/${featuredBlog.slug}`}
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(10,110,189,0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                Read Full Article
                <ArrowRight className="h-4 w-4" />
              </Link> */}
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          BLOG GRID
      ========================================================= */}
      <section className="bg-[#F7FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A6EBD]">
                Learn & Explore
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#021B2F] sm:text-4xl">
                Latest Articles
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Stay informed about aquaculture technology, engineering,
              sustainability and modern farming practices.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {otherBlogs.map((blog) => {
              const Icon = blog.icon;

              return (
                <article
                  key={blog.slug}
                  className="group overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]"
                >
                  {/* IMAGE */}
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="relative block h-[240px] overflow-hidden"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#021B2F]/40 to-transparent" />

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0A6EBD] shadow-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-7">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A6EBD]">
                      {blog.category}
                    </span>

                    <Link href={`/blogs/${blog.slug}`}>
                      <h3 className="mt-3 text-xl font-black leading-[1.35] text-[#021B2F] transition-colors duration-300 group-hover:text-[#0A6EBD]">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                      {blog.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {blog.date}
                      </div>

                      <Link
                        href={`/blogs/${blog.slug}`}
                        aria-label={`Read ${blog.title}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F7FF] text-[#0A6EBD] transition-all duration-300 group-hover:bg-[#0A6EBD] group-hover:text-white"
                      >
                       
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] bg-[#031A2B] px-6 py-16 text-center sm:px-12 lg:py-20">
            <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#0A6EBD]/30 blur-[100px]" />

            <div className="absolute -bottom-24 -right-20 h-[300px] w-[300px] rounded-full bg-[#63C96A]/20 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#63C96A]">
                Build Smarter Aquaculture
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Planning Your Next
                <span className="block text-[#54B5FF]">
                  Aquaculture Project?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Talk to ARK AQUATECH about commercial aquaculture
                infrastructure, Biofloc, RAS, hatchery and water management
                solutions.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#021B2F] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}