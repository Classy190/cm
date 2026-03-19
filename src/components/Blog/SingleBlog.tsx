import { Blog } from "@/types/blog";
import Link from "next/link";
import BlogGraphic from "./BlogGraphic";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, excerpt, slug } = blog;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded transition group-hover:scale-105">
        <Link href={`/blogs/${slug}`} aria-label="blog cover" className="block">
          <BlogGraphic slug={slug} size="large" />
        </Link>
      </div>
      <div>
        <h3>
          <Link
            href={`/blogs/${slug}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{excerpt}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
