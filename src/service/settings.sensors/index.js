import api from '../Api/api';
import { Apis } from '../Api/config';

const getSensor = async () => {
    try {
        const result = await api.get(Apis.api_Sensor);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const addSensor = async (status) => {
    try {
        const result = await api.post(Apis.api_Sensor, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updateSensor = async (data) => {
    try {
        const result = await api.put(`${Apis.api_Sensor}${data.id}`, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const getSensorbyGatway = async (id) => {
    try {
        const result = await api.get(Apis.api_Sensor+"list/bygateway/"+id);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};


const AdminFun = {
    getSensor,
    addSensor,
    updateSensor,
    getSensorbyGatway
};

export default AdminFun;
