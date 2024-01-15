import './index.scss';

const AnimatedLetters = ({letterClass,stringArray, index}) => {
    return (
        <span>
            {
                stringArray.map((singleCharacter, i) => (
                    <span key={singleCharacter + i} className={`${letterClass} _${i + index}`}>
                        {singleCharacter}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;