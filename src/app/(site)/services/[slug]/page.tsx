import ServiceDetail from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/data/servicesData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  return {
    title: `${service.title} | Classy Marketing`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetail {...service} />
    </main>
  );
}