export class Donante{

    public apellidos       : string;
    public nombres         : string;
    public valorDonar      : number;
    public fechaEntrega    : Date;
   
    constructor( apellidos:string , nombres : string , valorDonar : number, fechaEntrega : Date){
        this.apellidos       = apellidos;
        this.nombres         = nombres;
        this.nombres         = nombres;
        this.valorDonar      = valorDonar;
        this.fechaEntrega    = fechaEntrega;        
    }

}