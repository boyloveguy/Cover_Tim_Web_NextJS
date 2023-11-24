'use client'
import React from 'react'
import Navbar from '../components/navbar'
import HeaderHome from '../components/headerHome'
import BodyHome from '../components/bodyHonne/bodyHome'
import NavbarController from '../components/navbarController/navbarController'
import LoginPage from '../components/form2/LoginPage'
import RegisterForm from '../components/form/registerForm'

export default function home() {
  return (
    <div>
        {/* <Navbar></Navbar>
        <HeaderHome></HeaderHome>
        <BodyHome></BodyHome>
        <NavbarController></NavbarController> */}
        {/* <LoginPage></LoginPage> */}
        <RegisterForm></RegisterForm>
    </div>
  )
}
