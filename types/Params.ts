import { ParsedUrlQuery } from "querystring";

export interface ParamsNote extends ParsedUrlQuery {
    note: string;
}

export interface ParamsPages extends ParsedUrlQuery {
    page: string;
}

