import { useQuery } from '@tanstack/react-query'; 
import axios from 'axios';
 const fetchPosts = async () => 
    { const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
     return data;
     };

      export const useFetchPosts = () => {
         return useQuery(['posts'], fetchPosts, { staleTime: 300000, }); 
        };