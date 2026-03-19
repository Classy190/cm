import Link from "next/link";
import BlogGraphic from "./BlogGraphic";

const PopularArticle = (props: {
  image: string;
  title: string;
  slug?: string;
}) => {
  const { image, title, slug = "blog-example-with-mdx-file" } = props;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-full">
      <div
        className="wow fadeInUp mb-5 flex w-full items-center border-b border-stroke pb-5 dark:border-dark-3"
        data-wow-delay=".1s"
      >
        <div className="mr-5 overflow-hidden rounded">
          <BlogGraphic slug={slug} size="small" />
        </div>
        <div className="w-full">
          <h4>
            <Link
              href={`/blogs/${slug}`}
              className="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
            >
              {title}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
