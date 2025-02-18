export const apiCall = async () => {
    return new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/photos').then((res)=>{
            resolve(res.json())
        })
        .catch((err)=>{
            reject(err)
        })
    })
}