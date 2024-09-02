import { useTranslation } from 'react-i18next';

function NextButton({ dispatch, answer, index, numQuestions }) {
  const { t, i18n } = useTranslation();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        {t('next_button')}
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        {t('finish_button')}
      </button>
    );
}

export default NextButton;
