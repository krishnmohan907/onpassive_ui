import{Pipe, PipeTransform} from '@angular/core'
@Pipe({
 name:'GenderSetter'
})
export class Seetinggenderpipe implements PipeTransform{

    transform(value:string):string{
        debugger;
         if(value === '0') return 'Male'
         else return 'Female'
    }

}