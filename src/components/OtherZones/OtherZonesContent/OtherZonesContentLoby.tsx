import OtherZonesContent from "./OtherZonesContent";
import { otherContents } from "./otherContents";

import "./otherZonesContentLoby.scss";

export default function OtherZonesContentLoby(): JSX.Element {
  return (
    <section className="other_zones_content-section">
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
