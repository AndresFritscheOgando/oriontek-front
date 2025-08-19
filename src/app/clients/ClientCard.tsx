"use client"

import { useQuery } from '@tanstack/react-query'
import { FiEdit, FiTrash } from "react-icons/fi"

type ClientProps = {
  id: number
  nombre: string
  email: string
  telefono?: string
  empresa?: string
  addressesCount?: number
}

const getClients = async (): Promise<ClientProps[]> => {
  const response = await fetch('http://localhost:5068/api/Cliente')
  if (!response.ok) {
    throw new Error('Failed to fetch clients')
  }
  return response.json()
}

const ClientCard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients,
  })

  if (isLoading) return <p>Loading clients...</p>
  if (isError) return <p>Error: {(error as Error).message}</p>

  return (
    <div className="grid gap-4 w-full md:w-2/3 mx-auto text-black">
      {data?.map((client) => (
        <div
          key={client.id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3"
        >
          {/* Top section: client info + actions */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">{client.nombre}</h2>
              <p className="text-sm text-gray-600">
                {client.email}
                {" " + client.telefono}
              </p>
              {client.empresa && (
                <p className="text-sm text-gray-500">{client.empresa}</p>
              )}
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <span>📍 {client.addressesCount ?? 0} addresses</span>
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-gray-700">
                  home
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border hover:bg-gray-100">
                <FiEdit className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-lg border hover:bg-gray-100">
                <FiTrash className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex justify-end gap-4 text-sm text-blue-600">
            <button className="hover:underline">+ Add Address</button>
            <button className="hover:underline">View Addresses</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ClientCard
