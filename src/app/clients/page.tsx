import React from 'react'
import ClientCounter from './ClientCounter'

const ClientPage = () => {
  return (
    <>
    <h2 className='font-semibold text-2xl flex justify-center pt-8'>Manage Clients and Addresses</h2>
      <ClientCounter />
    </>
  )
}

export default ClientPage