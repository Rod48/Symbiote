import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from "../header/module/header.module";



@NgModule({
  declarations: [],
  exports: [HeaderModule],
  imports: [CommonModule, HeaderModule]
})
export class CoreModule {}
