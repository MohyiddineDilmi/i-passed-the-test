import { useTranslation } from 'react-i18next';

function Options({ question, dispatch, answer }) {
  const { i18n } = useTranslation();
  const hasAnswered = answer !== null;

  return (
    <div>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={index}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option[i18n.language]}
        </button>
      ))}
    </div>
  );
}

export default Options;
