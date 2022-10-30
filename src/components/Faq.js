import { faqs } from '../../utils/faqs';
import FaqCard from './FaqCard';

function Faq() {
    return (
        <div className='max-w-7xl mx-auto my-56' id='faq'>
            <div className='faq'>
                <div className='w-screen'>
                    <h1 className='text-6xl font-bold text-center md:text-step-8'>
                        FAQS
                    </h1>
                </div>
            </div>
            <div className='faq__container'>
                {faqs.map((f, id) => {
                    return <FaqCard q={f.q} ans={f.ans} key={f.q} />;
                })}
            </div>
        </div>
    );
}
export default Faq;
