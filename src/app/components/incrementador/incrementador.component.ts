import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor(valor, addPrevio = true) {

    this.progreso = (addPrevio) ? this.progreso + valor : valor;
    if (this.progreso > 100) {
      this.progreso = 100;
    }
    if (this.progreso < 0) {
      this.progreso = 0;
    }
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChanges(newValue: number) {
    if (newValue === null) {
      newValue = 0;
    }
    this.cambiarValor(newValue, false);

    this.txtProgress.nativeElement.value = this.progreso;


  }
}
