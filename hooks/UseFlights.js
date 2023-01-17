import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectDestination, selectFromDate, selectOrigin, selectToDate } from "../slices/flightSlice";


const getFlights = async (origin,destination,fromDate,toDate) => {
    try {
        if(!origin || !destination || !fromDate || !toDate) return;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.SKY_SCANNER_API,
                'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            }
        };
        
        const response = await fetch(`https://skyscanner44.p.rapidapi.com/search-extended?adults=1&origin=${origin?.iata}&destination=${destination?.iata}&departureDate=${moment(fromDate).format('YYYY-MM-DD')}&returnDate=${moment(toDate).format('YYYY-MM-DD')}&currency=AUD&stops=0%2C1%2C2&duration=50&startFrom=00%3A00&arriveTo=23%3A59&returnStartFrom=00%3A00&returnArriveTo=23%3A59`, options)
        const data = await response.json()
        return data?.itineraries?.results;    
    }
    catch (err) {
        throw(err)
    }
}


export const UseFlights = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const fromDate = useSelector(selectFromDate)
    const toDate = useSelector(selectToDate)
    const { isLoading, data } = useQuery(['allFlights'], async () => await getFlights(origin,destination,fromDate,toDate), {
        keepPreviousData: true,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    }) 

    return { isLoading, data }
}