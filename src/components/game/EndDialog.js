function EndDialog(props) {
    return (
        <div className='text-step-2'>
            {props.showDialog ? (
                <h1 className='border rounded-full px-8 py-2 border-hallored'>
                    Score : {props.score} | Best Score : {props.bestScore}
                </h1>
            ) : (
                <h1 className='border rounded-full px-8 py-2 border-hallored'>
                    Score : 0 | Best Score : 0
                </h1>
            )}
        </div>
    );
}

export default EndDialog;
