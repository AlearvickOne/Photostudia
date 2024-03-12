import classesCss from "./sectionAction.module.scss";
import actionImg1 from "../../assets/sectionAction/action_img_1.svg";
import actionImg2 from "../../assets/sectionAction/action_img_2.svg";
import actionImg3 from "../../assets/sectionAction/action_img_3.svg";
import actionImg4 from "../../assets/sectionAction/action_img_4.svg";
import actionImg5 from "../../assets/sectionAction/action_img_5.svg";
import { Link } from "react-router-dom";

export default function SectionAction(): JSX.Element {
  return (
    <section className={classesCss.actionSection}>
      <div className={classesCss.actionElementsGrid}>
        <div className={classesCss.actionEl_1}>
          <img src={actionImg1} alt="img1" />
        </div>
        <div className={classesCss.actionEl_2}>
          <h1>АКЦИЯ</h1>
        </div>
        <div className={classesCss.actionEl_3}>
          <img src={actionImg2} alt="img2" />
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
          <img src={actionImg3} alt="img3" />
          <img src={actionImg4} alt="img4" />
        </div>
        <div className={classesCss.actionEl_7}>
          <p>
            Первая и единственная фотостудия <br /> Нижнего Новгорода с аквазалом
          </p>
        </div>
        <div className={classesCss.actionEl_8}>
          <img src={actionImg5} alt="img4" />
        </div>
      </div>
    </section>
  );
}
