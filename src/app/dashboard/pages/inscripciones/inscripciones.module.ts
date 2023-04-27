import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesAltasComponent } from './pages/inscripciones-altas/inscripciones-altas.component';
import { InscripcionesDetallesComponent } from './pages/inscripciones-detalles/inscripciones-detalles.component';
import { InscripcionesComponent } from './inscripciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InscripcionesAltasComponent,
    InscripcionesDetallesComponent,
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: InscripcionesComponent,

    },
    {
      path: ':id',
      component: InscripcionesDetallesComponent,
    }
    ])
  ],
  exports: [InscripcionesComponent]
})
export class InscripcionesModule { }
