import SectionServicesContent from "./SectionServicesContent/SectionServicesContent";
import SectionServicesTitle from "./SectionServicesTitle/SectionServicesTitle";
import classesCss from "./sectionServices.module.scss";

export default function SectionServices(): JSX.Element {
  return (
    <section className={classesCss.sectionServices}>
      <SectionServicesTitle />
      <div className={classesCss.sectionServicesContentGrid}>
        <SectionServicesContent />
        <SectionServicesContent />
        <SectionServicesContent />
        <SectionServicesContent />
        <SectionServicesContent />
        <SectionServicesContent />
      </div>
    </section>
  );
}
