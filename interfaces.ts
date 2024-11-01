export interface UserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ResponseData{
    data: UserData;
    support: {
        url: string;
        text: string;
    };
}