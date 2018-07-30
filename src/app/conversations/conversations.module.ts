import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsRoutingModule } from '@app/conversations/conversations-routing.module';
import { ConversationsComponent } from '@app/conversations/conversations.component';
import reducersActions from '@app/shared/store/actions';

@NgModule({
  imports: [
    CommonModule,
    ConversationsRoutingModule
  ],
  declarations: [
    ConversationsComponent
  ],
  providers:[
    reducersActions
  ]
})
export class ConversationsModule { }
