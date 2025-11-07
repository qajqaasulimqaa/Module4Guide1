import { useEffect, useRef, useState } from "react"
import pearls from "../RoundPearls.png"; 


export default function GrowImage() {
  const imgRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting))
      },
      { threshold: 0.5 }
    )

    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="h-[100vh] w-full flex items-center justify-center absolute -z-10 ">
      <img ref={imgRef} src={pearls}
        className={`transition-transform duration-[800ms] ${
          isVisible ? "scale-125" : "scale-100"
        }`}
      />
    </div>
  )
}
