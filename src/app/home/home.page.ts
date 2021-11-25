import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private router:Router) {
    }

    ngOnInit() {
     //   window.location.href="https://qr.kirazsoft.com/#/branch/mobile/y8MrRK";
     //   this.router.navigateByUrl('https://qr.kirazsoft.com/#/branch/mobile/y8MrRK');
window.addEventListener('message',event=>{

    if (event?.data != undefined) {
        for (let data of event?.data) {
            localStorage.setItem(data.key, data.value)
        }
    }
})
    }

    ionViewDidEnter() {

        var win = document.getElementsByTagName('iframe')[0].contentWindow;
        var local = [];
        //var payload = JSON.parse(event.data);
        //localStorage.setItem(payload.key, JSON.stringify(payload.data));

        for (var key in localStorage) {
            if (key !== 'length' && key !== 'key' && key !== 'getItem' && key !== 'setItem' && key !== 'removeItem' && key !== 'clear') {
               local.push({key: key, value: localStorage.getItem(key)})
          }


       }
       setTimeout(() => {
           win.postMessage(local, "*")
       }, 1000)

     //  console.log('local', local)
      setInterval(() => {
          var win = document.getElementsByTagName('iframe')[0].contentWindow;
          win.postMessage('', "*")
      }, 2000)
    }
}
