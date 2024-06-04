import React, { useState } from 'react';

function Main() {

    const [ tracking, setTrack ] = useState(true)
  return (
    <>

                {

        tracking ?
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                             Conectando destinos, entregando sonrisas.
                            </h1>

                            <div className="mt-8 space-y-5">
                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Rápido</span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Confianza</span>
                                </p>

                                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span className="mx-2">Segura</span>
                                </p>
                            </div>
                        </div>

                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Rastrea
                        </h1>
                        <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">


                            <form className="flex flex-col lg:flex-row">
                                <input type="email" placeholder="Digita el número de guía" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" onClick={()=>setTrack(!tracking)} className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Consultar
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo" />
                    </div>

                    
                </div>
                    :
                    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    
                        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12 Febrero 2024</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Recepción del paquete en la bodega</h3>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">El paquete se escanea y se registra en el sistema de seguimiento de la empresa.</p>                           
                            </li>
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">14 Febrero 2024</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Clasificación y procesamiento del paquete</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">El paquete se clasifica según su destino y el tipo de servicio seleccionado por el remitente.
    Se asigna un código de seguimiento único al paquete para realizar su seguimiento durante el transporte.</p>
                            </li>
                            <li class="ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">14 Febrero 2024</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Preparación para la entrega</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Los paquetes se organizan en rutas de entrega según la ubicación y la prioridad.
    Se carga el paquete en el vehículo de entrega asignado, junto con otros paquetes de la misma ruta.</p>
                            </li>

                            <li class="ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">15 Febrero 2024</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Transporte hacia el destino</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">El vehículo de entrega se desplaza hacia la zona de entrega, siguiendo la ruta planificada.
    Durante el transporte, los paquetes se mantienen seguros y protegidos para evitar daños.</p>
                            </li>
                        <button type="button" onClick={()=>setTrack(!tracking)} className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Atras
                                </button>
                        </ol>


                    </div>
                }


                



    </>
  );
}

export default Main;