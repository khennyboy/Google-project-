import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { globalContext } from './contextProvider';

const useSearch = () => {
  const { values, setValues } = useContext(globalContext); 
  const location = useLocation();
  const [text, setText] = useState('');
  const abortCont = new AbortController();

  useEffect(() => {
        return (()=>{
            abortCont.abort()
        })
  },[]); 

  const handleSearch = async () => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }
    try {
      setValues({
        ...values,
        data:[],
        searchInput: trimmedText,
        loading: true, 
      });

      const queryParams = new URLSearchParams({
        query: values.searchInput,
        type: location.pathname,
        limit: '20',
        related_keywords: 'true'
      });

      const response = await fetch(`https://google-search74.p.rapidapi.com/?${queryParams}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'google-search74.p.rapidapi.com',
          'x-rapidapi-key': '323b1296c6msh6f017023e0b67f8p1fe891jsn74f1e99f5eda', 
        },
        signal: abortCont.signal
      });

      if (response.ok) {
        const data = await response.json();
        setValues({
          ...values,
          searchInput: trimmedText,
          data: data.results, 
          loading: false,
          showLink: true
        });

        console.log('Search results:', data);
      } else {
        throw new Error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setValues({
        ...values,
        loading: false, 
        error: 'Failed to fetch search results. Please try again later.', 
      });
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const clearSearch = () => {
    setText('');
  };

  return {
    text,
    handleInputChange,
    clearSearch,
    handleSearch
  };
};

export default useSearch;
