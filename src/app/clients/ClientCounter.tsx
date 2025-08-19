"use client"
const ClientCounter = () => {
  
  return (
    <section className="flex flex-col-2 items-center justify-center p-4 rounded-lg shadow-md text-black space-x-40 py-12">
      <div className="bg-gray-100 h-12 w-1/3 p-4 rounded-lg shadow-md flex items-center space-x-2 justify-between">
        <h2 className="text-2xl">Total Clients</h2>
        <span className="text-white">
        </span>
      </div>
      <div className="bg-gray-100 w-1/3 p-4 rounded-lg shadow-md flex items-center space-x-2 justify-between">
        <h2 className="text-2xl">Total Addreses</h2>
        <span>
        </span>
      </div>
    </section>
  );
};

export default ClientCounter;
