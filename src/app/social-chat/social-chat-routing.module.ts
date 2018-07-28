import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialChatComponent } from '@app/social-chat/social-chat.component';

const routes: Routes = [
  { path: 'chat:idGroup', component: SocialChatComponent, data: { title: 'Chat' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialChatRoutingModule { }
