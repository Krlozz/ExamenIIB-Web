import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Autor} from '../objects/autor';

@Component({
  selector: 'app-autor-detail',
  templateUrl: './autor-detail.component.html',
  styleUrls: ['./autor-detail.component.css']
})
export class AutorDetailComponent implements OnInit {

  @Input() autor: Autor;
  @Output() autorEmitter = new EventEmitter<Autor>();

  constructor() { }

  ngOnInit() {
  }

}
