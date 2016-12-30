import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[arCapped]'
})

export class orangeCappedDirective{
    @HostBinding('class.orangecap') isOrangeCap = false; 
    @HostBinding('class.purplecap') isPurpleCap = false;
    @Input() set arCapped(value){
        this.isOrangeCap = value.isOrangeCap;
        this.isPurpleCap = value.isPurpleCap;
    }
    // @Input() set arCappedd(value){
    //     this.isPurpleCap = value;
    // }
}