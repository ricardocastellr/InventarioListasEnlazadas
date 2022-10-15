class Inventario{
    constructor(){
        this.primero=null;
    }

    agregar(producto){
        if(this.primero == null){
            this.primero = producto;
            return true;
        }else{
            this.agregarSiguiente(producto,this.primero);
        }
    }

    agregarSiguiente(producto,nodo){
        if(nodo.siguiente == null)
            nodo.siguiente = producto
        else
            this.agregarSiguiente(producto,nodo.siguiente)
    
        return true;
    }

    eliminar(codigo){
        if(this.buscar(codigo) == null)
            return false;
        else{
            for(let i=0; i<this.productos.length ;i++){
                if(codigo == this.productos[i].codigo){
                    for(let j=i; j<this.productos.length-1 ;j++)
                        this.productos[j] = this.productos[j+1];
                }
            }
            this.productos.pop();
            return true;
        }
    }

    buscar(codigo){
        codigo = Number(codigo);
        let sup = 0;
        let inf = this.productos.length - 1;
        
        while(sup <= inf){
            let centro = Math.floor((sup + inf) / 2);
            let codigoCentro = Number(this.productos[centro].codigo);

            if (codigoCentro < codigo) 
                sup = centro + 1;
            else if (codigoCentro > codigo) 
                inf = centro - 1;
            else if (codigoCentro === codigo)
                return this.productos[centro];   
        }

        return null;
    }

    listar(){
        let productos = "";
        if(this.productos.length>0){
            for(let i=0; i<this.productos.length ;i++)
                productos += this.productos[i].informacionProductoHTML();
        }else 
            return false;
        
        return productos;
    }

    listarInverso(){
        let productos = "";
        if(this.productos.length>0){
            for(let i=this.productos.length-1; i>=0 ;i--)
                productos += this.productos[i].informacionProductoHTML();
        }else 
            return false;

        return productos;
    }
}