import Link from "next/link";
function RegisterButton() {
    const handleClick = (e)=>{
        e.preventDefault();
        console.log("REG!!");
    }
    return (
        // <Link href='/register'>
            <button className='register-button' onClick={handleClick}>
                REG
            </button>
        // </Link>

    )
}

export default RegisterButton;