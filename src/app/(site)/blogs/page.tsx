import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - SEO, E-Commerce, SaaS & KI Strategie | Classy Marketing",
  description: "Lerne von unserem Blog: SEO-Strategien, Shopify-Optimierung, KI-Automation, SaaS-Geschäftsmodelle und Landingpage-Conversion. Mit praktischen Guides und Case Studies.",
  keywords: ["Blog", "SEO", "E-Commerce", "Shopify", "SaaS", "KI", "Digital Marketing", "Landingpages"],
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
      <Breadcrumb pageName="Blog Grids" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              Insights zu SEO, E-Commerce & KI
            </h1>
            <p className="text-lg text-body-color dark:text-dark-6 max-w-2xl mx-auto">
              Praktische Guides und strategische Erkenntnisse für Ihr digitales Business
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
