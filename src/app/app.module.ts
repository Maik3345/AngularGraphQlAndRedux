import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ConversationsModule } from '@app/conversations/conversations.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/shell/core.module';
import { LoginModule } from '@app/login/login.module';
import { SocialChatModule } from '@app/social-chat/social-chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ConversationsModule,
    SocialChatModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
