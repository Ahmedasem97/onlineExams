import { Component, HostListener, Renderer2, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { QuizesComponent } from "../../pages/quizes/quizes.component";
import { AuthLipService } from 'auth-lip';


@Component({
  selector: 'app-exams-layout',
  standalone: true,
  imports: [RouterLink , RouterLinkActive,RouterOutlet, ToolbarModule, InputTextModule, AvatarModule, InputIconModule, IconFieldModule, FormsModule, ButtonComponent],
  templateUrl: './exams-layout.component.html',
  styleUrl: './exams-layout.component.scss'
})
export class ExamsLayoutComponent implements OnInit {
  constructor(
    private _Router:Router,
    private _Renderer2:Renderer2,
    private _AuthLipService:AuthLipService
    
  ){}
  showNavbar!:boolean
  xIcon!:boolean
  windowWidth!:number
  
  navbarLayout ():void {
    this.windowWidth = window.innerWidth
    if (this.windowWidth < 767) {
      this.showNavbar = false
      this.xIcon = true
    }else {
      this.showNavbar = true
      this.xIcon = false
    }
  }
  
  ngOnInit ():void {
    this.navbarLayout()
  }

  @HostListener("window:resize") navbarResize(){
    this.navbarLayout()
  }
  // @ViewChild("navbar") el!:HTMLDivElement
  toggleIcon(el:HTMLDivElement):void {
    this.showNavbar = !this.showNavbar 
    if (this.showNavbar === true) {
      this._Renderer2.setStyle(el, "top" , "87px")
      this._Renderer2.setStyle(el, "padding" , "20px")
      
    }else {
      this._Renderer2.setStyle(el, "top" , "-100%")
      // this._Renderer2.setStyle(el, "padding" , "0")
    }
  }

  closeNavbar(el:HTMLDivElement):void {
    this.showNavbar = !this.showNavbar 
    this._Renderer2.setStyle(el, "top" , "-100%")
    // this._Renderer2.setStyle(el, "padding" , "0")
  }
  
  logOut(): void {
    this._AuthLipService.logOut().subscribe({
      next:res => {
        console.log(res);
        localStorage.removeItem("token")
        this._Router.navigate(["/auth/login"])
      },
      error: err => {
        console.log(err);

      }
    })
  }




}
