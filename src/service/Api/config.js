const API_URL = "http://192.168.0.6:8009";

const Apis = {
  UserLoginAPI: `${API_URL}/api/root/login`,
  API_PlanPack: `${API_URL}/api/planpack`,

  api_Sensor: `${API_URL}/api/sensors/list/`,
  api_Gateway: `${API_URL}/api/gateways/list/`,
  api_Order: `${API_URL}/api/orders/index/`,
  api_DataCollected: `${API_URL}/api/data/collect/from/sensors/`,

  

};
export { API_URL, Apis };
