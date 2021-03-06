import { axiosClient } from './axiosClient';

const CateApi = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    getTrending() {
        const url = `/categories?limit=12` ;
        return axiosClient.get(url);
    },
    add(cate){
        const url = `/categories`;
        return axiosClient.post(url,cate);

    },
    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url);

    },
    update(cate,id){
        const url = `/categories/${id}`;
        return axiosClient.put(url,cate);
    }
    
}
export default CateApi;