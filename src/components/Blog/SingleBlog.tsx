import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";
import BlogGraphic from "./BlogGraphic";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, excerpt, date, slug } = blog;

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded transition group-hover:scale-105">
        <Link href={`/blogs/${slug}`} aria-label="blog cover" className="block">
          <BlogGraphic slug={slug} size="large" />
        </Link>
      </div>
      <div>
        <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
          {format(new Date(date), "dd MMM yyyy")}
        </span>
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
