import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  text = '';
  constructor(private readonly api: ApiService) {}
  ngOnInit(): void {
    this.api.get().subscribe({
      next: (response) => {
        this.text = response;
      },
    });
  }
}
