import { makeUpRoomImg_1, makeUpRoomImg_2, wardrobeChildrenImg_1, wardrobeChildrenImg_2, wardrobeParentImg_1 } from "../../imagesAssetsList";

export const otherContents = [
  {
    title: <h2>ГРИМЕРНАЯ</h2>,
    textContent: <p>Два рабочих места со всем необходимым. Есть отпариватель, утюг и рейлы для одежды.</p>,
    photos: [{ image: makeUpRoomImg_1 }, { image: makeUpRoomImg_2 }],
    reverseElements: false,
  },
  {
    title: (
      <>
        <h2>ГАРДЕРОБ</h2>
        <h5>(Для взорослых)</h5>
      </>
    ),
    textContent: <p>Можно воспользоваться прокатом одежды, обуви и аксессуаров на базе студии.</p>,
    photos: [{ image: wardrobeParentImg_1 }, { image: wardrobeChildrenImg_2 }],
    reverseElements: true,
  },
  {
    title: (
      <>
        <h2>ГАРДЕРОБ</h2>
        <h5>(Для детей)</h5>
      </>
    ),
    textContent: <p>Доступны в прокат платья для девочек разных возрастов.</p>,
    photos: [{ image: wardrobeChildrenImg_1 }, { image: wardrobeChildrenImg_2 }],
    reverseElements: false,
  },
];
