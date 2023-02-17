import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  showMenu:boolean = false;

  constructor(private loginService:LoginService,
    private router:Router){ 
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout(){
    this.loginService.logout()
    this.router.navigateByUrl('/login');
  }
}