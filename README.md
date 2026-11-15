# Caso 2: Billetera Digital — Pago y Movimientos (Angular)

Aplicación web **Single Page Application (SPA)** desarrollada con **Angular 18** y **Bootstrap 5.3** que implementa una billetera digital mediante comunicación reactiva entre dos componentes funcionales propios: **`BilleteraComponent` (Padre — dueño del estado)** y **`NuevoMovimientoComponent` (Hijo — captura y validación del formulario)**.

Cumple estrictamente todos los requisitos de la evaluación:
* `BilleteraComponent` mantiene el saldo inicial (`S/ 250.00`) y el arreglo de movimientos en memoria, muestra el saldo mediante interpolación (`{{ }}`), recorre el historial con `@for` y muestra `"Aún no hay movimientos"` con `@if` cuando está vacío.
* `NuevoMovimientoComponent` recibe el saldo actual mediante `input.required<number>()`, evalúa en tiempo real si el gasto supera el saldo mostrando una alerta con `@if`, deshabilita el botón con Property Binding `[disabled]` cuando el formulario es inválido, y notifica las solicitudes válidas al padre mediante `output<Movimiento>()`.
* `AppComponent` sirve únicamente como contenedor raíz.

---

## 📋 Requisitos Previos

* **Node.js:** v20 LTS, v22 LTS o superior
* **Gestor de paquetes:** npm v10+

---

## 📁 Estructura del Proyecto

```text
billetera-angular/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── src/
    ├── index.html                                                     # Incluye Bootstrap 5.3.3 vía CDN
    ├── main.ts
    ├── styles.css
    └── app/
        ├── app.component.ts                                           # Contenedor raíz (<app-billetera />)
        └── components/
            ├── billetera/
            │   ├── billetera.component.ts                             # Componente Padre (Dueño del estado)
            │   └── billetera.component.html                           # Vista Padre (Interpolación, @for, @if)
            └── nuevo-movimiento/
                ├── nuevo-movimiento.component.ts                      # Componente Hijo (input(), output())
                └── nuevo-movimiento.component.html                    # Vista Hijo (Formulario, @if, [disabled])
```

---

## 🚀 Comandos para Instalar Dependencias y Ejecutar la Aplicación

1. **Clonar el repositorio e ingresar a la carpeta del proyecto:**
   ```bash
   git clone https://github.com/sepultura1317-sketch/billetera-angular.git
   cd billetera-angular
   ```

2. **Instalar las dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm start
   ```
   *(O alternativamente `npx ng serve -o` si desea que se abra automáticamente en el navegador).*

4. **Abrir la aplicación en el navegador:**
   ```
   http://localhost:4200/
   ```

---

## ✅ Protocolo de Pruebas Funcionales (Rúbrica)

| # | Acción | Resultado esperado |
|---|--------|--------------------|
| **1** | Abrir la aplicación | Saldo inicial `S/ 250.00`; historial vacío (`Aún no hay movimientos`). |
| **2** | Registrar recarga de `S/ 100.00` | Saldo sube a `S/ 350.00`; la recarga se incorpora al inicio del historial. |
| **3** | Registrar gasto de `S/ 50.00` | Saldo baja a `S/ 300.00`; el gasto aparece encima de la recarga previa. |
| **4** | Intentar gasto de `S/ 400.00` | Se rechaza; aparece mensaje de error `"Saldo insuficiente para realizar el gasto"` con `@if` y `[disabled]` bloquea el botón; el saldo continúa en `S/ 300.00`. |
| **5** | Ingresar cero, negativo o monto vacío | `[disabled]` permanece activo impidiendo el envío; no cambia el saldo ni el historial. |
