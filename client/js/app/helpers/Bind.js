class Bind {

    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(
                        model,
                        props,
                        model => view.atualiza(model)
                    );

        view.atualiza(model);

        return proxy;
    }
}
