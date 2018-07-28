import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsRoutingModule } from '@app/conversations/conversations-routing.module';
import { ConversationsComponent } from '@app/conversations/conversations.component';

@NgModule({
  imports: [
    CommonModule,
    ConversationsRoutingModule
  ],
  declarations: [
    ConversationsComponent
  ]
})
export class ConversationsModule { }
