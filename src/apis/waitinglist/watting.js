import { axiosClient } from "../axiosClients";

const waitingApis = {
    getWaiting: () => {
        try {
            const res = axiosClient.get("/waiting");
            return res;
        }catch(e) {
            console.log(e);
        }
    },
     postWaiting: (req) => {

        try {
            const res = axiosClient.post("/waiting",req);
            return res;
        }catch(e) {
            console.log(e);
        }
     },
     deleteWaiting: (id) => {

        try {
            const res = axiosClient.delete(`/waiting/${id}`);
            return res;
        }catch(e) {
            console.log(e);
        }
     },

     deleteAllWaiting: () => {

        try {
            const res = axiosClient.delete("/waiting");
            return res;
        }catch(e) {
            console.log(e);
        }
     }
}
export default waitingApis;