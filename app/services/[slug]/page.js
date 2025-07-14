import { services } from '@/lib/servicesData';
import ServiceHero from '@/components/ServiceHero';
import LeadExpertCard from '@/components/LeadExpertCard';
import FaqItem from '@/components/FaqItem';
import RelatedServices from '@/components/RelatedServices';
import CallToAction from '@/components/CallToAction';


function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = getService(slug);

  if (!service) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <ServiceHero 
        title={service.title}
        subtitle={service.subtitle}
        imageUrl={service.imageUrl}
      />

      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 space-y-12">
              <section dangerouslySetInnerHTML={{ __html: service.content }} />
              
              <section>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h3>
                <div className="mt-6">
                  {service.faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.q}>
                      {faq.a}
                    </FaqItem>
                  ))}
                </div>
              </section>
            </article>

            <aside className="space-y-8">
              <LeadExpertCard
                name={service.leadExpert.name}
                title={service.leadExpert.title}
                imageUrl={service.leadExpert.imageUrl}
              >
                {service.leadExpert.bio}
              </LeadExpertCard>
            </aside>
          </div>
        </div>
      </div>

      <RelatedServices />
      <CallToAction />
    </>
  );
}