import { useState } from "react";
import classesCss from "./sectionActionListContent.module.scss";
import QRCode from "qrcode.react";

const contents = [
  {
    id: "01",
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
    QRVisible: QRCodeGenerator(),
  },
  {
    id: "02",
    head: (
      <>
        <p>
          <strong>Система депозитов</strong>
        </p>
        <p>
          Для постоянных фотографов и видеографов мы предоставляем <br /> особые условия на аренду и услуги нашей фотостудии.
        </p>
      </>
    ),
    body: (
      <>
        <p>
          Депозит на 10 000₽ предоставляет скидку 10% на весь общий прайс и скидку <br /> 5% на пакеты часов.
        </p>
        <p>
          Депозит на 20 000₽ предоставляет скидку 20% на весь общий прайс и скидку <br /> 7% на пакеты часов.
        </p>
        <p>
          Депозит на 30 000₽ предоставляет скидку 30% на весь общий прайс и скидку <br /> 10% на пакеты часов.
        </p>
        <p>НАПРИМЕР:</p>
        <p>1 час аренды зала «Дождь» по прайсу 3000₽ - 30% = 2100₽</p>
        <p>ИЛИ</p>
        <p>
          Пакет на 3 часа аренды зала «Дождь» по прайсу 6000₽ - 10% = 5400₽ <br /> (1800₽/час вместо 2000₽/час)
        </p>
        <p>
          *Если студию оплачивает ваш клиент, то мы просто компенсируем <br /> обратно в депозит сумму скидки.
        </p>
        <p>*Депозит действует 3 месяца с первой съемки.</p>
      </>
    ),
    QRVisible: null,
  },
  {
    id: "03",
    head: (
      <>
        <p>
          <strong>Кэшбэк</strong>
        </p>
        <p>
          Система лояльности для активных фотографлов и видеографов. <br /> 20% кэшбек «активным» за любую съемку от 5 броней в месяц.
        </p>
      </>
    ),
    body: (
      <>
        <p>
          *Если было от 5 съемок за текущий месяц, зачисление кэшбэка <br /> происхдит по итогам месяца, каждого 1 числа нового месяца. <br />
          Использовать кэшбэк можно для любой последующей съемки.
        </p>
      </>
    ),
    QRVisible: null,
  },
  {
    id: "04",
    head: (
      <>
        <p>
          <strong>Кэшбэк «Коммерция»</strong>
        </p>
        <p>
          Система лояльности для активных фотографлов и видеографов, <br /> сотрудничающих с маркетплейсами и любыми коммерческими <br />
          организациями.
        </p>
      </>
    ),
    body: (
      <>
        <p>10% кэшбэк «коммерция».</p>
        <p>Подробности уточняйте у администратора.</p>
      </>
    ),
    QRVisible: null,
  },
];

function QRCodeGenerator(): JSX.Element {
  const link = "www.studiaTeya.com";

  return (
    <div className={classesCss.QRCode}>
      <QRCode size={180} value={link} />
    </div>
  );
}

type QRJsx = JSX.Element | null;

function ContentText(idContent: string, headContent: JSX.Element, bodyContent: JSX.Element, QRVisible: QRJsx): JSX.Element {
  const [isClickButton, setIsClickButton] = useState(false);

  const clickedBtn = () => {
    setIsClickButton(!isClickButton);
  };

  return (
    <>
      <hr />
      <div className={classesCss.actionListContentFlex}>
        <h1 className={classesCss.actionListContentTitle}>{idContent}</h1>
        <div className={classesCss.actionListContentText}>
          <button type="button" className={classesCss.buttonOpen} onClick={() => clickedBtn()} />
          <div className={classesCss.actionListContentTextHead}>{headContent}</div>
          {isClickButton && (
            <div className={classesCss.openTextAnim}>
              {bodyContent} {QRVisible !== null && QRVisible}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function SectionActionListContent(): JSX.Element {
  return (
    <section>
      <div className={classesCss.actionListGrid}>
        <div className={classesCss.actionListTitle}>
          <h4>
            ДЛЯ ФОТОГРАФОВ <br /> И ВИДЕОГРАФОВ
          </h4>
        </div>
        <div className={classesCss.actionListContent}>{contents.map((el) => ContentText(el.id, el.head, el.body, el.QRVisible))}</div>
      </div>
    </section>
  );
}
