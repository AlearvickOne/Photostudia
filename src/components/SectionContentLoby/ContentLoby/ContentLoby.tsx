import { IContent } from "../../interfaces";
import classesCss from "./contentLoby.module.scss";
import animationsCss from "../../_animations/animatons.module.scss";
import { Link } from "react-router-dom";

function ContentInformation(contentTitle: JSX.Element, contentText: JSX.Element, contentPriceText: JSX.Element, isReversed: boolean): JSX.Element {
  return (
    <div className={`${classesCss.contentInformation} ${isReversed ? animationsCss.AppearingWithLeft : animationsCss.AppearingWithRight}`}>
      <div className={classesCss.contentTitle}>{contentTitle}</div>
      <div className={classesCss.contentText}>{contentText}</div>

      <div className={classesCss.contentPrice}>
        <h3 className={classesCss.contentPriceTitle}>Стоимость</h3>
        <div className={classesCss.contentPriceText}>{contentPriceText}</div>
        <div className={classesCss.contentButtonReserv}>
          <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
        </div>
      </div>
    </div>
  );
}

function ContentPictures(photosElements: { image: string }[], isReversed: boolean): JSX.Element {
  return (
    <div className={`${classesCss.contentPictures} ${isReversed ? animationsCss.AppearingWithRight : animationsCss.AppearingWithLeft}`}>
      <img className={classesCss.bigImg} src={photosElements[0].image} alt="pic" />
      <div className={classesCss.lowImgs}>
        {photosElements.map((el, i) => {
          if (i !== 0)
            return (
              <div key={i} className={classesCss.lowImg}>
                <img src={el.image} alt="lowImage" />
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default function ContentLoby({ contentTitle, contentText, contentPriceText, reverseElements, photosElements }: IContent): JSX.Element {
  const rev = reverseElements;

  const contInf = ContentInformation(contentTitle, contentText, contentPriceText!, rev);
  const contPic = ContentPictures(photosElements, rev);

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
