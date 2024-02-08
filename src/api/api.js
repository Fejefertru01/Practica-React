const apiUrl = 'https://fakestoreapi.com/products?limit=10';


const api = async () => {
    return await fetch(apiUrl)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log('Fallo', error));
};


export default api;