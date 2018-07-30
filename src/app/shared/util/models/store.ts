
export interface IAppState {
    store: ReducersResult<any>[];
}

export interface ReducersResult<T> {
    result: T;
    resetData: T;
}