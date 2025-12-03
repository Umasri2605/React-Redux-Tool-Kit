
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './app/store.js';   
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Counter from "./features/counter/Counter.jsx"
import Recipes from "./features/recipes/Recipes.jsx"
import Todolist from "./features/todolist/Todolist.jsx"
import Leads from './features/leads/Leads.jsx';
import AddLeads from './features/leads/AddLeads.jsx';
import EditLead from './features/leads/EditLead.jsx';
import AddRemarks from './features/leads/AddRemarks.jsx';
import Products from './features/products/Products.jsx';

const router = createBrowserRouter([
  {
       path: '/',
       element: <App />,
       children: [
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'recipes',
        element: <Recipes></Recipes>
      },
      {
        path: 'counter',
        element: <Counter></Counter>
      },
      {
        path: 'todolist',
        element: <Todolist></Todolist>
      },
      {
        path: 'leads',
        element: <Leads></Leads>
      },
      {
        path:'addLead',
        element:<AddLeads></AddLeads>
      },
      {
        path:'editLead/:id',
        element:<EditLead></EditLead>
      },
      {
        path:'addRemark/:id',
        element:<AddRemarks></AddRemarks>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);


