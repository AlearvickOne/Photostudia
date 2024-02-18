import { IContent } from "../../interfaces";
import "./otherZonesContent.scss";

function contentInformation(title: string, text: string): JSX.Element {
  return (
    <div className="content_information">
      <div className="content_info-title" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="content_info-text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

function contentPhotoGrid(photos: { image: string }[]): JSX.Element {
  return (
    <div className="content_photo-grid">
      {photos.map((el, i) => (
        <img key={i} src={el.image} />
      ))}
    </div>
  );
}

export default function OtherZonesContent({
  contentTitle,
  contentText,
  reverseElements,
  photosElements,
}: IContent): JSX.Element {
  const contentInfo = contentInformation(contentTitle, contentText);
  const contentPhoto = contentPhotoGrid(photosElements);

  return (
    <div className="other_zone_content">
      {reverseElements ? contentPhoto : contentInfo}
      {reverseElements ? contentInfo : contentPhoto}
    </div>
  );
}
