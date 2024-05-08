import api from '../Api/api';
import { Apis } from '../Api/config';
const getDataCollected = async () => {
    try {
        const result = await api.get(Apis.api_DataCollected);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const addDataCollected = async (status) => {
    try {
        const result = await api.post(Apis.api_DataCollected, status);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updateDataCollected = async (data) => {
    try {
        const result = await api.put(`${Apis.api_DataCollected}${data.id}`, data);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const getDataCollectedbySensors = async (id) => {
    try {
        console.log(Apis.api_DataCollected+"bysensors/"+id)
        const result = await api.get(Apis.api_DataCollected+"bysensors/"+id);
        return result.data.error ? null : result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};


const AdminFun = {
    getDataCollected,
    addDataCollected,
    updateDataCollected,
    getDataCollectedbySensors
};

export default AdminFun;
