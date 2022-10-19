import {useState, useEffect} from 'react'
function Timer(){
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear()
        const difference = new Date('2022/11/09 23:59:59') - new Date()
        let timeLeft = []
    
        if (difference > 0) {
          timeLeft = [
            Math.floor(difference / (1000 * 60 * 60 * 24)),
            Math.floor((difference / (1000 * 60 * 60)) % 24),
            Math.floor((difference / 1000 / 60) % 60),
            Math.floor((difference / 1000) % 60),
          ]
        }
    
        return timeLeft
      }
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])   


    return(
        <div className="w-full bg-black timer-container flex justify-around align-middle">
            <div><span>{timeLeft[0]<10?'0'+timeLeft[0]:timeLeft[0]}</span> Days</div>
            <div><span>{timeLeft[1]<10?'0'+timeLeft[1]:timeLeft[1]}</span> Hours</div>
            <div><span>{timeLeft[2]<10?'0'+timeLeft[2]:timeLeft[2]}</span> Minutes</div>
            <div><span>{timeLeft[3]<10?'0'+timeLeft[3]:timeLeft[3]}</span> Seconds</div>
        </div>
    )
}

export default Timer;