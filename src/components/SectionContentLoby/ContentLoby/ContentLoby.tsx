import { IContent } from "../../interfaces";
import classesCss from "./contentLoby.module.scss";

import { Link } from "react-router-dom";

function contentInformation(
  contentTitle: string,
  contentText: string,
  contentPriceText: string
): JSX.Element {
  return (
    <div className={classesCss.contentInformation}>
      <div className={classesCss.contentTitle} dangerouslySetInnerHTML={{ __html: contentTitle }} />
      <div className={classesCss.contentText} dangerouslySetInnerHTML={{ __html: contentText }} />

      <div className={classesCss.contentPrice}>
        <h3 className={classesCss.contentPriceTitle}>Стоимость</h3>
        <div
          className={classesCss.contentPriceText}
          dangerouslySetInnerHTML={{ __html: contentPriceText }}
        ></div>
        <div className={classesCss.contentButtonReserv}>
          <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
        </div>
      </div>
    </div>
  );
}

function contentPictures(photosElements: { image: string }[]): JSX.Element {
  return (
    <div className={classesCss.contentPictures}>
      <img className={classesCss.bigImg} src={photosElements[0].image} alt="pic" />
      <div className={classesCss.lowImgs}>
        {photosElements.map((el, i) => {
          if (i !== 0)
            return (
              <div className={classesCss.lowImg}>
                <img key={i} src={el.image} alt="lowImage" />
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default function ContentLoby({
  contentTitle,
  contentText,
  contentPriceText,
  reverseElements,
  photosElements,
}: IContent): JSX.Element {
  const contInf = contentInformation(contentTitle, contentText, contentPriceText!);
  const contPic = contentPictures(photosElements);

  return (
    <>
      <div className={classesCss.contentLoby}>
        {reverseElements ? contPic : contInf}
        {reverseElements ? contInf : contPic}
      </div>

      <hr className={classesCss.contentHr} />
    </>
  );
}
