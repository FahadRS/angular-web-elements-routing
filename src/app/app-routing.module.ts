import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmpChild1Component } from './cmp-child1/cmp-child1.component';
import { CmpChild2Component } from './cmp-child2/cmp-child2.component';
import { CmpParentComponent } from './cmp-parent/cmp-parent.component';
import { LibraryPageComponent } from './library-page/library-page.component';

const routes: Routes = [

  { path: 'library/:view', component: LibraryPageComponent,
  /*children: [
    { path: '', redirectTo: 'child-a', pathMatch: 'full' },
    { path: 'child-a', component: CmpChild1Component },
    { path: 'child-b', component: CmpChild2Component }
  ]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
