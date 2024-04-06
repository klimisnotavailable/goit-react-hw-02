import { useState } from "react"

export default function Counter({children}) {
    const [click, setClick] = useState(0)

    const handleClicks = () => {
        setClick(click + 1)
    }

    return <button onClick={handleClicks} type="button">{children}</button>
}