import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Drivers {
    items: Driver[];
}

export interface Driver {
    id: string;
    name: string;
    description: string;
}

export interface User {
    id: string;
    driver_id: string;
    pic_id: string;
    name: string;
    surname: string;
    email: string;
    gender: string;
    age: number;
}

export interface PaginationParams {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
}