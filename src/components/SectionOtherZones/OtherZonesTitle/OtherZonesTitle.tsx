import classesCss from "./otherZonesTitle.module.scss";

export default function OtherZonesTitle(): JSX.Element {
  return (
    <div className={classesCss.otherZoneTitlesContainer}>
      <section className={classesCss.otherZoneTitles}>
        <div className="other_zone-title_big">
          <h1>ДРУГИЕ ЗОНЫ</h1>
        </div>
        <div className="other_zone-title_low">
          <h5>
            Кроме залов мы оборудовали <br /> студию другими необходимыми <br /> зонами для вашего
            комфорта
          </h5>
        </div>
      </section>
    </div>
  );
}
