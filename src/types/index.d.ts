declare interface BtnProps {
  text?: string;
  IconLeft?: React.ComponentProps;
  IconRight?: React.ComponentProps;
  containerStyle?: string;
  btnVariant?: string;
  href?: string;
  [key: string]: any;
}

declare interface InputFieldProps {
  containerStyle?: string;
  type?: string;
  placeholder: string;
  name?: string;
  icon?: React.ComponentProps;
  inputContainerStyle: string;
  inputStyle?: string;
  label?: string;
  labelStyle?: string;
  value?: string;
  [key: string]: any;
}

declare interface ServiceCardProp {
  icon: string;
  title: string;
}

declare interface RegularListProps {
  data: any[];
  dataContainerStyle?: string;
  renderComponent: (data: any[]) => React.JSX;
  listEmpty?: () => React.JSX;
  listHeader?: () => React.JSX;
  listFooter?: () => React.JSX;
}

declare interface SearchInputFieldProps {
  containerStyle?: string;
  placeHolder: string;
  icon?: React.ComponentProps;
  inputContainerStyle: string;
  inputStyle?: string;
  value: string;
  [key: string]: any;
}

declare interface ProductProps {
  id?: number;
  rating: number;
  reviews: number;
  productName: string;
  price: number;
  serialId: string;
  description: string;
  features: string[];
  category: string;
  productImage?: string;
}

declare interface ProductStoreProps {
  [key: string]: ProductProps[];
}

declare interface AboutBlockProps {
  containerStyle: string;
  title: string;
  description?: string;
  reasons?: { title: string; description: string }[];
  imageUrl: string;
  order?: boolean;
}
