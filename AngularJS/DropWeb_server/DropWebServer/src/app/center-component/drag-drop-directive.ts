import { Directive, EventEmitter, HostListener, Output} from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[tohFileDrop]'
})
export class DragDropDirective {
  @Output() filesDropped = new EventEmitter<FileList>();
  @Output() filesHovered = new EventEmitter();
  constructor() {}
  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    const transfer = $event.dataTransfer;
    this.filesDropped.emit(transfer.files);
    this.filesHovered.emit(false);
  }
  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.filesHovered.emit(true);
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    this.filesHovered.emit(false);
  }
}
