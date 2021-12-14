import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormularioService } from './formulario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  question: FormGroup;
  constructor(
    private _formularioService: FormularioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.question = new FormGroup({
      name: new FormControl(''),
      adress: new FormControl(''),
      phone: new FormControl(''),
      pregunta1: new FormControl(''),
      pregunta2: new FormControl(''),
      pregunta3: new FormControl(''),
      pregunta4: new FormControl(''), //
      pregunta5: new FormControl(''),
      pregunta6: new FormControl(''),
      pregunta7: new FormControl(''),
      pregunta8: new FormControl(''),
      pregunta9: new FormControl(''),
      pregunta10: new FormControl(''),
      pregunta11: new FormControl(''),
    });
  }

  onSubmit() {
    this._formularioService.createForm(this.question.value).subscribe((res) => {
      if (res) {
        this.showSuccess();
      }
    });
  }

  showSuccess() {
    this.toastr.success(
      'En cuando podamos nos comunicamos con usted',
      'Solicitud Enviada!'
    );
  }
}
