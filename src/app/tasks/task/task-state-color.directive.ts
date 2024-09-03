import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Etat, TaskModel} from "../model/task.model";

// Directive de coloration de l'état d'une tâche
@Directive({
  selector: '[appTaskStateColor]',
  // Architecture standalone
  /*standalone: true*/
})
export class TaskStateColorDirective implements OnInit {
  @Input() appTaskStateColor!: TaskModel;
  constructor(public elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    switch(this.appTaskStateColor.etat) {
      case Etat.A_FAIRE:
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
        break;
      case Etat.EN_COURS:
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
        break;
      case Etat.TERMINEE:
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
        break;
    }
  }
}
