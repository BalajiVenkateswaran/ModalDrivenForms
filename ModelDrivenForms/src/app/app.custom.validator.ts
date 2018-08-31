
import {FormControl} from '@angular/forms';
export class CustomValidator{
  static getCustom(control:FormControl){
    if(control.value){
      if(control.value.length !==5 && control.value.length !==9){
        return {invalidLength: true};
      }
    }
    return null;
  }
}
