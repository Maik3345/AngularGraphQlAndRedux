import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationsComponent } from '@app/conversations/conversations.component';

const routes: Routes = [
  { path: 'entry', component: ConversationsComponent, data: { title: 'Lista de conversaciones' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationsRoutingModule { }
