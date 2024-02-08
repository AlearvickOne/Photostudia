import "./contentLoby.scss";

import { Link } from "react-router-dom";

interface IContent {
  contentTitle: string;
  contentText: string;
  contentPriceText: string;
  reverseElements: boolean;
  photosElements: { image: string }[];
}

function contentInformation(
  contentTitle: string,
  contentText: string,
  contentPriceText: string
): JSX.Element {
  return (
    <div className="content_information">
      <div className="content_title" dangerouslySetInnerHTML={{ __html: contentTitle }}></div>
      <div className="content_text" dangerouslySetInnerHTML={{ __html: contentText }}></div>

      <div className="content_price">
        <h3 className="content_price-title">Стоимость</h3>
        <div
          className="content_price-text"
          dangerouslySetInnerHTML={{ __html: contentPriceText }}
        ></div>
        <div className="content_button_reserv">
          <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
        </div>
      </div>
    </div>
  );
}

function contentPictures(photosElements: { image: string }[]): JSX.Element {
  return (
    <div className="content_pictures">
      <img className="big_img" src={photosElements[0].image} alt="pic" />
      <div className="low_imgs">
        {photosElements.map((el, i) => {
          if (i !== 0) return <img key={i} className="low_img" src={el.image} alt="" />;
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
  const contInf = contentInformation(contentTitle, contentText, contentPriceText);
  const contPic = contentPictures(photosElements);

  return (
    <>
      <div className="content_loby">
        {reverseElements ? contPic : contInf}
        {reverseElements ? contInf : contPic}
      </div>

      <hr />
    </>
  );
}
