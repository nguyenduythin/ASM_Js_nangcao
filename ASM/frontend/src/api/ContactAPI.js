import { axiosClient } from './axiosClient';

const ContactApi = {
    getAll(){
        const url = `/contacts`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/contacts/${id}`;
        return axiosClient.get(url);
    },
    getTrending() {
        const url = `/contacts?limit=12` ;
        return axiosClient.get(url);
    },
    add(contact){
        const url = `/contacts`;
        return axiosClient.post(url,contact);

    },
    remove(id){
        const url = `/contacts/${id}`;
        return axiosClient.delete(url);

    },
    update(contact,id){
        const url = `/contacts/${id}`;
        return axiosClient.put(url,contact);
    }
    
}
export default ContactApi;