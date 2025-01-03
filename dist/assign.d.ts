export declare function assign<TObject, TSource>(target: TObject, source: TSource): TObject & TSource;
export declare function assign<TObject, TSource1, TSource2>(target: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
export declare function assign<TObject, TSource1, TSource2, TSource3>(target: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
export declare function assign<TObject, TSource1, TSource2, TSource3, TSource4>(target: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
export declare function assign<TObject>(target: TObject): TObject;
export declare function assign(target: unknown, ...sources: any[]): any;
export default assign;
