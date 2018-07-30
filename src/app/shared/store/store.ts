
import { Action } from '@ngrx/store';
import reducersActions from '@app/shared/store/actions';
import { ReducersResult } from '@app/shared/util/models/store';

// Estado por defecto cuando se entrega la información
const defaultState: ReducersResult<any> = {
    result: [],
    resetData: []
};

export function reducers<T>(state: ReducersResult<T> = defaultState, action: Action): any {
    switch (action.type) {
        case reducersActions.ADD:
            return Object.assign({}, state, { result: state.resetData });
        case reducersActions.RESET:
            return Object.assign({}, state, { result: state.resetData });
        default:
            return state;
    }
}