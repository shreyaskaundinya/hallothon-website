import Stripe1 from '../assets/stripe1.svg';
import Image from 'next/image';
import css from '../../styles/Faq.module.css'
import { useState } from 'react';

function Faq() {
    const [open1, setopen1] = useState(0)
    const [open2, setopen2] = useState(0)
    const [open3, setopen3] = useState(0)
    const handleClick1 = (e) => {
        e.preventDefault()
        setopen1(open1 + 1)
    }
    const handleClick2 = (e) => {
        e.preventDefault()
        setopen2(open2 + 1)
    }
    const handleClick3 = (e) => {
        e.preventDefault()
        setopen3(open3 + 1)
    }

    return (
        <div>
            <div className={css.faq}>
                <div className={css.stripes}>
                    <Image src={Stripe1} alt='Stripe' />
                </div>
                <div className={css.faqtext}>
                    <h1>FAQS</h1>
                </div>
            </div>
            <div className={css.quest}>
                <button type="button" className={css.quest} onClick={handleClick1}><a className={css.arrow}>&#10148;</a> Question 1</button>
                <div className={css.ans}>
                    {open1 % 2 === 1 ? "What ever is the answer" : " "}
                </div>
            </div>
            <div className={css.quest}>
                <button type="button" className={css.quest} onClick={handleClick2}><a className={css.arrow}>&#10148;</a> Question 2</button>
                <div className={css.ans}>
                    {open2 % 2 === 1 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident, sunt in culpa qui officia deserunt " : ""}
                </div>
            </div>
            <div className={css.quest}>
                <button type="button" className={css.quest} onClick={handleClick3}><a className={css.arrow}>&#10148;</a> Question 3</button>
                <div className={css.ans}>
                    {open3 % 2 === 1 ? "What ever is the answer" : " "}
                </div>
            </div>
        </div>
    )
}
export default Faq;