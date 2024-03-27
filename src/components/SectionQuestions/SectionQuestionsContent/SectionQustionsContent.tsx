import classesCss from "./sectionQuestionContent.module.scss";

export const SectionQustionsContent = () => {
  return (
    <ul className={classesCss.sectionQuestionContentList}>
      <li className={classesCss.sectionQuestionsContentFlex}>
        <h5>01</h5>
        <h6>В аквазале вода теплая?</h6>
        <img src="#!" alt="img" />
      </li>
    </ul>
  );
};
