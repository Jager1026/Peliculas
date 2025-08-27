export function primeraLetraMayuscula(){
    return {
        name: 'primeraLetraMayuscula',
        message: 'La primera letra debe ser mayuscula',
        test:  (valor: string | undefined) => {
            if (valor && valor.length > 0){
                const primeraLetra = valor.substring(0,1);
                return primeraLetra === primeraLetra.toUpperCase();
            }
            return true;
        }
    }
}