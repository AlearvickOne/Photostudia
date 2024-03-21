import { useState } from "react";
import classesCss from "./sectionActionListContent.module.scss";

export default function SectionActionListContent(): JSX.Element {
  return (
    <section>
      <div className={classesCss.actionListGrid}>
        <div className="actionListTitle">
          <h4>для фотографов и видеографов</h4>
        </div>
        <div className="actionListContent">
          {ContentText("01")}
          {ContentText("02")}
          {ContentText("03")}
          {ContentText("04")}
        </div>
      </div>
    </section>
  );
}

const contents = [
  {
    head: (
      <>
        <p>
          <strong>100 000₽ за лучшую работу года</strong>
        </p>
        <p>
          Ежемесячно в нашей фотостудии проходит конкурс «лучшее <br /> фото месяца» по итогам которого мы определяем победителей <br /> и награждаем
          их бесплатными часами аренды нашей студии.
        </p>
      </>
    ),
    body: (
      <>
        <p>
          Фотографы, занявшие первые места, попадают в список участников годового <br /> розыгрыша на закрытую вечеринку, где мы разыгрываем депозит в
          нашу студию <br /> на 100 000₽.
        </p>
        <p>ВАЖНО:</p>
        <ol>
          <li>
            Участвовать можно каждый месяц, заявки принимаются до 15 числа каждого <br />
            месяца
          </li>
          <li>
            Можно присылать несколько фото, если на съемке были разные образы/модели <br /> и если съемок было несколько
          </li>
          <li>
            Голосование проходит в Inatagram и в VK, голосовать могут только реальные <br /> подписчики нашего и вашего аккаунтов. Накрутка голосов
            исключена, влечет <br /> за собой дисквалификацию.
          </li>
          <li>
            Ежемесячные призы получают и фотографы и модели, при этом использование <br /> приза не привязывает вас друг к другу.
          </li>
        </ol>

        <p>Файл с фото присылайте в личные сообщения, в Telegram или ссылкой на облако:</p>
      </>
    ),
  },
];

function ContentText(numberHeadText: string): JSX.Element {
  const [isClickButton, setIsClickButton] = useState(false);

  const clickedBtn = () => {
    setIsClickButton(!isClickButton);
  };

  return (
    <>
      <hr />
      <div className={classesCss.actionListContentFlex}>
        <h1 className={classesCss.actionListContentTitle}>{numberHeadText}</h1>
        <div className={classesCss.actionListContentText}>
          <button type="button" className={classesCss.buttonOpen} onClick={() => clickedBtn()} />
          {contents[0].head}
          {isClickButton && <div className={classesCss.openTextAnim}>{contents[0].body}</div>}
        </div>
      </div>
    </>
  );
}
