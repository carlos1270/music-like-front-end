import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public logado = false;
  public user = {
    name: 'Nome do usuário',
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
