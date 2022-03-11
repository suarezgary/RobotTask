import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { DummyComponent } from "src/components/dummy/dummy.component";
import { DummyService } from "src/services/Dummy.service";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutComponent } from "src/components/layout/layout.component";
import { MainComponent } from "src/components/main/main.component";
import { DummyDirective } from "src/directive/dummy.directive";
import { BoardComponent } from "../components/board/board.component";
import { BoardService } from "src/services/board.service";

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    LayoutComponent,
    MainComponent,
    DummyDirective,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [BoardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
