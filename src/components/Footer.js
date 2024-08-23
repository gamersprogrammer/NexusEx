import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8 flex flex-row justify-between px-8">
        <div className="flex flex-row justify-between w-full">
            <p>© 2024 Nexus. All rights reserved.</p>
            <div className="flex flex-row justify-center">
                <NavLink to={'/privacy'} className="ms-3 text-base sm:text-lg md:text-xl lg:text-2xl sm:ms-4 md:ms-5 mx-2 text-white hover:text-blue-500">
                    Privacy Policy
                </NavLink>
                <NavLink to={'/terms-and-conditions'} className="ms-3 text-base sm:text-lg md:text-xl lg:text-2xl sm:ms-4 md:ms-5 text-white hover:text-blue-500">
                    Terms of Service
                </NavLink>
            </div>
        </div>
    </footer>

    </>
  
  )
}

export default Footer