class ProxyFactory{

    constructor(){
        throw new Error('Esta class nao pode ser instanciada');
    }

    static create(object, props, action){

        return new Proxy(object, {
            get(target, prop, receiver){

                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function(){
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        action(target);
                        return retorno;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){

                let retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)){
                    action(target);
                }

                return retorno;
            }

        });
    }

    static _isFunction(func){
        return typeof(func) == typeof(Function);
    }
}
