import "./sectionAction.scss";
import actionImg1 from "../../assets/sectionAction/action_img_1.svg";
import actionImg2 from "../../assets/sectionAction/action_img_2.svg";
import actionImg3 from "../../assets/sectionAction/action_img_3.svg";
import actionImg4 from "../../assets/sectionAction/action_img_4.svg";
import actionImg5 from "../../assets/sectionAction/action_img_5.svg";
import { Link } from "react-router-dom";

export default function SectionAction(): JSX.Element {
  return (
    <section className="action_section">
      <div className="action_elements-grid">
        <div className="action_el-1">
          <img src={actionImg1} alt="img1" />
        </div>
        <div className="action_el-2">
          <h1>АКЦИЯ</h1>
        </div>
        <div className="action_el-3">
          <img src={actionImg2} alt="img2" />
        </div>
        <div className="action_el-4">
          <h3>
            На первое посещение студии <br /> по промокоду <strong>«ВОДОЛЕЙ»</strong>
          </h3>
        </div>
        <div className="action_el-5">
          <h2>СКИДКА 50%</h2>
          <div className="button_reserv">
            <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
          </div>
        </div>
        <div className="action_el-6">
          <img src={actionImg3} alt="img3" />
          <img src={actionImg4} alt="img4" />
        </div>
        <div className="action_el-8">
          <p>
            Первая и единственная фотостудия <br /> Нижнего Новгорода с аквазалом
          </p>
        </div>
        <div className="action_el-9">
          <img src={actionImg5} alt="img4" />
        </div>
      </div>
    </section>
  );
}
