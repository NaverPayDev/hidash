type PropertyPath = string | number | symbol | readonly (string | number | symbol)[];
export declare function omit<T extends object>(object: T | null | undefined, ...paths: PropertyPath[]): T;
export default omit;
