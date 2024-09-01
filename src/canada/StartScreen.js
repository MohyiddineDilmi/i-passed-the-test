import React from 'react';
import ShuffleOptions from './ShuffleOptions';

function StartScreen({ numQuestions, questions, dispatch }) {
  const handleStart = () => {
    const shuffledQuestions = questions.map((question) =>
      ShuffleOptions(question)
    );
    dispatch({ type: 'start', payload: shuffledQuestions });
  };

  return (
    <div className="start">
      <button className="btn btn-ui" onClick={handleStart}>
        Test 1
      </button>
      <button className="btn btn-ui" onClick={handleStart}>
        Test 2
      </button>
    </div>
  );
}

export default StartScreen;

// function StartScreen({ numQuestions, dispatch }) {
//   return (
//     <div className="start">
//       <button
//         className="btn btn-ui"
//         onClick={() => dispatch({ type: "start" })}
//       >
//         Test 1
//       </button>
//       <button
//         className="btn btn-ui"
//         onClick={() => dispatch({ type: "start" })}
//       >
//         Test 2
//       </button>
//     </div>
//   );
// }

// export default StartScreen;
