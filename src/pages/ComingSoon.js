import React from 'react'
import BackButton from '../components/BackButton'

function ComingSoon() {
  return (
    <>
     <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
        <div className="text-white">
            <h1 className="text-4xl font-bold">Coming Soon</h1>
            <p className="mt-4 text-lg">We're working on something awesome!</p>
        </div>
        <div className="mt-8">
            <form action="#" method="post" className="flex items-center">
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none"
                required=""
            />
            <button
                type="submit"
                className="bg-blue-500 py-2 px-4 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
                Subscribe
            </button>
            </form>
            <p className="mt-2 text-gray-400 text-sm">
            Be the first to know when we launch!
            </p>
        </div>
     </div>
     <BackButton />

    </>
  )
}

export default ComingSoon