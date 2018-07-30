import { Injectable } from '@angular/core';

@Injectable()
export default class reducersActions {
    public static readonly ADD = 'ADD';
    public static readonly RESET = 'RESET';

    public add = (payload: number) => ({ type: reducersActions.ADD, payload })
    public reset = (payload: number) => ({ type: reducersActions.RESET, payload })
}