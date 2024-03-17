import { useState } from "react";
import classesCss from "./sectionServicesContent.module.scss";

export default function SectionServicesContent(): JSX.Element {
  const title = "Комерческие съемки";

  const [isClick, setIsClick] = useState<boolean>(false);

  const clickEvent = () => {
    setIsClick(!isClick);
  };

  return (
    <div className={classesCss.servicesContent} onClick={() => clickEvent()}>
      {isClick ? (
        <div className={`${classesCss.activeAnim} ${classesCss.contentInformation}`}>
          <h5 className={classesCss.contentTitle}>{title}</h5>
          <div className={classesCss.contentText}>
            <p>
              Маркетплейсы, каталожные, рекламные) на выгодных <br /> условиях от 1000₽/час.
            </p>
            <p>
              В неё входит: идеально белая и чистая циклорама <br />, профессиональное оборудование, фото/видеосъемка <br />
              по запросу.
            </p>
            <p>Пробный час в подарок</p>
          </div>
        </div>
      ) : (
        <span className={`${classesCss.activeAnim} ${classesCss.contentPicture}`}>
          <h5 className={classesCss.contentTitle}>{title}</h5>
        </span>
      )}
    </div>
  );
}
