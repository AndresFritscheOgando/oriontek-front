"use client"

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoLocateOutline } from "react-icons/io5";

const ClientCounter = () => {
    const [clientCounter, setClientCounter] = useState(0) 
    const [addressCounter, setAddressCounter] = useState(0)

  return (
    <section className="flex flex-col-2 items-center justify-center p-4 rounded-lg shadow-md text-black space-x-40 py-12">
      <div className="bg-gray-100 h-12 w-1/3 p-4 rounded-lg shadow-md flex items-center space-x-2 justify-between">
        <h2 className="text-2xl">Total Clients</h2>
        <span>
          {/* Placeholder for client count, replace with actual count logic */}{clientCounter}
        </span>
      </div>
      <div className="bg-gray-100 w-1/3 p-4 rounded-lg shadow-md flex items-center space-x-2 justify-between">
        <h2 className="text-2xl">Total Addreses</h2>
        <span>
          {/* Placeholder for client count, replace with actual count logic */}{addressCounter}
        </span>
      </div>
    </section>
  );
};

export default ClientCounter;
