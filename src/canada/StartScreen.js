import React from 'react';
import ShuffleOptions from './ShuffleOptions';

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

  return (
    <div className="start">
      {Array.from({ length: numBatches }).map((_, i) => (
        <button
          key={i}
          className="btn btn-ui"
          onClick={() => handleStart(i * batchSize, (i + 1) * batchSize)}
        >
          Test {i + 1}
        </button>
      ))}
    </div>
  );
}

export default StartScreen;

// import React from 'react';
// import ShuffleOptions from './ShuffleOptions';

// function StartScreen({ numQuestions, questions, dispatch }) {
//   const handleStart = () => {
//     const shuffledQuestions = questions.map((question) =>
//       ShuffleOptions(question)
//     );
//     dispatch({ type: 'start', payload: shuffledQuestions });
//   };

//   return (
//     <div className="start">
//       <button className="btn btn-ui" onClick={handleStart}>
//         Test 1
//       </button>
//       <button className="btn btn-ui" onClick={handleStart}>
//         Test 2
//       </button>
//     </div>
//   );
// }

// export default StartScreen;
