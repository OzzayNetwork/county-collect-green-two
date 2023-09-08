/* eslint-disable */
import axios from "axios";

export const base ="https://api.craftcollect.africa/homabay";
export const paysol =  "https://api.craftcollect.africa/homabay/paysol/index.php";

//export const paysol =  "https://api.paysol.co.ke/paysol/index.php";
//export const base ="https://api.paysol.co.ke/";


export const rent = base+"/rent/index.php";
export const parking =  base+"/parking/index2.php";
export const trade =  base+"/trade/index2.php";
export const biller =  base+"/biller/index.php";
export const authUrl =  base+"/authentication/";


let tokenStr = 'MTVlNmJkNDE1NWZiNDBiZTZlZTVmNjMwZDg5ZmNkMTU1NTRiOTM2MDBlY2U2ZmI2YjUwNGE4MWRmOWJjYTFkZA==';
export const execute = (params, url) => {
    return axios.post(url,params,{headers: {"Authorization": `Bearer ${tokenStr}`}})
}

export const executeDownload = (params, url) => {
    return axios.post(url,params,{headers: {"Authorization": `Bearer ${tokenStr}`}, responseType: 'blob'})
}
export const execute2 = (params, url) => {
    return axios.post(url,params)
}

