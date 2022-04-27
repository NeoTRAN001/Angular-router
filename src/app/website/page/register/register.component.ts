import { Component, OnInit } from '@angular/core';
import { OnExit } from '@guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onExit() {
    const rta = confirm('¿Seguro que desea salir?');
    return rta;
  }
}
