import { IContent } from "../../interfaces";
import classesCss from "./contentLoby.module.scss";
import animationsCss from "../../_animations/animatons.module.scss";
import { Link } from "react-router-dom";

function contentInformation(contentTitle: string, contentText: string, contentPriceText: string, rev: boolean): JSX.Element {
  return (
    <div className={`${classesCss.contentInformation} ${rev ? animationsCss.AppearingWithLeft : animationsCss.AppearingWithRight}`}>
      <div className={classesCss.contentTitle} dangerouslySetInnerHTML={{ __html: contentTitle }} />
      <div className={classesCss.contentText} dangerouslySetInnerHTML={{ __html: contentText }} />

      <div className={classesCss.contentPrice}>
        <h3 className={classesCss.contentPriceTitle}>Стоимость</h3>
        <div className={classesCss.contentPriceText} dangerouslySetInnerHTML={{ __html: contentPriceText }}></div>
        <div className={classesCss.contentButtonReserv}>
          <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
        </div>
      </div>
    </div>
  );
}

function contentPictures(photosElements: { image: string }[], rev: boolean): JSX.Element {
  return (
    <div className={`${classesCss.contentPictures} ${rev ? animationsCss.AppearingWithRight : animationsCss.AppearingWithLeft}`}>
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
  const contInf = contentInformation(contentTitle, contentText, contentPriceText!, rev);
  const contPic = contentPictures(photosElements, rev);

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
