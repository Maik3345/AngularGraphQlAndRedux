import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialChatComponent } from '@app/social-chat/social-chat.component';
import { SocialChatRoutingModule } from '@app/social-chat/social-chat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SocialChatRoutingModule
  ],
  declarations: [SocialChatComponent]
})
export class SocialChatModule { }
