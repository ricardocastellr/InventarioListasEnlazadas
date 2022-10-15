class Inventario{
    constructor(){
        this.primero=null;
    }

    agregar(producto){
        if(this.buscar(producto.codigo) == null){
            if(this.primero == null)
                this.primero = producto;
            else{
                console.log("aña")
                this.agregarSiguiente(producto,this.primero);
            }
            return true;
        }else 
            return false;
    }

    agregarSiguiente(producto,nodo){
        if(nodo.siguiente == null)
            nodo.siguiente = producto;
        else
            this.agregarSiguiente(producto,nodo.siguiente);
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
        let aux = this.primero;
        while(aux != null){
            if(Number(aux.codigo) == Number(codigo))
                return aux;
            else 
                aux = aux.siguiente;
        }
        return null;
    }

    listar(){
        if(this.primero == null){
            return null;
        }else{
            let productos  = "";
            let aux = this.primero
            while(aux != null){
                productos += `${aux.informacionProductoHTML()}`
                aux = aux.siguiente;
            }
            return productos;
        }
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