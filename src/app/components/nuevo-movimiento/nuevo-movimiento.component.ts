import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Movimiento {
  tipo: 'Recarga' | 'Gasto';
  monto: number;
}

@Component({
  selector: 'app-nuevo-movimiento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-movimiento.component.html'
})
export class NuevoMovimientoComponent {
  saldo = input.required<number>();
  movimientoValido = output<Movimiento>();

  tipo: 'Recarga' | 'Gasto' = 'Gasto';
  monto: number | null = null;

  get esGastoExcesivo(): boolean {
    return this.tipo === 'Gasto' && this.monto !== null && this.monto > this.saldo();
  }

  get formularioInvalido(): boolean {
    return this.monto === null || isNaN(this.monto) || this.monto <= 0 || this.esGastoExcesivo;
  }

  registrar(): void {
    if (this.formularioInvalido || this.monto === null) {
      return;
    }
    this.movimientoValido.emit({
      tipo: this.tipo,
      monto: Number(this.monto)
    });
    this.monto = null;
  }
}
