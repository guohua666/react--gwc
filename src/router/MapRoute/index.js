
import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

const MapRoute =({route})=>(

    <Switch>
     {
         route.map(item=>(
             item.path?
             <Route 
             key={item.path}
             path={item.path} 
             render={(props)=><item.component {...props} route={item.children}></item.component>}
             />
             :<Redirect key={item.from} {...item}></Redirect>
         ))
     }



    </Switch>
)
export default MapRoute
