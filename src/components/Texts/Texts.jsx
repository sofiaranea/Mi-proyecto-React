import './texts.css'

function Text ({firstTitle, secondTitle, thirdTitle, firstText, secondText, thirdText}) {
    return (
        <div>
            <h1 className='firstTitle'>{firstTitle}</h1>
            <h2 className='secondTitle'>{secondTitle}</h2>
            <h3 className='thirdTitle'>{thirdTitle}</h3>
            <p className='firstText'>{firstText}</p>
            <p className='secondText'>{secondText}</p>
            <p className='thirdText'>{thirdText}</p>
        </div>
    )
}

export default Text