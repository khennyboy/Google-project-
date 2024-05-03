import React, { useContext, useEffect } from 'react'
import { ResultsContext } from '../context/ResultsContext'
import { useLocation } from 'react-router-dom'
import { Loading } from './Loading'
import ReactPlayer from 'react-player'

export const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useContext(ResultsContext)
    const location = useLocation()

    useEffect(()=>{
      if(searchTerm){
        if(location.pathname ==='/videos'){
          getResults('/search/q=${searchTerm} videos')
        }
        else{
          getResults('${location.pathname}/q=${searchTerm}&num=40')
        }
      }
      
    },[searchTerm, location.pathname])

    if(isLoading) return <Loading/>

    switch(location.pathname){
      case '/':
        return(
          <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
              {results?.map(({link, item}, index)=>{
                  return (
                    <div key={index} className='md:w-2 w-full'>
                        <a href={link} target='_blank' rel='norefferer'>
                          <p className='text-sm'>
                            {link.lenght > 30 ? link.substring(0, 30): 30}
                          </p>
                          <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'></p>
                        </a>
                    </div>
                  )
              })}
          </div>
        )
      case '/images':
        return(
          <div className='flex flex-wrap justify-center items-center'>
            {results?.map(({image, link:{href, title}}, index)=>{
              return (
                <a className='sm:p-3 p-5' href={href} target='_blank' rel='norefferer'>
                  <img src={image?.src} alt={title} loading='lazy'/>
                  <p className='w-36 break-words text-sm mt-2'>
                    {title}
                  </p>
                </a>
              )
            })}
          </div>
        )
      case '/news':
        return(
          <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
              {results?.map(({links, id, source, title})=>{
                  return (
                    <div key={id} className='md:w-2/5 w-full'>
                        <a href={links?.[0].href} target='_blank' rel='norefferer' className='hover:underline'>
                          <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                            {title}
                          </p>
                          </a>
                          <div className='flex gap-4'>
                            <a href={source?.href} target='_blank' rel = 'norefferer'>
                              {source?.href}
                            </a>
                          </div>
                    </div>
                  )
              })}
          </div>
        ) 
      case '/videos':
        return <div className='flex flex-wrap'>
                  {
                    results.map((video, index)=>{
                      return (
                        <div key={index} className='p-2'>
                            {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links[0].href} controls width='355px' height='200px'/>}
                        </div>
                      )
                    })
                  }
        </div>
    }

}
