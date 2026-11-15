import { Component } from '@angular/core';
import { BilleteraComponent } from './components/billetera/billetera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BilleteraComponent],
  template: `
    <nav class="navbar navbar-dark navbar-upn mb-2 py-3 shadow-sm">
      <div class="container">
        <div class="d-flex align-items-center gap-2">
          <span class="badge bg-warning text-dark fw-bold fs-6 px-2 py-1">UPN</span>
          <span class="navbar-brand mb-0 h1 fw-bold text-white">Billetera Digital: Pago y Movimientos</span>
        </div>
        <span class="badge bg-warning text-dark fw-semibold px-3 py-2">Angular SPA</span>
      </div>
    </nav>
    <app-billetera />
  `
})
export class AppComponent {}
