import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Robert Json`;
    }, [title])
}

export default useTitle