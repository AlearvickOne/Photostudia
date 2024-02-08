import ContentLoby from "./ContentLoby.tsx";
import { contents } from "./content.ts";
import "./sectionLoby.scss";

export default function SectionLoby(): JSX.Element {
  return (
    <section>
      <div className="section_title">
        <h1>ЗАЛЫ</h1>
        <h5>
          5 залов в разных стилях, оснащенные новым <br />
          профессиональным оборудованием
        </h5>
      </div>
      <hr />

      {contents.map((el, i) => {
        return (
          <ContentLoby
            key={i}
            contentTitle={el.contentTitle}
            contentText={el.contentText}
            contentPriceText={el.contentPriceText}
            reverseElements={el.isReversed}
            photosElements={el.photos}
          />
        );
      })}
    </section>
  );
}
