import { axiosClient } from './axiosClient';

const InvoiceApi = {
    getAll(){
        const url = `/invoices`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/invoices/${id}`;
        return axiosClient.get(url);
    },
    add(invoice){
        const url = `/invoices`;
        return axiosClient.post(url,invoice);

    },
    remove(id){
        const url = `/invoices/${id}`;
        return axiosClient.delete(url);

    },
    update(invoice,id){
        const url = `/invoices/${id}`;
        return axiosClient.put(url,invoice);
    }
}
export default InvoiceApi;