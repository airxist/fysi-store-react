declare interface BtnProps {
  text?: string;
  IconLeft?: React.ComponentProps;
  IconRight?: React.ComponentProps;
  containerStyle: string;
  btnVariant?: string;
  textVariant?: string;
  href?: string;
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
  value: string;
  [key: string]: any;
}
