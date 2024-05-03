import React from 'react'
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { Results } from './Results'
import App from '../App'


export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route  path='/' element={<App/>} >
        <Route path="search" element={<Results/>}/>
        <Route path="images" element={<Results/>}/>
        <Route path="new" element={<Results/>}/>
        <Route path="videos" element={<Results/>}/>
      </Route>
  )
)

// export default function RoutesCustom() {
//   return (
//     <div>RoutesCustom</div>
//   )
// }
