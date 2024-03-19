import SectionServicesContent from "./SectionServicesContent/SectionServicesContent";
import SectionServicesTitle from "./SectionServicesTitle/SectionServicesTitle";
import classesCss from "./sectionServices.module.scss";
import { contents } from "./SectionServicesContent/contents";

export default function SectionServices(): JSX.Element {
  return (
    <section className={classesCss.sectionServices}>
      <SectionServicesTitle />
      <div className={classesCss.sectionServicesContentGrid}>
        {contents.map((el, i) => (
          <SectionServicesContent key={i} contentTitle={el.contentTitle} contentText={el.contentText} contentPictures={el.photo} />
        ))}
      </div>
    </section>
  );
}
