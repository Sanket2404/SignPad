import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-sign-pad',
  templateUrl: './sign-pad.component.html',
  styleUrls: ['./sign-pad.component.scss'],
})
export class SignPadComponent {
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;

  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    // 'canvasWidth': 360,
    // 'canvasHeight': 500
  };
  @Output() signatureImage: EventEmitter<string>= new EventEmitter<string>;
  constructor() { }

  ngAfterViewInit() {
    this.drawClear();
    this.canvasResize();
  }

  canvasResize(){
    let canvas: HTMLCanvasElement | null = document.querySelector('canvas');
    console.log(window.innerHeight);
    if(canvas){
    canvas.height = window.innerHeight - (0.19 * window.innerHeight)
    canvas.width = window.innerWidth;
    }
  }

  drawComplete(){
    alert('Signature Stored Successfully..!!');
    this.signaturePad.clear();
    this.signatureImage.emit(this.signaturePad.toDataURL());
    console.log('====================this.signatureImage=================',this.signatureImage);
  }

  drawStart() {
    console.log('begin drawing');
  }

  drawClear(){
    this.signaturePad.clear();
  }

}
