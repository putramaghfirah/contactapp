import React from 'react'

const AddPage = (): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center justify-around mt-6 sm:w-full">
      <section className="w-96 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg mb-3 font-semibold text-gray-700 capitalize dark:text-white">
          Add Data Contact
        </h2>
        <form>
          <div className="flext items-center justify-center flex-row">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Name
              </label>
              <input
                id="username"
                name="nama"
                type="text"
                className="my-3 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="noHp"
              >
                NoHp
              </label>
              <input
                name="nohp"
                id="noHp"
                type="text"
                className="my-3 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email
              </label>
              <input
                name="email"
                id="emailAddress"
                type="email"
                className="my-3 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddPage
