import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useQuery, useMutation, gql } from '@apollo/client';
import FormInput from '../FormInput/FormInput';
import CheckboxGroup from '../FormCheckbox/FormCheckbox';
import QuestionDto from '../../type/QuestionDto';
import FormDropdown from '../FormDropdown/FormDropdown';
import AnswerDto from '../../type/AnswerDto';
import './FormComponent.scss';
import FormText from '../../type/enums/FormText';
import FormType from '../../type/enums/FormType';
import FormDefaultValue from './FormDefaultValues';
import ModalWindow from '../ModalWindow/ModalWindow';

const GET_QUESTIONS = gql`
  query GetQuestions {
    getQuestions {
      id
      text
      description
      placeholder
      options
      type
    }
  }
`;

const SUBMIT_FORM = gql`
  mutation SubmitForm($input: [QuestionInput]) {
    submitForm(input: $input)
  }
`;

const FormComponent: React.FC = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const methods = useForm<AnswerDto[]>({
    defaultValues: FormDefaultValue
  });
  const { register, handleSubmit, reset } = methods;

  const { data, error } = useQuery<{ getQuestions: QuestionDto[] }>(GET_QUESTIONS);
  const [submitForm, { error: mutationError }] = useMutation(SUBMIT_FORM);

  const onSubmit: SubmitHandler<AnswerDto[]> = async (formData: AnswerDto[]) => {
    const input = Object.entries(formData).map(([questionId, answer]) => ({
      questionId,
      answer
    }));
    try {
      await submitForm({ variables: { input } });
      // eslint-disable-next-line
      console.log('Form submitted', input);
      setIsSubmit(true);
      reset();
    } catch (catchError) {
      console.error('Error submitting form', catchError);
    }
  };

  const closeModal = () => {
    setIsSubmit(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="form-title">{FormText.FORM_TITLE}</h1>
        <p className="form-description">{FormText.FORM_DESCRIPTION}</p>
        {data?.getQuestions.map((question) => (
          <div key={question?.id} className="item">
            <h3 className="item-question">{question?.text}</h3>
            <p className="item-description">{question?.description}</p>

            {question?.type === FormType.CHECKBOX ? (
              <CheckboxGroup
                name={question?.id}
                options={question?.options ? question.options : []}
              />
            ) : null}

            {question?.type === FormType.DROPDOWN ? (
              <FormDropdown
                name={question?.id}
                options={question.options ? question.options : []}
              />
            ) : null}

            {question?.type === FormType.TEXT ? (
              <FormInput
                name={question?.id}
                type="text"
                required
                register={register}
                placeholder={question?.placeholder}
              />
            ) : null}
          </div>
        ))}

        <button type="submit">{FormText.FORM_BUTTON}</button>
        {mutationError ? <p>Error submitting form: {mutationError.message}</p> : null}
        {error ? <p>Error: {error.message}</p> : null}
      </form>
      {isSubmit ? <ModalWindow onClose={closeModal} /> : null}
    </FormProvider>
  );
};

export default FormComponent;
