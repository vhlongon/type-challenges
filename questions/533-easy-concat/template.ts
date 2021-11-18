type Concat<
  T extends unknown[] | readonly unknown[],
  U extends unknown[] | readonly unknown[]
> = [...T, ...U];
