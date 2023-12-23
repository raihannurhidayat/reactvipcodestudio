import {useRouteError} from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold">Opps!</h1>
      <p className="my-3 text-xl">Sorry, Something error</p>
      <p className="my-3 text-xl">
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage