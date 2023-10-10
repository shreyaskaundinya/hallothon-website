import { useState } from "react";
import Timer from "../../src/components/Timer"

const Countdown = () => {

    const currDate = new Date();
    const DateToBe = new Date('2023/10/14 10:00:00');

    const [show, setShow] = useState(false)

    if (currDate == DateToBe) {
        setShow(true);
    }

    
        return (
            <>
                <div>
                    <h1 className = "text-center my-10 text-5xl">All The Best!</h1>
                    <Timer setdone = {false} date = {'2023/10/15 10:00:00'} />
                </div>

            </>
        )
    }

export default Countdown