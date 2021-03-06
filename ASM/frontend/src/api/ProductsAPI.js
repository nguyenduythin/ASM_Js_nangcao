import { axiosClient } from './axiosClient';

const ProductApi = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    getTrending() {
        const url = `/products/limit=12` ;
        return axiosClient.get(url);
    },
    add(product){
        const url = `/products`;
        return axiosClient.post(url,product);

    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);

    },
    update(product,id){
        const url = `/products/${id}`;
        return axiosClient.put(url,product);
    }
}
export default ProductApi;