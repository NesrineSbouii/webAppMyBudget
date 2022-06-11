import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";


export const COMPONENTS = [
];

@NgModule({
    imports: [
      SharedModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
  
export class CoreModule { }