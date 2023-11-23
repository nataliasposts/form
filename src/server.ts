import { ApolloServer, gql } from 'apollo-server';
import questions from './serverData/questions';
import AnswerDto from './type/AnswerDto';
import SubmitFormArgs from './type/SubmitFormArgs';

const typeDefs = gql`
  type Query {
    getQuestions: [Question]
  }

  type Mutation {
    submitForm(input: [QuestionInput]): String
  }

  type Question {
    id: ID!
    text: String!
    description: String!
    placeholder: String!
    options: [String]
    type: QuestionType!
  }

  enum QuestionType {
    TEXT
    CHECKBOX
    DROPDOWN
  }

  input QuestionInput {
    questionId: String!
    answer: String
  }
`;

const resolvers = {
  Query: {
    getQuestions: () => questions
  },
  Mutation: {
    submitForm: (_: unknown, args: SubmitFormArgs) => {
      const formattedInput: AnswerDto[] = args.input;
      // eslint-disable-next-line
      console.log('Form submission received:', formattedInput);
      return 'Form submitted successfully!';
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`Server is running at ${url}`);
});
