import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { HeaderRootComponent } from './components/header-root/header-root.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { FlexLayoutGridComponent } from './components/flex-layout-grid/flex-layout-grid.component';
import { DialogGameDetailComponent } from './components/dialog-game-detail/dialog-game-detail.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderRootComponent,
    FlexLayoutGridComponent,
    DialogGameDetailComponent,
    CartDetailComponent
  ],
  entryComponents: [DialogGameDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    RouterModule.forRoot([
      {
        path: '',
        component: FlexLayoutGridComponent
      },
      {
        path: 'cart',
        component: CartDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
