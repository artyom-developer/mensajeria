import React, { useState } from 'react';

function Contact() {

    const [ success, setSuccess ] = useState(false);
  return (
 
    <section class="min-h-screen bg-white dark:bg-gray-900 lg:flex " style={{justifyContent:'center'}}>

        {
            success ?
            <h1>
                ¡Gracias por ponerte en contacto con nosotros!

                Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo lo antes posible para atender tu consulta.
            </h1> 
            :
            <form>
                <div class="-mx-2 md:items-center md:flex">
                    <div class="flex-1 px-2">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre completo</label>
                        <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="flex-1 px-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div class="w-full mt-4">
                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mensaje</label>
                    <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                </div>

                <button onClick={()=>setSuccess(!success)} class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Enviar
                </button>
            </form>

        }
 
 
    </section>
 
  );
}

export default Contact;