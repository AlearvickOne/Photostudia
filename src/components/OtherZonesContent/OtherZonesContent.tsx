import "./otherZonesContent.scss";

import image_1 from "../../assets/otherZonesContents/makeUpRoom/image_1.svg";
import image_2 from "../../assets/otherZonesContents/makeUpRoom/image_2.svg";

interface IContent {
  isReversed: boolean;
}

function contentInformation(): JSX.Element {
  return (
    <div className="content_information">
      <h2>ГРИМЕРНАЯ</h2>
      <p>
        Два рабочих места со всем необходимым. Есть отпариватель, <br />
        утюг и рейлы для одежды.
      </p>
    </div>
  );
}

function contentPhotoGrid(): JSX.Element {
  return (
    <div className="content_photo-grid">
      <img src={image_1} alt="img1" />
      <img src={image_2} alt="img2" />
    </div>
  );
}

export default function OtherZonesContent({ isReversed }: IContent): JSX.Element {
  return (
    <section className="other_zones_content-section">
      {isReversed ? contentPhotoGrid() : contentInformation()}
      {isReversed ? contentInformation() : contentPhotoGrid()}
    </section>
  );
}
