function AJAX(url) {

    return new Promise((resolve, reject)=>{

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload =  () => { 
        // if response isnt an error if not error
        if(xhr.status == 200){
            let res = JSON.parse(xhr.responseText);
            resolve(res);
        }else{
            reject({message: "INVALIDE"})
        }
    };



    xhr.ontimeout = () =>{
        reject({message: "REQ EXP"})
    }


    xhr.onerror = () =>{
        reject({message: "REQ IMPOSSIBLE"})
    }

    xhr.onabort = () =>{
        reject({message: "REQ ABORT"})
    }

    xhr.send();

    

    });
}
