import Image    from 'next/image'
import Link     from 'next/link'
import student  from '@/pub/img/student.jpg'
import prueba    from '@/pub/img/prueba.gif'

export default function View() {
  return (
    <>
      <div className='flex flex-col justify-center items-center body '>
        <Link
          href="#"
          className="flex flex-col items-center h-60 bg-white border border-gray-200 mt-10 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            className="object-cover w-full h-60 rounded-t-lg h-100 md:w-48 md:rounded-none md:rounded-l-lg"
            src={ student }
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lista de estudiantes
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Aquí encontraras la lista de tus estudiantes, si deseas descargarlo dale clic al botón
            </p>
            <Link href="#" class="inline-flex items-center w-40 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Descargar
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center h-60 bg-white border border-gray-200 mb-10 mt-20 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            className="object-cover w-full h-60 rounded-t-lg h-100 md:w-48 md:rounded-none md:rounded-l-lg"
            src={ prueba }
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Proyectos
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Aquí podrás ver la lista de evaluaciones/proyectos de tus estudiantes, si deseas descargarlo dale clic al botón
            </p>
            <Link href="#" class="inline-flex items-center w-40 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Descargar
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </Link>
      </div>
    </>
  )
}
