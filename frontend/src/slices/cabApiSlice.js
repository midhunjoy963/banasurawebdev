import {CAB_URL} from '../constants.js';
import {apiSlice} from './apiSlice.js';


export const cabApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        getCabs:builder.query({
            query: ()=>({
                url:CAB_URL,
            }),
            keepUnUsedDataFor:5
        })
    }),

});

export const{useGetCabsQuery} = cabApiSlice;