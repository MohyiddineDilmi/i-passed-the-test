import { useTranslation } from 'react-i18next';

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  const { t, i18n } = useTranslation();

  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 0 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <div className="result_container">
      <p className="result">
        <span>{emoji}</span> {t('score')} : <strong>{points}</strong> / {maxPossiblePoints} | {Math.ceil(percentage)}
        %
      </p>
      {/* <p className="highscore">(Highscore: {highscore} points)</p> */}
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        {t('restart_button')}
      </button>
    </div>
  );
}

export default FinishScreen;
