import { axiosClient } from "../axiosClients";

const productApis = {
    getProduct: () => {
        try {
            const res = axiosClient.get("/product");
            return res;
        }catch(e) {
            console.log(e);
        }
    },
     postProduct: (req) => {

        try {
            const res = axiosClient.post("/product",req);
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     deleteProduct: (id) => {
        try {
            const res = axiosClient.delete(`/product/${id}`);
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     deleteAllProduct: () => {
        try {
            const res = axiosClient.delete("/product");
            return res;
        }catch(e) {
            console.log(e);
        }
     }
}
export default productApis;