import axios, {AxiosResponse} from "axios";


export class ClientApi {
    public async conectApi() {
        try {
            await axios.post('https://localhost:8000/formulario',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }).then(function (response:AxiosResponse) {
                console.log('response is : ' + response);
            });
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
}
