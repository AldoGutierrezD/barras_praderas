new Vue({
    el: "#seccion-principal",
    data: {
        suplementos:[
            {nombre:'Proteina Muscletech', cantidad:5, precioUnitario:869, total:0},
            {nombre:'Burst BodyPerformance', cantidad:2, precioUnitario:349, total:0},
        ],
        nuevoSuplementoNombre:'',
        nuevoSuplementoCantidad:0,
        nuevoSuplementoPrecio:0,
        total:0,
        subtotal:0,
        iva:0,
        totalCantidades:0,
    },
    methods: {
        agregar(){
            this.suplementos.push({nombre:this.nuevoSuplementoNombre, cantidad:this.nuevoSuplementoCantidad, precioUnitario:this.nuevoSuplementoPrecio, total:0});
            this.nuevoSuplementoNombre='';
            this.nuevoSuplementoCantidad=0;
            this.nuevoSuplementoPrecio=0;
            const musica = new Audio("audio.mp3");
            musica.play(); 
        },
        montoSuplemento(i){
            this.suplementos[i].total=this.suplementos[i].cantidad * this.suplementos[i].precioUnitario;
            return this.suplementos[i].total;
        },
    },
    computed:{
        calculoSubtotal(){
            this.subtotal=0;
            for(i of this.suplementos){
                this.subtotal += i.total;
            }
            return this.subtotal.toFixed(2);
        },
        calculoIva(){
            this.iva=0;
            this.iva=this.subtotal*0.16;
            return this.iva.toFixed(2);
        },
        calculoTotal(){
            return (this.subtotal + this.iva).toFixed(2);
        },
        sumarCantidades(){
            this.totalCantidades=0;
            for(i of this.suplementos){
                this.totalCantidades += i.cantidad;
            }
            return this.totalCantidades;
        }
    }
});