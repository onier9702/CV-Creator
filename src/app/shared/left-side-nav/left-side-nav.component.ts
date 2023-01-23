import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Router {
  name: string;
  route: string;
  svg?: string;
}

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {

  isOpen: boolean = false;
  @ViewChild('keyAside') aside!: ElementRef;

  navs: Router[] = [
    {
      name: 'Home',
      route: '/dashboard/home',
      svg: '../../../assets/svg/house-door-fill.svg'
    },
    {
      name: 'Dinamic CV',
      route: '/creator/dinamic',
      svg: '../../../assets/svg/sign-up.svg'
    },
    {
      name: 'Basic CV',
      route: '/creator/basic',
      svg: '../../../assets/svg/sign-up.svg'
    },
    {
      name: 'Sign In',
      route: '/auth/sign-in',
      svg: '../../../assets/svg/login.svg'
    },
    {
      name: 'Sign Up',
      route: '/auth/sign-up',
      svg: '../../../assets/svg/sign-up.svg'
    },
    {
      name: 'Test',
      route: '/test1/test',
      svg: '../../../assets/svg/sign-up.svg'
    },
    
  ]

  supportLanguages = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs( this.supportLanguages );
  }

  ngOnInit(): void {

  }

  openCloseMenu() {
    this.isOpen = !this.isOpen;
    this.verifyMenu();
  }

  verifyMenu() {
    if ( this.isOpen ) {
      this.aside.nativeElement.classList.add('active');
    } else {
      this.aside.nativeElement.classList.remove('active');
    }
  }

  setLang(lang: string) {
    this.translateService.use( lang );
    localStorage.setItem( 'language', lang );
    if ( this.isOpen ) {
      this.openCloseMenu();
    }
  }

}
