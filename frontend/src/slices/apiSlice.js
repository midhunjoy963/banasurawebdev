import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {BASE_URL } from '../constants.js';

const baseQuery = fetchBaseQuery({baseUrl:BASE_URL});
console.log('base query : '+baseQuery);
export const apiSlice = createApi({
    baseQuery,
    mode:'cors',
    tagTypes:['cab','user'],
    endpoints:(builder)=>({}),

});




