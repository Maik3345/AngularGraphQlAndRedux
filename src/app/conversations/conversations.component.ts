import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, ReducersResult } from '@app/shared/util/models/store';
import reducersActions from '@app/shared/store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {
  public result: Observable<ReducersResult<any>>;
  currentValue = 0;
  constructor(private store: Store<IAppState>, private reducersActions: reducersActions) {
    this.result = store.select('result');

  }

  ngOnInit() {

  }

  public add(value: number): void {

    this.currentValue += value;
    this.store.dispatch(this.reducersActions.add(value))
  }

  public reset(): void {
    this.store.dispatch(this.reducersActions.reset(this.currentValue - 1));
  }

}
