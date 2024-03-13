import classesCss from "./creativeSpaceEquipment.module.scss";

export default function CreativeSpaceEquipment(): JSX.Element {
  return (
    <div className={classesCss.creativeSpaceEquipmentWrapper}>
      <h1>ОБОРУДОВАНИЕ</h1>
      <div className={classesCss.creativeSpaceEquipmentTextGrid}>
        <p className={classesCss.el_1}>
          Импульсные источники 6 шт <br />
          Постоянный свет 4 шт <br />
          RGB (Цветной свет) 4 шт <br />
          Радиосинхронизатор цифровой 2 шт <br />
          Радиосинхронизатор механический 1 шт <br />
          Стойки для оборудования 17 шт <br />
          Комплект стоек для цветного фона и баннеров - 1 шт <br />
          Журавль, систенд, пантограф
        </p>
        <p className={classesCss.el_2}>
          Маски Гобо <br />
          Цветные фильтры (шторки, гелевые, стекла) <br />
          Шторки с сотами 2 шт <br />
          Рефлекторы 7 шт <br />
          Фоновый рефлектор 1 шт <br />
          Портретная тарелка 2 шт <br />
          Стрипбокс с сотами 4 шт <br />
          Софтбокс 1 шт <br />
          Октобокс 2 шт <br />
          Отражатель на просвет 5 в 1 — 1 шт <br />
          Зонты 3 шт <br />
          Флаги 4 шт
        </p>
        <p className={classesCss.el_3}>
          Генератор дыма 2 шт <br />
          Лазер 1 шт <br />
          Проектор 1 шт <br />
          Вентилятор напольный 1 шт <br />
          Жидкое зеркало и дискошар <br />
          Цветные фоны (зелёный, желтый, розовый, голубой)
        </p>
      </div>
    </div>
  );
}
