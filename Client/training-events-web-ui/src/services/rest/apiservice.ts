import {AppStateRegistry} from "../../store/";

export interface IApiService {
    makeRequest<TData>(endpoint:string,method:string,data:any):Promise<TData>
}

export class RestApiService implements  IApiService{

    public async makeRequest<TData>(endpoint:string,method:string,data:any):Promise<TData>{

        const contentType = 'application/json';

        const { accessToken } = AppStateRegistry.store?.getState()?.token;  //TODO - Add Authorisation Token

        const url = RestApiService.setupUrl(endpoint);

        const headers = RestApiService.setupHeader(contentType, contentType, accessToken);

        const fetchOptions = {
            method,
            headers,
            body: data? JSON.stringify(data): "",
        };

        try{
            const response = await fetch(url, fetchOptions);

            if (response.status === 200) {
                return await response.json() as TData;
            }

            throw response;

        }catch(ex){
            //TODO - show generic message here
            throw ex;
        }
    }

    private static setupUrl(endpoint: string): string {
        const baseUrl = `${process.env.REACT_APP_BASE_API_URL}`;
        return `${baseUrl}/${endpoint}`;
    }

    private static setupHeader(accept: string, contentType: string, accessToken: string): Headers {
        const header = new Headers();
        header.set('Accept', accept);
        header.set('Content-Type', contentType);
        header.set('Authorization', accessToken);
        return header;
    }

}
