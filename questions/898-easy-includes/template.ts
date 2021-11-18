type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? (<Q>() => Q extends F ? 1 : 2) extends <Q>() => Q extends U ? 1 : 2
    ? true
    : Includes<R, U>
  : false;
