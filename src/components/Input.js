
function Input({name,children,onChange}) {
    return (
        <div className="mb-6" >
            <label className="mx-2 mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={name}>{children}</label>
            <input className="mx-2 mt-3 bg-gray-50 border focus:outline-none  border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name={name} id={name} onChange={onChange}></input>
        </div>
    );
}

export default Input;