import Link                    from "next/link"
import { useState, useEffect } from "react"
import instance                from "@/src/conn/axios"

export default function TableProject () {
  const [ rows, setRows ] = useState([])
  useEffect(() => {
    instance.get('/dycode/projects/')
    .then((res) => {
      setRows(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [rows])

  return(
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Name Project
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {row.id}
                </th>
                <td className="px-6 py-4">{row.user}</td>
                <td className="px-6 py-4">{row.name}</td>
                <Link href={row.field}><td className="px-6 py-4">{row.field}</td></Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}