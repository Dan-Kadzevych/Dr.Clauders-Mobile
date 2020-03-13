declare module 'ErrorTypes' {
  export type Error = {
    message: string;
  };
}

declare module 'FormTypes' {
  export type Option = {
    label: string;
    value: string | number;
  };

  export type OptionList = Option[];
}

declare module 'General' {
  export type Id = string | number;
}
