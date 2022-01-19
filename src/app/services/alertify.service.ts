import { Injectable } from '@angular/core';
declare let alertify:any

@Injectable(
  // {providedIn: 'root'}  global yapıyor bu ifade.Bir diğer yolu da appmodule de provider içine yazmak
)
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }

  error(message:string){
    alertify.error(message)
  }

  warning(message:string){
    alertify.warning(message)
  }
}
