import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Weber",
    designation: "Geschäftsführer @ Weber-SHK",
    content:
      "Endlich eine Agentur, die sich wirklich Zeit für die Strategie nimmt. Unsere Anfragen über die Website haben sich innerhalb von 3 Monaten verdoppelt. Top Arbeit!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Stefanie Klein",
    designation: "Inhaberin @ Klein Elektro GmbH",
    content:
      "Die Jungs von Classy Marketing verstehen unser Geschäft. SEO-optimiert, klare Struktur, und unsere Conversion-Rate ist seitdem um 35% gestiegen. Wirklich empfehlenswert!",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Thomas Bauer",
    designation: "Owner @ Bauer Sanitär & Installation",
    content:
      "Von der Beratung bis zur Umsetzung: professionell und zuverlässig. Wir arbeiten jetzt seit über einem Jahr zusammen. Unsere Online-Präsenz ist deutlich stärker geworden.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="Vertrauen von über 20+ Kunden"
          paragraph="Handwerksbetriebe, E-Commerce und Dienstleister nutzen Classy Marketing, um online präsent und profitabel zu werden. Lesen Sie, was unsere Kunden über die Zusammenarbeit sagen."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
