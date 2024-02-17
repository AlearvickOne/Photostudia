interface IContent {
  contentTitle: string;
  contentText: string;
  contentPriceText?: string;
  reverseElements: boolean;
  photosElements: { image: string }[];
}

export type { IContent };
