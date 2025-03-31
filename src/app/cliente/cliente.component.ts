import { Component } from '@angular/core';
import { Clientes } from '../modelos/cliente-modelos';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  clientes: Clientes = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
  ) {
    this.clienteService.obtenerClientes().subscribe({
      next: (resp) => {
        this.clientes = resp;
        console.log('clientes:', this.clientes);
      },
      error: (errorHttp: HttpErrorResponse) => {
        console.log('errorHttp  error Clientes: ', errorHttp);
      },
      complete: () => {
        console.log('complete Clientes: ', this.clientes);
      }
    });
  }
}
