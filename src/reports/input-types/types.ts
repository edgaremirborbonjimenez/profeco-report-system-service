import { InterceptingListenerImpl } from "@grpc/grpc-js/build/src/call-interface";

export interface CreateReportDto{
    user:User;
    market:Market;
    product:Product;
}

interface User{
    id:string;
    names:string;
    lastnames:string;
    email:string;
}

interface Market{
    id:string;
    name:string;
    url_img:string;
}

interface Product{
    id:string;
    brand:string
    name:string;
    url_img:string;
}