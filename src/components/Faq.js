import { faqs } from '../../utils/faqs';
import FaqCard from './FaqCard';

function Faq() {
    return (
        <div className='max-w-6xl mx-auto my-56' >
            <div className='faq'>
                <div className='w-screen'>
                    <h1 className='font-bold text-left  sm: text-step-9 sm: px-4 md:text-step-8' id='faq'>
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
