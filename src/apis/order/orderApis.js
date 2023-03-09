import { axiosClient } from "../axiosClients";

const orderApis = {
    getOrder: () => {
        try {
            const res = axiosClient.get("/order");
            return res;
        }catch(e) {
            console.log(e);
        }
    },
     postOrder: (req) => {

        try {
            const res = axiosClient.post("/order",req);
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     deleteOrder: (id) => {
        try {
            const res = axiosClient.delete(`/order/${id}`);
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     deleteAllOrder: () => {
        try {
            const res = axiosClient.delete("/order");
            return res;
        }catch(e) {
            console.log(e);
        }
     }
}
export default orderApis;