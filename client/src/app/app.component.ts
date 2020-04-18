import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';

// async function fetchJSON(url) {
//   const r = await fetch(url);
//   const json = await r.json();
//   console.log(json);
//   return json;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor() {
    // fetchJSON('http://data.gov.ua/dataset/8851831d-b5ce-4ca8-8685-eafbc3f57eca/resource/6cfff17e-84ac-4141-b0fd-89abb68e9f31/download/mvswantedbezvesti_1.json'); 
  }
  
  ngOnInit(): void {
    // const ws = new WebSocket('ws://localhost:3000/api/v1/websocket');
    // ws.addEventListener('open', () => {
    //   ws.send('Hello');
    // })
  }
}
