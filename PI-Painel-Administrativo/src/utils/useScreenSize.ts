import { useEffect, useState } from 'react'

export function useScreenSize() {
    function getWindowSize() {
        const { innerWidth, innerHeight } = window

        return { innerWidth, innerHeight }
    }

    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return windowSize
}
