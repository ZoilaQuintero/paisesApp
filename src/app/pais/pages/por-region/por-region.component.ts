import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[]=['africa','america','asia','europa','oseania'];
  reginActiva:string='';

  getClassCss(region:string):string{
    return (region===this.reginActiva) ? 'btn btn-primary':'btn btn-outline-primary';
  }
  activarRegion(region:string){
    this.reginActiva=region;
    //TODO: hace el llamado al servicio
  }
}
