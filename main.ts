/**
* Provides access to basic micro:bit functionality.
*/
//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
namespace screenMagic{
    
    export function plotAt(index:number):void{
        index |=0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x,y)
    }
}