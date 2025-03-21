import { useRouteError } from "react-router-dom";

const Error =() =>{
const err = useRouteError()

    return(
        <>
            <p className="text-9xl">{err.status} : {err.statusText}</p>
        </>
    )
}

export default Error;