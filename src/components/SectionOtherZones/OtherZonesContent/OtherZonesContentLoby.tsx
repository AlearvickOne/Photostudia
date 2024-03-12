import OtherZonesContent from "./OtherZonesContent";
import { otherContents } from "./otherContents";

import classesCss from "./otherZonesContentLoby.module.scss";

export default function OtherZonesContentLoby(): JSX.Element {
  return (
    <section className={classesCss.otherZonesContentSection}>
      {otherContents.map((el, i) => (
        <OtherZonesContent
          key={i}
          contentTitle={el.title}
          contentText={el.textContent}
          reverseElements={el.reverseElements}
          photosElements={el.photos}
        />
      ))}

      <hr className="hr_black" />
    </section>
  );
}
