import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Type';
  helloworld: string = 'Hello World';
  clicked: number = 0;
  doubleClicked: number = 0;

  willShowBlock: boolean = false;

  valueToLoopThrough: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  willShow: boolean = false;

  incremetClicked() {
    this.clicked += 1;
  }
  increnetDoubleClicked() {
    this.doubleClicked += 1;
  }
  contextMenuInfo: any = {
    pageX: 0,
    pageY: 0,
    willShow: false,
  };
  tooltipInfo: any = {
    pageX: 0,
    pageY: 0,
    willTooltipShow: false,
  };
  contextClicked: boolean = false;
  toggleContextMenu(showContextMenu: boolean, event: MouseEvent | null = null) {
    if (event !== null) {
      event.preventDefault();
      event.preventDefault(); // Prevents default context menu
      this.contextMenuInfo.pageX = event.pageX;
      this.contextMenuInfo.pageY = event.pageY;
    }

    this.contextMenuInfo.willShow = showContextMenu;
  }

  @HostListener('document:click', ['$event'])
  // closeContextMenu(event: MouseEvent): void {

  //   const clickedInsideContextMenu = (event.target as HTMLElement).closest(
  //     '.context-menu'
  //   );
  //   if (!clickedInsideContextMenu) {
  //     this.toggleContextMenu(false);
  //   }
  // }
  closeContextMenu() {
    setTimeout(() => {
      if (!this.contextClick) {
        this.toggleContextMenu(false);
      }
    }, 10);
  }
  contextClick() {
    this.contextClicked = true;
    setTimeout(() => {
      this.contextClicked = false;
    }, 20);
  }
  onMouseMove(inside: boolean, event: MouseEvent) {
    this.tooltipInfo.willShow = inside;
    console.log(event);
  }

  isActive = true;
  isDisabled = false;
  currentClass = 'highlight';
  score = 75;

  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';
  addTask() {
    if (this.newTask) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }
}
