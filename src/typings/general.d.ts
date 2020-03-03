declare module 'ErrorTypes' {
  export type Error = {
    message: string;
  };
}

declare module 'FormTypes' {
  export type Option = {
    label: string;
    value: string;
  };

  export type OptionList = Option[];
}
