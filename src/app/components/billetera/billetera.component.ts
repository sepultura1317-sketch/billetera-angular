import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoMovimientoComponent, Movimiento } from '../nuevo-movimiento/nuevo-movimiento.component';

@Component({
  selector: 'app-billetera',
  standalone: true,
  imports: [CommonModule, NuevoMovimientoComponent],
  templateUrl: './billetera.component.html'
})
export class BilleteraComponent {
  saldo: number = 250.00;
  movimientos: Movimiento[] = [];

  procesarNuevoMovimiento(movimiento: Movimiento): void {
    if (movimiento.tipo === 'Recarga') {
      this.saldo += movimiento.monto;
    } else if (movimiento.tipo === 'Gasto' && movimiento.monto <= this.saldo) {
      this.saldo -= movimiento.monto;
    }
    this.movimientos.unshift(movimiento);
  }
}
