interface QuestionDto {
  id: string;
  text: string;
  type: string;
  description: string;
  placeholder: string;
  options: string[] | null;
}

export default QuestionDto;
