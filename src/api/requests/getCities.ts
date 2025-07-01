import { apiKey, apiUrl } from "../config"

export const getCities = async(limit: 50 | 100 | 150): Promise<any> => {
    const response = await fetch(`${apiUrl}/locations/v1/topcities/${limit}?apiKey=${apiKey}`);

    return response.json();
}