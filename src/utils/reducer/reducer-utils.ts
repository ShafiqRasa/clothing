/**
 * to optimize more our reducer,
 * we are gonna write a helper function to make our dispatch parameters dynamic
 *  */

type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};
type Action<T> = {
  type: T;
};

export function CreateAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
export function CreateAction<T extends string, P>(
  type: T,
  payload: P
): Action<T>;

export function CreateAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
