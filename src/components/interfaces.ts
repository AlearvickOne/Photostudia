interface IContent {
  contentTitle: JSX.Element;
  contentText: JSX.Element;
  contentPriceText?: JSX.Element;
  reverseElements: boolean;
  photosElements: { image: string }[];
}

export type { IContent };
