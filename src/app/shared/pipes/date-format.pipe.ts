import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let tzoffset = (new Date(value)).getTimezoneOffset() * 60000;
    let minOffSet = new Date(value).getTime() - tzoffset
    let localISOTIme = (new Date(minOffSet)).toISOString().replace('Z','').replace('T',' ');
    let kettospont = 0;
    let idopont = "";
    for(let betu of localISOTIme){
      if(betu === ':'){
        kettospont++;
      }
      if(kettospont === 2){
        break;
      }
      idopont += betu;
    }
    return idopont;
  }

}
