import { useState } from "react";
import classesCss from "./sectionQuestionContent.module.scss";

const contents = [
  {
    id: "01",
    head: "В аквазале вода теплая?",
    body: (
      <p>
        Да, вода теплая, регулируется 37-40 градусов. Кроме этого <br /> установлены теплые полы для вашего комфорта.
      </p>
    ),
  },
  {
    id: "02",
    head: "У вас есть фен? Он платный?",
    body: (
      <p>
        Да, после съемки мы предоставляем вам фен и полотенце бесплатно. <br />
        Дополнительное полотенце +150₽. <br />
        Так же вы можете бесплатно принять душ при необходимости, воспользоваться <br />
        средствами для снятия макияжа и пакетами для мокрой одежды.
      </p>
    ),
  },
  {
    id: "03",
    head: (
      <>
        Вы предоставляете полотенца? <br /> Пакеты для мокрой одежды есть?
      </>
    ),
    body: (
      <p>
        Да, после съемки мы предоставляем вам фен и полотенце бесплатно. <br />
        Дополнительное полотенце +150₽ Так же вы можете бесплатно принять <br />
        душ при необходимости, воспользоваться средствами для снятия <br />
        макияжа и пакетами для мокрой одежды.
      </p>
    ),
  },
  {
    id: "04",
    head: (
      <>
        Сколько стоит гримерка? <br /> Можно забронировать гримерку?
      </>
    ),
    body: (
      <p>
        Гримерка предоставляется бесплатно за 30 минут до начала съемки. <br />
        Свыше 30 минут, рассчет 250₽/час за место. У нас 2 места в гримерной <br />
        зоне. Отпариватель и утюг предоставляется бесплатно.
      </p>
    ),
  },
  {
    id: "05",
    head: "Есть ли в студии отпариватель?",
    body: (
      <p>
        Да, отпариватель есть и предоставляется бесплатно. Так же есть утюг и рейлы <br />
        для вашего гардероба.
      </p>
    ),
  },
  {
    id: "06",
    head: "Есть ли какие-то особые правила?",
    body: (
      <>
        <p>
          Циклорама: посещается строго с заклеенной скотчем подошвой. Танцевать на каблуках <br /> в циклораме строго запрещено.
        </p>
        <p>
          Ванна: Красители в ванну добавляются строго по согласованию. Вставать в ванну на <br /> каблуках строго запрещено. Специфический реквизит в
          виде сухих смесей и красящих <br /> жидкостей строго по согласованию. Оборудование под воду ставить запрещается.
        </p>
        <p>Любое животное на съемке только через согласование.</p>
        <p>Если вам нужна помощь, позовите администратора. У нас очень отзывчивый персонал.</p>
      </>
    ),
  },
  {
    id: "07",
    head: "Есть ли скидки?",
    body: (
      <>
        <p>
          Скидки предоставляются при бронировании зала от 2-х часов и больше. Согласно <br /> актуальному прайсу.
        </p>
        <p>Так же есть спец условия для коммерческих съемок организаций и маркетплейсов.</p>
      </>
    ),
  },
  {
    id: "08",
    head: "На пол часа сдаете зал?",
    body: (
      <>
        <p>Зал сдается от 1 часа. Либо вы бронируете два зала по пол часа.</p>
        <p>
          Так же мы можем сдать зал на 30 минут если вы бронируете другой <br /> зал на 1 час и в общей сумме у вас выходит 1,5 часа. Другие случаи
          <br />
          обсуждаются индивидуально.
        </p>
      </>
    ),
  },
  {
    id: "09",
    head: "Сколько человек может находиться в зале?",
    body: <p>Свыше 10 человек, согласование.</p>,
  },
  {
    id: "10",
    head: (
      <>
        Можно ли танцевать в аквазале? <br /> Можно в зал дождь на каблуках?
      </>
    ),
    body: (
      <>
        <p>Да, на каблуках можно. Танцевать можно.</p>
        <p>
          Во время танцев происходит более агрессивное использование локации. В целях <br /> вашей же безопасности, администраторы вправе остановить
          съемку в любой момент <br /> для технического обслуживания зала. На это в среднем уходит 5-10 минут.
        </p>
        <p>
          Танцы от 10 человек: сдаем не менее чем на 2 часа, стоимость 5000₽ <br />
          Танцы от 15 человек минимум на 3 часа, стоимость 6000₽ <br />
          Танцевальным группам 1-9 человек возможно арендовать зал на 1-1,5 часа.
        </p>
        <p>
          Так же организатор проведения съемок подписывает доп соглашение об <br /> материальной ответственности за всех участников съемки.
        </p>
      </>
    ),
  },
  {
    id: "11",
    head: "Сдаете зал дождь без воды?",
    body: <p>Да, стоимость зала без воды 2000₽/час, от 2-х часов и больше 1500₽/час.</p>,
  },
  {
    id: "12",
    head: (
      <>
        Сколько стоит световое оборудование? <br />
        Сколько источников света предоставляете?
      </>
    ),
    body: (
      <>
        <p>
          Свет входит в стоимость аренды. Заранее вы можете забронировать нужное <br /> количество источников света и фильтры, насадки и тд.
        </p>
        <p>
          Дополнительные платные услуги: Гримерка пол часа бесплатно, дальше 500₽/час. <br />
          Дым, лазеры, цифровой проектор, жидкие зеркала 500₽/час. <br />
          Мотоцикл под воду +1000₽. <br />
          Ванна с водой +1000₽. <br />
          Гардероб по прайсу.
        </p>
      </>
    ),
  },
  {
    id: "13",
    head: "Сколько человек вмещает циклорама? ",
    body: (
      <p>
        зал «Циклорама» 40 кВ.м. Циклорама на три плоскости. Высота потолков 4 метра <br /> Стены 4 на 5,5 м.В нашей циклораме снимали клипы с 20
        участниками. Вы всегда <br /> можете заранее приехать и посмотреть залы студии.
      </p>
    ),
  },
  {
    id: "14",
    head: "Какое оборудование у вас есть?",
    body: (
      <p>
        Наша студия оснащена современным разнообразным оборудованием. Импульсные <br /> и постоянные источники можно использовать в необходимом
        объеме. Так же много <br /> дополнительного оборудования. Вы всегда можете уточнить у администратора <br /> интересующий вас вопрос.
      </p>
    ),
  },
  {
    id: "15",
    head: "У вас есть цветные фильтры?",
    body: (
      <p>
        Наша студия оснащена современным разнообразным оборудованием. <br /> Цветные гелевый фильтры, цветные шторки, маски гобо, RGB-свет, все <br />
        это предоставляется бесплатно.
      </p>
    ),
  },
  {
    id: "16",
    head: (
      <>
        Дождь идет все время аренды? <br /> Как работает дождь?
      </>
    ),
    body: (
      <p>
        Дождем управляете вы сами. Система включает в себя: крупный дождь, мелкий <br /> дождь и тропический душ за стеклом. Крупный и мелкий дождь
        можно чередовать <br /> по желанию. Тропический душ включает администратор. <br /> Так же администратор может прервать съемку для технического
        обслуживания зала на 5-10 минут, если <br /> это требуется.
      </p>
    ),
  },
  {
    id: "17",
    head: "Ванна в зале контент наполняется?",
    body: (
      <p>
        Да, наполнение ванны +1000₽ к аренде. Необходимо предупредить <br /> об этом заранее. Так же ванну можно перенести в любой другой зал.
      </p>
    ),
  },
  {
    id: "18",
    head: "Есть ли у вас колонка?",
    body: (
      <p>
        Да, в каждом зале есть Яндекс станция Алиса с оплаченой <br /> подпиской. Так же можно подключить колонку к своему телефону.
      </p>
    ),
  },
];

function QuestionListElement(idText: string, headText: string | JSX.Element, bodyText: JSX.Element): JSX.Element {
  const [isBtnClick, setIsBtnClick] = useState(false);

  return (
    <li className={classesCss.sectionQuestionsContentFlex}>
      <h5 className={classesCss.sectionQuestionContentNumber}>{idText}</h5>

      <h6 className={classesCss.sectionQuestionsContentHead}>{headText}</h6>
      {isBtnClick && <div className={classesCss.sectionQuestionsContentBody}>{bodyText}</div>}

      <span className={classesCss.buttonContainer}>
        <button type="button" onClick={() => setIsBtnClick(!isBtnClick)}>
          <img src="src/assets/iconPlayVideo.png" alt="img" />
        </button>
      </span>
    </li>
  );
}

export const SectionQustionsContent = () => {
  return <ul className={classesCss.sectionQuestionContentList}>{contents.map((el) => QuestionListElement(el.id, el.head, el.body))}</ul>;
};
