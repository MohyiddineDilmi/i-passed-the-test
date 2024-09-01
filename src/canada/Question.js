import Options from './Options';
import { useTranslation } from 'react-i18next';

function Question({ question, dispatch, answer }) {
  const { i18n } = useTranslation();

  return (
    <div className="question_container">
      <h4>{question.question[i18n.language]}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
