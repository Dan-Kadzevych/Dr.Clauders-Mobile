import { ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type RootAction = ActionType<typeof import('../root-action').default>;

  interface Types {
    RootAction: RootAction;
  }
}
