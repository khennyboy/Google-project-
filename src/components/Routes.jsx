import React from 'react';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import App from '../App';
import Images from './images';
import Videos from './videos';
import News from './news';
import Result from './Result';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='search' element={<Result/>}/>
      <Route path='images' element={<Images/>}/>
      <Route path='videos' element={<Videos/>}/>
      <Route path='news' element={<News/>}/>
    </Route>
  )
)

export const Routes = () => {
  return (
  <div>
      <RouterProvider router={router}/>
  </div>
  )
}
