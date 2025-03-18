
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarClock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export interface CourseProps {
  id: string;
  title: string;
  instructor: string;
  subject: string;
  schedule: string;
  students: number;
  progress?: number;
  image: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">{course.subject}</Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">
          <Link to={`/courses/${course.id}`} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{course.instructor}</p>
      </CardHeader>
      
      <CardContent className="space-y-2 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarClock size={16} className="mr-2" />
          <span>{course.schedule}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users size={16} className="mr-2" />
          <span>{course.students} students</span>
        </div>
        
        {course.progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full bg-primary/90 hover:bg-primary">
          <Link to={`/courses/${course.id}`}>
            <BookOpen size={16} className="mr-2" />
            View Course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
