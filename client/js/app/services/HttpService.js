class HttpService{

    get(url){
        return new Promise((resolve, reject) => {
            const DONE = 4;
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == DONE){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send();
        });
    }
}
