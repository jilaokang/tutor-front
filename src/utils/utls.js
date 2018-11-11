import axios from 'axios'
import config from '../config/default'

class utilsPackage {

    formatCookie = () => {
        let res = {};

        document.cookie.split(";").map(v => res[v.split("=")[0].trim()] = v.split("=")[1]);

        return res;
    };

    hasEnryption = async (method, url, data) => {
        return await axios({
            method: method,
            url: config.apiHost + url,
            data: data,
            headers: {
                Authorization: this.getToken()
            }
        }).then(res => res.data);
    };

    getToken = () => this.formatCookie().token
}

export default new utilsPackage()