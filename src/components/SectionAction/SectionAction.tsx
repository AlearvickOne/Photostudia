import { Link } from "react-router-dom";
import { actionImg_1, actionImg_2, actionImg_3, actionImg_4, actionImg_5 } from "../imagesAssetsList";
import classesCss from "./sectionAction.module.scss";

export default function SectionAction(): JSX.Element {
  return (
    <section className={classesCss.actionSection}>
      <div className={classesCss.actionElementsGrid}>
        <div className={classesCss.actionEl_1}>
          <img src={actionImg_1} alt="img1" />
        </div>
        <div className={classesCss.actionEl_2}>
          <h1>АКЦИЯ</h1>
        </div>
        <div className={classesCss.actionEl_3}>
          <img src={actionImg_2} alt="img2" />
        </div>
        <div className={classesCss.actionEl_4}>
          <h3>
            На первое посещение студии <br /> по промокоду <strong>«ВОДОЛЕЙ»</strong>
          </h3>
        </div>
        <div className={classesCss.actionEl_5}>
          <h2>СКИДКА 50%</h2>
          <div className={classesCss.buttonReserv}>
            <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
          </div>
        </div>
        <div className={classesCss.actionEl_6}>
          <img src={actionImg_3} alt="img3" />
          <img src={actionImg_4} alt="img4" />
        </div>
        <div className={classesCss.actionEl_7}>
          <p>
            Первая и единственная фотостудия <br /> Нижнего Новгорода с аквазалом
          </p>
        </div>
        <div className={classesCss.actionEl_8}>
          <img src={actionImg_5} alt="img5" />
        </div>
      </div>
    </section>
  );
}
