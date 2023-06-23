/**
 * to optimize more our reducer,
 * we are gonna write a helper function to make our dispatch parameters dynamic
 *  */

import { AnyAction } from "redux";

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};
export type ActionWithoutPayload<T> = {
  type: T;
};

export function CreateAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function CreateAction<T extends string>(
  type: T,
  payload: void
): ActionWithoutPayload<T>;

export function CreateAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
