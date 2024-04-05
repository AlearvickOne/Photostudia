import { IContent } from "../../interfaces";
import classesCss from "./otherZonesContent.module.scss";

function contentInformation(title: JSX.Element, text: JSX.Element): JSX.Element {
  return (
    <div className={classesCss.contentInformation}>
      <div className={classesCss.contentInfoTitle}>{title}</div>
      <div className={classesCss.contentInfoText}>{text}</div>
    </div>
  );
}

function contentPhotoGrid(photos: { image: string }[]): JSX.Element {
  return (
    <div className={classesCss.contentPhotoGrid}>
      {photos.map((el, i) => (
        <img key={i} src={el.image} />
      ))}
    </div>
  );
}

export default function OtherZonesContent({ contentTitle, contentText, reverseElements, photosElements }: IContent): JSX.Element {
  const contentInfo = contentInformation(contentTitle, contentText);
  const contentPhoto = contentPhotoGrid(photosElements);

  return (
    <div className={classesCss.otherZoneContent}>
      {reverseElements ? contentPhoto : contentInfo}
      {reverseElements ? contentInfo : contentPhoto}
    </div>
  );
}
