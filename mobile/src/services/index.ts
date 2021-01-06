import axios from 'axios';

export const api = axios.create({
    baseURL: "https://daniel-dscatalog.herokuapp.com",
});


export const TOKEN = 'Basic ZHNjYXRhbG9nOmRzY2F0YWxvZzEyMw==';