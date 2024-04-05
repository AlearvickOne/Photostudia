import { useState } from "react";
import classesCss from "./sectionServicesContent.module.scss";

interface IContent {
  contentTitle: string;
  contentText: JSX.Element;
  contentPictures: string;
}

function TitleContent(title: string): JSX.Element {
  return (
    <span>
      <h5 className={classesCss.contentTitle}>{title}</h5>
    </span>
  );
}

export default function SectionServicesContent({ contentTitle, contentText, contentPictures }: IContent): JSX.Element {
  const [isClick, setIsClick] = useState<boolean>(false);
  const titleElement = TitleContent(contentTitle);

  return (
    <div className={classesCss.servicesContent} onClick={() => setIsClick(!isClick)}>
      {isClick ? (
        <div className={`${classesCss.activeAnim} ${classesCss.contentInformation}`}>
          {titleElement}
          <div className={classesCss.contentText}>{contentText}</div>
        </div>
      ) : (
        <span className={`${classesCss.activeAnim} ${classesCss.contentPicture}`} style={{ backgroundImage: `url(${contentPictures})` }}>
          {titleElement}
        </span>
      )}
    </div>
  );
}
