import {React} from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;


export default function MovieConfiguration(props) {

    function useConfig() {
        return useQuery("config", async () => {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
          );
          return data;
        });
      }

    const {isLoading, isError, data, error} = useConfig();

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error fetching Config: {error.message}</div>
    }

    console.log(data);
    
    return (
        <div>Config fetched.
            {props.setConfig(data)}

        </div>
    )

}