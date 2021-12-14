import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../formulario/formulario.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public data: any;
  constructor(public _formularioService: FormularioService) { }
  
  async ngOnInit() {
    this.getData();
  }

  getData(){
    this._formularioService.getData().subscribe(data => {
      this.data = data; 
      console.log(this.data)
    });
  }
}
