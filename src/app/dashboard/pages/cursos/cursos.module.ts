import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosAltasComponent } from './pages/cursos-altas/cursos-altas.component';
import { CursosDetallesComponent } from './pages/cursos-detalles/cursos-detalles.component';
import { CursosComponent } from './cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CursosAltasComponent,
    CursosDetallesComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: CursosComponent,
    },
    {
      path: ':id',
      component: CursosDetallesComponent,
    }
    ])
  ],
  exports: [CursosComponent]
})
export class CursosModule { }
