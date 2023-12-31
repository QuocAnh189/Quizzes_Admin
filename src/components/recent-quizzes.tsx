"use client";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

import QuizType from "src/types/quizType";

interface RecentQuizzesProps {
  quizzes: QuizType[];
}
export function RecentQuizzes(props: RecentQuizzesProps) {
  const { quizzes } = props;

  return (
    <div className="space-y-8">
      {quizzes &&
        quizzes.slice(0, 5).map((quiz, index) => (
          <div key={index} className="flex items-center">
            <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
              <AvatarImage
                className="object-cover"
                src={
                  quiz.backgroundImage
                    ? quiz.backgroundImage
                    : "/avatars/02.png"
                }
                alt="Avatar"
              />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{quiz.name}</p>
              <p className="text-sm text-muted-foreground">
                {quiz.creator.mail}
              </p>
            </div>
            <div className="ml-auto font-medium">
              {+quiz.questionList.length} Question
            </div>
          </div>
        ))}
    </div>
  );
}
