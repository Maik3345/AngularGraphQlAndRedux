import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '@app/core/shell/shell.component';
import { HeaderComponent } from '@app/core/shell/header/header.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShellComponent,
    HeaderComponent
  ],
  exports:[
    ShellComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
