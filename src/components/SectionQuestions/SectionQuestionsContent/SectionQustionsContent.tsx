import { useState } from "react";
import classesCss from "./sectionQuestionContent.module.scss";

export const SectionQustionsContent = () => {
  const [isBtnClick, setIsBtnClick] = useState(false);
  
  return (
    <ul className={classesCss.sectionQuestionContentList}>
      <li className={classesCss.sectionQuestionsContentFlex}>
        <h5 className={classesCss.sectionQuestionContentNumber}>01</h5>
        <div className={classesCss.sectionQuestionsContentHead}>
          <h6 className={classesCss.sectionQuestionContentTitle}>В аквазале вода теплая?</h6>
          
        </div>
        <span>
                <button type="button" onClick={() => setIsBtnClick(!isBtnClick)}>
                  <img src="src/assets/iconPlayVideo.png" alt="img" />
                </button>
        </span>

        {isBtnClick && <p>Да, вода теплая, регулируется 37-40 градусов. Кроме этого <br /> установлены теплые полы для вашего комфорта. </p>}
       
      </li>
    </ul>
  );
};
