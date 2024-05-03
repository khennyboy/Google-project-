import { Children, createContext, useState, React } from "react";


export const ResultsContext = React.createContext()

const baseUrl = 'https://google-search74.p.rapidapi.com/'

export const ResultContextProvider = ({Children})=>{
    const [results,  setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('JS Mastery')

    const getResults = async (type) =>{
        setIsLoading(true)
        const respone = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.emv.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
              }
        })
        const data = await respone.json()

        if(type.includes('/new')){
            setResults( data.entries)
        }
        else if(data.includes('/images')){
            setResults( data.image_results)
        }
        else{
            setResults( data.results)
        }
        
        setIsLoading(false)
    }
    return (
        <ResultsContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {Children}
        </ResultsContext.Provider>
    )
}

