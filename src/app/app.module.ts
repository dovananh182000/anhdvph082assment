import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import{ ContentComponent } from "./content/content.component";
import{ FooterComponent } from "./footer/footer.component";
import{ HeaderBottomComponent } from "./header-bottom/header-bottom.component";
import{ HeaderSildeComponent } from "./header-silde/header-silde.component";
import{ HeaderTopComponent } from "./header-top/header-top.component";
import{ HeadertopDescComponent } from "./headertop-desc/headertop-desc.component";





@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [AppComponent, HelloComponent,ContentComponent,FooterComponent,HeaderBottomComponent,HeaderSildeComponent,HeaderTopComponent,HeadertopDescComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
