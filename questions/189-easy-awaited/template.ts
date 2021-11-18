type Awaited<T> = T extends Promise<infer P> | Array<infer P> ? P : never;
