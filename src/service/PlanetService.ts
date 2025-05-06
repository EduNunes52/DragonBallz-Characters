//Importação dos pacotes
import axios from 'axios';
import { Planet, Root } from '../model/planet';

//Declaração de atributos
const API_URL = 'https://dragonball-api.com/api'
    
export const fetchPlanetList = async (offset = 0, limit=100): Promise<Planet[]> => {
        //faça a consulta no serviço
        const response = await axios.get(`${API_URL}/planets?offset=${offset}&limit=${limit}`)

        //verifico se tem retorno na resposta
        //Aqui estamo definindo o tipo de resposta baseado em um contrato
        const data: Root = await response.data;
        

        //Agora o typescript conhece que data tem uma propriedade results.


        return data.items
};

export const fetchPlanetById = async (id: string): Promise<Planet> => {

    return {} as Planet
};

export const fetchPlanetByFilter = async (
    name: string, 
    isDestroyed?: string, 
    description?: string): 
    Promise<Planet> => {
        return {} as Planet
}

