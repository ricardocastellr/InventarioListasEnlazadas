class Inventario{
    constructor(){
        this.primero  = null;
    }

    agregar(producto){
        if(this.buscar(producto.codigo) == null && Number(producto.codigo) > 0){
            if(this.primero == null)
                this.primero = producto;
            else
                this.agregarFinal(producto,this.primero);
            
            return true;
        }else 
            return false;
    }

    agregarFinal(producto,nodo){
        if(nodo.next == null)
            nodo.next = producto;
        else
            this.agregarFinal(producto,nodo.next);
    }

    eliminar(codigo){
        if(this.buscar(codigo) == null)
            return false;
        else{ 
            codigo = Number(codigo);
            if(Number(this.primero.codigo) == codigo) // En caso de ser la primera posición
                this.primero = this.primero.next;
            else{                            //Cualquier otra posición.
                let aux = this.primero;
                let temp;
                while(aux.next != null){
                    temp = aux.next;
                    if(Number(temp.codigo) == codigo)
                        aux.next = aux.next.next;
                    else
                        aux = aux.next;
                }
            }    
        }
        return true;
    }

    buscar(codigo){
        let aux = this.primero;
        while(aux != null){
            if(Number(aux.codigo) == Number(codigo))
                return aux;
            else 
                aux = aux.next;
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
                productos += aux.informacionProductoHTML();
                aux = aux.next;
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