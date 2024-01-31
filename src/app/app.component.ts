import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { BodyComponent } from "./body/body.component";

interface SideNavToggle {
  screenWidth: number;
  collapesed: boolean;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SidenavComponent, RouterModule, CommonModule, BodyComponent]
})
export class AppComponent {
  title = 'app_angular';

  isSideNavCollapesed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapesed = data.collapesed;

  }
}
