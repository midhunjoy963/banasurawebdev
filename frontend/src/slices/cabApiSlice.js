import {CAB_URL} from '../constants.js';
import {apiSlice} from './apiSlice.js';


export const cabApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        getCabs:builder.query({
            query: ()=>({
                url:CAB_URL,
            }),
            keepUnUsedDataFor:5
        }),
        getCabDetail:builder.query({
            query: (cabId)=>({
                url:`${CAB_URL}/${cabId}`,
            }),
            keepUnUsedDataFor:5
        }),
        createCab:builder.mutation({
            query:()=>({
                url:CAB_URL,
                method:'POST'
            }),
            invalidatesTags:['cab'],
        }),
        updateCab:builder.mutation({
            query:(data)=>({
                url:`${CAB_URL}/${data._id}`,
                method:'PUT',                
            }),
            invalidatesTags:['cab']
        })

    }),


});

export const{useGetCabsQuery,useGetCabDetailQuery,useCreateCabMutation,useUpdateCabMutation} = cabApiSlice;