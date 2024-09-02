import React from 'react';
import ShuffleOptions from './ShuffleOptions';
import { useTranslation } from 'react-i18next';

function StartScreen({ numQuestions, questions, dispatch }) {
  const handleStart = (startIndex, endIndex) => {
    const batchQuestions = questions.slice(startIndex, endIndex);
    const shuffledQuestions = batchQuestions.map((question) =>
      ShuffleOptions(question)
    );
    dispatch({ type: 'start', payload: shuffledQuestions });
  };

  // Calculate the number of batches
  const batchSize = 20;
  const numBatches = Math.ceil(numQuestions / batchSize);

  const { t, i18n } = useTranslation();

  return (
    <div className="start">
      {Array.from({ length: numBatches }).map((_, i) => (
        <button
          key={i}
          className="btn btn-ui"
          onClick={() => handleStart(i * batchSize, (i + 1) * batchSize)}
        >
          {t('test_button')} {i + 1}
        </button>
      ))}
    </div>
  );
}

export default StartScreen;
