import axios from "axios";

export const baseUrl = 'https:/bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'bcc1a7d954msha3e14c23269432cp1b45a7jsnfa9cad77552a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}