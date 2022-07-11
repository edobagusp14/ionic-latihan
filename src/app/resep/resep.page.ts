import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resep',
  templateUrl: './resep.page.html',
  styleUrls: ['./resep.page.scss'],
})
export class ResepPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
goBack()  {
  this.router.navigate(['home']);
}




}
