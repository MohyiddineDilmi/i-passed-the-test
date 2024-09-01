
function ShuffleOptions(question) {
    const options = question.options;
    const correctOption = question.correctOption;
  
    // Pair each option with its original index
    const pairedOptions = options.map((option, index) => ({ option, index }));
  
    // Shuffle the paired options
    pairedOptions.sort(() => Math.random() - 0.5);
  
    // Find the new index of the correct option
    const newCorrectOption = pairedOptions.findIndex(
      (pair) => pair.index === correctOption
    );
  
    // Extract the shuffled options
    const shuffledOptions = pairedOptions.map((pair) => pair.option);
  
    return {
      ...question,
      options: shuffledOptions,
      correctOption: newCorrectOption,
    };
  }


export default ShuffleOptions;


  