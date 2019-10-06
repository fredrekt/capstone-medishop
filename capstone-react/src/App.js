import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import Footer from './Footer'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import MedicinesComponent from './components/MedicinesComponent'
import ContactComponent from './components/ContactComponent'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Medicines from './components/Medicines'
import MedicineItem from './components/MedicineItem'
import Page404 from './components/Page404'
import Cart from './components/Cart'
import PaymentMethod from './components/PaymentMethod'
//admin side
import AdminLogin from './admin/AdminLogin'
import AdminReg from './admin/AdminRegistration'
import Admin from './admin/AdminController'
import { ProtectedRoute } from './auth/protectedroute'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/medicines" component={Login}/>
            <Route path="/contact" component={ContactComponent}/>
            <Route path="/sign-in" component={Login}/>
            <Route path="/sign-up" component={Register}/>
            <ProtectedRoute path="/medicines-shop" component={Medicines}/>
            <ProtectedRoute path="/meds/:item" component={MedicineItem}/>
            <ProtectedRoute path="/cart" component={Cart}/>
            <ProtectedRoute path="/payment-method" component={PaymentMethod} />
            <Route path="/admin-login" component={AdminLogin} />
            <Route path="/admin-register" component={AdminReg} />
            <Route path="/admin" component={Admin} />
            <Route path="*" component={Page404}/>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;