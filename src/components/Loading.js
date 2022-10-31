import React from 'react'

function Loading({ loading, count }) {
    const simpleAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };
    
    return (
        <>
            {loading ? (
                <div className='loading'
                    >
                    <p className='loading__header'
                        >
                        LOADING
                    </p>
                </div>
            ) : (
                <> </>
            )}
        </>
    );
}

export default Loading;
