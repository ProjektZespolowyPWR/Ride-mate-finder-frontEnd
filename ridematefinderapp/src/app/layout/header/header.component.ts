import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() changeComponent: EventEmitter<string> = new EventEmitter<string>();

  variable: string = 'public';
  changeToLogin(): void {
    if (this.variable === 'login') {
      this.variable = 'public';
      this.changeComponent.emit('public');
      return;
    } else {
      this.variable = 'login'; 
    }
    this.changeComponent.emit(this.variable);
  }

  @Output() logoutEvent = new EventEmitter<void>();
  @Output() profileEvent = new EventEmitter<void>();
  
  logout() {
    this.logoutEvent.emit();
  }

  profile() {
    this.profileEvent.emit();
  }

}
