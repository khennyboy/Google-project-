import { useContext, useEffect } from "react";
import { globalContext } from "../contexts/contextProvider";

const Error = () => {
  
    let {values} = useContext(globalContext)
    return (
        <div>
            {
                values.error && (
                values.error
            )
            }
        </div>
      );
}
 
export default Error;