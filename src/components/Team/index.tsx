import SectionTitle from "../Common/SectionTitle";

const teamData = [
  { id: 1, name: "Max Hoffmann", designation: "CEO & Strategie", initials: "MH", color: "#4A6CF7" },
  { id: 2, name: "Laura Schmidt", designation: "Shopify Spezialistin", initials: "LS", color: "#7B5CF7" },
  { id: 3, name: "Tim Becker", designation: "SEO & Content", initials: "TB", color: "#CF6FF7" },
  { id: 4, name: "Jana Müller", designation: "UX/UI Design", initials: "JM", color: "#F76F6F" },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Unser Team"
            title="Die Menschen hinter Classy Marketing"
            paragraph="Unser erfahrenes Team aus Spezialisten vereint Expertise in Webentwicklung, SEO, Design und Performance-Marketing – alles unter einem Dach."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((member) => (
            <div key={member.id} className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="mb-8 rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-dark-3 border border-stroke dark:border-dark-3 hover:shadow-md transition-shadow">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full text-2xl font-black text-white" style={{ backgroundColor: member.color }}>
                  {member.initials}
                </div>
                <h3 className="mb-1 text-lg font-bold text-dark dark:text-white">{member.name}</h3>
                <p className="text-sm text-body-color dark:text-dark-6">{member.designation}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition dark:bg-dark-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 22 22"><path d="M20.1236 5.91236C19.5004 5.79896 19.1306 5.8974 18.5837 5.95817C19.2564 5.58362 19.5693 5.04828 19.8237 4.39259C19.885 4.23443 19.7 4.09092 19.5406 4.16647C18.8931 4.47345 18.1945 4.70121 17.4599 4.83578C16.7338 4.11617 15.6988 3.6665 14.5539 3.6665C12.3554 3.6665 10.5725 5.32454 10.5725 7.36908C10.5725 7.65933 10.6081 7.94206 10.6752 8.21276C7.51486 8.06551 4.6968 6.71359 2.73896 4.64056C2.27772 4.69063 2.05482 5.15296 1.93056 5.66584C1.93056 7.49014 2.6332 8.62331 3.70132 9.28732C3.22241 9.27293 2.76441 9.17961 2.34234 9.02125C1.92888 9.28686 2.14084 10.8781 3.42915 12.1909C4.09879 12.586 4.40639 12.6311 4.04253 12.6311C3.55967 12.6094 3.38044 12.8067 3.47499 12.9954C4.09879 14.2404 5.44575 15.1096 7.0132 15.1367C5.65077 16.13 3.93418 16.7218 2.06882 16.7218C1.9442 17.1178 3.52016 17.8924 5.31487 18.3332C12.545 18.3332 18.549 12.6914 18.549 7.79843C18.549 7.63827 18.545 7.47811 18.5377 7.31945C19.1321 6.92012 19.6664 6.44528 20.1236 5.91236Z" /></svg>
                  </a>
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition dark:bg-dark-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 22 22"><path d="M18.8065 1.8335H3.16399C2.42474 1.8335 1.83334 2.42489 1.83334 3.16414V18.8362C1.83334 19.5459 2.42474 20.1668 3.16399 20.1668H18.7473C19.4866 20.1668 20.078 19.5754 20.078 18.8362V3.13457C20.1371 2.42489 19.5457 1.8335 18.8065 1.8335ZM7.24464 17.4168H4.55379V8.69371H7.24464V17.4168ZM5.88443 7.48135C4.99733 7.48135 4.31721 6.77167 4.31721 5.91414C4.31721 5.05661 5.0269 4.34694 5.88443 4.34694C6.74196 4.34694 7.45163 5.05661 7.45163 5.91414C7.45163 6.77167 6.8011 7.48135 5.88443 7.48135ZM17.4463 17.4168H14.7554V13.1883C14.7554 12.183 14.7258 10.8523 13.336 10.8523C11.9167 10.8523 11.7097 11.976 11.7097 13.0996V17.4168H9.01884V8.69371H11.6506V9.90608H11.6801C12.0645 9.1964 12.9221 8.48672 14.2527 8.48672C17.0027 8.48672 17.5054 10.2609 17.5054 12.6856V17.4168H17.4463Z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values section */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: "🎯", title: "Datengetrieben", desc: "Jede Entscheidung basiert auf echten Nutzerdaten und A/B-Tests – keine Bauchgefühl-Entscheidungen." },
            { icon: "🤝", title: "Langzeitpartner", desc: "Wir denken in Jahren, nicht in Wochen. Ihre Ergebnisse sind unser Erfolg." },
            { icon: "⚡", title: "Technisch exzellent", desc: "Sauberer Code, schnelle Ladezeiten, SEO-freundliche Architektur – von Anfang an." },
          ].map((v, i) => (
            <div key={i} className="rounded-2xl border border-stroke bg-white p-8 dark:border-dark-3 dark:bg-dark-3">
              <span className="mb-4 block text-4xl">{v.icon}</span>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">{v.title}</h3>
              <p className="text-sm text-body-color dark:text-dark-6 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
