export type ExtractEntityType<T> = {
  [P in keyof T]: T[P] extends Function ? never : T[P];
};
