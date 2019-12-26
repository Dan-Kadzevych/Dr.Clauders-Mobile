export type TypeConstant = string;

export type Action<TType extends TypeConstant = TypeConstant> = {
  type: TType;
};

type GetAction<
  TAction extends Action,
  TType extends TAction['type']
> = TAction extends Action<TType> ? TAction : never;

const createReducer = <S, A extends Action>(
  initialState: S,
  handlers: { [P in A['type']]?: (state: S, action: GetAction<A, P>) => S },
) => <P extends A['type']>(
  state: S = initialState,
  action: GetAction<A, P>,
): S => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type]!(state, action);
  }

  return state;
};

export default createReducer;
