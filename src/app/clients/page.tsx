import React from 'react'
import ClientCounter from './ClientCounter'
import ClientCard from './ClientCard'

const ClientPage = () => {
  return (
    <>
    <h2 className='font-semibold text-2xl flex justify-center pt-8'>Manage Clients and Addresses</h2>
      <ClientCounter />
      <ClientCard/>
    </>
  )
}

export default ClientPage