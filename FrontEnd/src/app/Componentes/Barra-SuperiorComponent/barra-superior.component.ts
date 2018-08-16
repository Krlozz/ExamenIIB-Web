import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  @Input() nombreUsuario;
  @Input() imgUsuario;

  constructor() { }

  ngOnInit() {
  }

}
