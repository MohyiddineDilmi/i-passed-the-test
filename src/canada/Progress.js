import { useTranslation } from 'react-i18next';

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  const { t, i18n } = useTranslation();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        {t('question')} <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
