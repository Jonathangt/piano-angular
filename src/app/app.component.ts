import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano-angular';
  
  aplicarSonido(numero:number):void{
    const audio = new Audio();
    //a.src = '../assets/sonidos/note' +numero+'.wav';
    //audio.src = `../assets/sonidos-piano/${numero}.mp3`;
    audio.src = `../assets/sonidos-piano/${numero}.mp3`;
    audio.load();
    audio.play();
    
  }
}
