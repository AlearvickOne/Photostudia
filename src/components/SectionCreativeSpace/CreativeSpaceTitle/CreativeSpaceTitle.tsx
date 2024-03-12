import classesCss from "./creativeSpaceTitle.module.scss";

function runTextElement(): JSX.Element {
  return (
    <div className={classesCss.runTextElement}>
      <h1>ПОСМОТРИТЕ РУМ-ТУР</h1>
      <h1>КАК УСТРОЕНА ФОТОСТУДИЯ «ТЕЙЯ»</h1>
    </div>
  );
}

export default function CreativeSpaceTitle(): JSX.Element {
  return (
    <div className={classesCss.creativeSpaceTitle}>
      <hr className="hr_black" />
      <h1>ТВОРЧЕСКОЕ ПРОСТРАНСТВО</h1>
      <hr className="hr_black" />
      <div className={classesCss.creativeSpaceTitleRunText}>
        {runTextElement()}
        {runTextElement()}
      </div>
      <hr className="hr_black" />
    </div>
  );
}
