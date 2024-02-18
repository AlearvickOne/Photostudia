import "./creativeSpaceTitle.scss";

function runTextElement(): JSX.Element {
  return (
    <div className="run_text-element">
      <h1>ПОСМОТРИТЕ РУМ-ТУР</h1>
      <h1>КАК УСТРОЕНА ФОТОСТУДИЯ «ТЕЙЯ»</h1>
    </div>
  );
}

export default function CreativeSpaceTitle(): JSX.Element {
  return (
    <div className="creative_space_title">
      <hr className="hr_black" />
      <h1>ТВОРЧЕСКОЕ ПРОСТРАНСТВО</h1>
      <hr className="hr_black" />
      <div className="creative_space_title-run-text">
        {runTextElement()}
        {runTextElement()}
      </div>
      <hr className="hr_black" />
    </div>
  );
}
