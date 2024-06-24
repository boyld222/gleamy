import { draftMode } from "next/headers";

import { getAboutContent, getServicesContent, getTitleHero } from "@/lib/api";
import Loader from "./components/Layout/Loader";
import HeroSection from "./components/Section/Hero/HeroSection";
import AboutSection from "./components/Section/About/AboutSection";
import ServicesSection from "./components/Section/Services/Services";

// function HeroPost({
//   title,
//   coverImage,
//   date,
//   excerpt,
//   author,
//   slug,
// }: {
//   title: string;
//   coverImage: any;
//   date: string;
//   excerpt: string;
//   author: any;
//   slug: string;
// }) {
//   return (
//     <section>
//       <div className="mb-8 md:mb-16">
//         <CoverImage title={title} slug={slug} url={coverImage.url} />
//       </div>
//       <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
//         <div>
//           <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
//             <Link href={`/posts/${slug}`} className="hover:underline">
//               {title}
//             </Link>
//           </h3>
//         </div>
//         <div>
//           <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
//           {author && <Avatar name={author.name} picture={author.picture} />}
//         </div>
//       </div>
//     </section>
//   );
// }

export default async function Page() {
  const { isEnabled } = draftMode();
  const heroContent = await getTitleHero();
  const aboutContent = await getAboutContent();
  const servicesContent = await getServicesContent();
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <div className="w-full bg-black overflow-hidden">
      <Loader />
      <HeroSection title={heroContent.title} />
      <AboutSection section={aboutContent} />
      <ServicesSection section={servicesContent} />

      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}
