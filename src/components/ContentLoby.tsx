import "./contentLoby.scss";
import imgPictures from "../assets/contents/image_1.svg";
import { Link } from "react-router-dom";

interface IContent {
  contentTitle: string;
  contentText: string;
  contentPriceText: string;
  reverseElements: boolean;
}

function contentInformation(
  contentTitle: string,
  contentText: string,
  contentPriceText: string
): JSX.Element {
  return (
    <div className="content_information">
      <h2 className="content_title" dangerouslySetInnerHTML={{ __html: contentTitle }}></h2>
      <div className="content_text" dangerouslySetInnerHTML={{ __html: contentText }}></div>

      <div className="content_price">
        <h3 className="content_price-title">Стоимость</h3>
        <div
          className="content_price-text"
          dangerouslySetInnerHTML={{ __html: contentPriceText }}
        ></div>
      </div>

      <div className="header_button_reserv">
        <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
      </div>
    </div>
  );
}

function contentPictures(): JSX.Element {
  return (
    <div className="content_pictures">
      <img className="big_img" src={imgPictures} alt="" />
      <div className="low_imgs">
        <img className="low_img" src={imgPictures} alt="" />
        <img className="low_img" src={imgPictures} alt="" />
        <img className="low_img" src={imgPictures} alt="" />
        <img className="low_img" src={imgPictures} alt="" />
        <img className="low_img" src={imgPictures} alt="" />
      </div>
    </div>
  );
}

export default function ContentLoby({
  contentTitle,
  contentText,
  contentPriceText,
  reverseElements,
}: IContent): JSX.Element {
  const contInf = contentInformation(contentTitle, contentText, contentPriceText);
  const contPic = contentPictures();

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
