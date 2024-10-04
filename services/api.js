import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://qevsgxbejlfpbwidwjgs.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldnNneGJlamxmcGJ3aWR3amdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NjgxMDgsImV4cCI6MjA0MzA0NDEwOH0.XAV_tt6_HkoU_58t47GMlqxL_-a_NNmGPkuNx4-5diE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFldnNneGJlamxmcGJ3aWR3amdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzQ2ODEwOCwiZXhwIjoyMDQzMDQ0MTA4fQ.GijLmTf4IEuB4dE_VCuAXcx-UaCDlvLAkOIKWqZeI5g"
    }
})
