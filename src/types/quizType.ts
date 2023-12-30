import QuestionType, { InitQuestion } from './questionType';
import UserType, { InitUser } from './userType';


type QuizType = {
    _id: string;
    name: string;
    creator: UserType;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    tags: string[];
    isDraft: boolean;
    pointsPerQuestion: number;
    numberOfQuestions: number;
    importFrom: UserType | string | null;
    likesCount: string[];
    questionList: QuestionType[];
    createdAt?: string;
    updatedAt?: string;
    category: {
        _id: string;
        name: string;
    };
    grade: {
        _id: string;
        name: string;
    };
};

export const InitQuiz = {
    _id: '',
    name: '',
    creator: InitUser,
    description: '',
    backgroundImage: '',
    isPublic: true,
    pointsPerQuestion: 1,
    numberOfQuestions: 1,
    tags: [],
    isDraft: true,
    importFrom: InitUser,
    likesCount: [],
    questionList: [InitQuestion],
    category: {
        _id: '',
        name: ''
    },
    grade: {
        _id: '',
        name: ''
    },
    createdAt: '',
    updatedAt: ''
} as QuizType;

export default QuizType;
