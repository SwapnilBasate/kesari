import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass,NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, NgFor,NgIf,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a4';
  searchText:string='';
  products=[
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net/upload/A1/milford_sound_cruise_queens_town_new_zealand_kesari_tours.jpg',
      price:'Rs.1500000',
      title:'Australia New Zealand',
      details:'View Tour'
    },
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net/upload/AF/jpeg-optimizer_Sydney-Opera-House-(1).jpg',
      price:'Rs.1200000',
      title:'Australia With Fiji Island',
      details:'View Tour'
    },
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net/upload/AY/51360029526_4235359838_b-(1).jpg',
      price:'Rs.500000',
      title:'Fun & Thrill Australia',
      details:'View Tour'
    },
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net//media/bucket//AI/dnsw1422121-397.jpg',
      price:'Rs.300000',
      title:' Fun Filled Australia',
      details:'View Tour'
    },
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net/upload/UH/575210_4.jpg',
      price:'Rs.100000',
      title:'Usa East Coast With Chicago',
      details:'View Tour' 
    },
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net/upload/UC.jpg',
      price:'Rs.112000',
      title:'Best Of Canada',
      details:'View Tour'

    },
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net/upload/New_York_City.jpg',
      price:'Rs.990000',
      title:'USA East Coast With Chicago',
      details:'View Tour'

    },
    {
      image:'https://d3r8gwkgo0io6y.cloudfront.net/upload/UZ/main-page-images-website.jpg',
      price:'Rs.790000',
      title:'Antarctica',
      details:'View Tour'

    },

    
  ]
  isShow=false
}