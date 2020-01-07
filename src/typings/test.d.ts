declare module 'TestTypes' {
  export type DispatchExts = import('redux-thunk').ThunkDispatch<
    void,
    void,
    import('typesafe-actions').RootAction
  >;
}
