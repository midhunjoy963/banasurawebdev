import {CAB_URL, UPLOAD_URL} from '../constants.js';
import {apiSlice} from './apiSlice.js';


export const cabApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        getCabs:builder.query({
            query: ()=>({
                url:CAB_URL,
                
            }),
            keepUnUsedDataFor:5,
            providesTags:['Cabs']
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
                body:data,
            }),
            invalidatesTags:['Cabs']
        }),
        deleteCab:builder.mutation({
            query:(cabId)=>({
                url:`${CAB_URL}/${cabId}`,
                method:'DELETE',
            }),
            invalidatesTags:['cab']
        }),
        uploadCabImage:builder.mutation({
            query:(data)=>({
                url:`${UPLOAD_URL}`,
                method:'POST',
                body:data,
            })
        }),
        createReview:builder.mutation({
            query:(data)=>({
                url:`${CAB_URL}/${data.cabId}/reviews`,
                method:'POST',
                body:data,
            }),
            invalidatesTags:['Cab'],
        }),

    }),


});

export const{
    useGetCabsQuery,
    useGetCabDetailQuery,
    useCreateCabMutation,
    useUpdateCabMutation,
    useDeleteCabMutation,
    useUploadCabImageMutation,
    useCreateReviewMutation,
} = cabApiSlice;