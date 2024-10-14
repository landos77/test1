/**
* Address  LEDs linearly row first.
*/
//% color=190 weight=100 icon="\uf1ec" block="screenMagic"
namespace screenMagic{
    /**
     * 
     */
    //% blockId=screenMagic
    //% block="plot at index"
    //% index.min=0 index.max=25
    export function plotAt(index:number):void{
        index |=0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x,y)
    }
}