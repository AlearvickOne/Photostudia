import "./sectionAction.scss";
import actionImg1 from "../../assets/sectionAction/action_img_1.svg";
import actionImg2 from "../../assets/sectionAction/action_img_2.svg";

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
        <div className="action_el-4"></div>
        <div className="action_el-5">
          <h3>
            На первое посещение студии <br /> по промокоду <strong>«ВОДОЛЕЙ»</strong>
          </h3>
        </div>
        <div className="action_el-6">
          <h2>СКИДКА 50%</h2>
        </div>
      </div>
    </section>
  );
}
