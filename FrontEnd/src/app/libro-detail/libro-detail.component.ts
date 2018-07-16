import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Libro} from '../objects/libro';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

  @Input() libro: Libro;
  @Output() libroEmitter = new EventEmitter<Libro>();

  constructor() { }

  ngOnInit() {
  }

}
