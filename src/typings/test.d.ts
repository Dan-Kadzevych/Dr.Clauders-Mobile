declare module 'TestTypes' {
  export type DispatchExts = import('redux-thunk').ThunkDispatch<
    import('MyTypes').RootState,
    void,
    import('typesafe-actions').RootAction
  >;
}
