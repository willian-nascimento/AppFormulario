import axios, {AxiosResponse} from "axios";


export class ClientApi {
    public async conectApi() {
        try {
            await axios.post('https://localhost:8000/formulario',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: {
                        "nameUser": "string",
                        "quantidadeMoradores": 0,
                        "zonaEleitoral": "string",
                        "fonteRenda": "string",
                        "endereco": {
                            "cep": "string",
                            "cidade": "string",
                            "agrovila": "string",
                            "numeroCasa": 0
                        },
                        "atencaobasica": {
                            "educacao": true,
                            "saneamento": true,
                            "transporte": true,
                            "saude": true,
                            "agricultura": true,
                            "esporteLazer": true
                        }
                    }
                }).then(function (response: AxiosResponse) {
                console.log('response is : ' + response);
            });
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}
