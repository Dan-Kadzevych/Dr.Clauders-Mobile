declare module 'MyTypes' {
  export type Store = import('typesafe-actions').StateType<
    typeof import('../index').default
  >;
  export type RootState = import('typesafe-actions').StateType<
    ReturnType<typeof import('../reducer').default>
  >;
}
