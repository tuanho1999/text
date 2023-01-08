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
     postOrder: () => {

        try {
            const res = axiosClient.post("/order");
            return res;
        }catch(e) {
            console.log(e);
        }
     }
}
export default orderApis;