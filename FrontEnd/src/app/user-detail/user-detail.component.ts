import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from '../objects/usuario';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() visitar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
