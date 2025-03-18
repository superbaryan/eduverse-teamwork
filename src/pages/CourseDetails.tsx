
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calendar, FileText, MessageSquare, Users, Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

// Mock data for a single course
const courseData = {
  "1": {
    id: "1",
    title: "Introduction to Computer Science",
    instructor: "Dr. James Wilson",
    subject: "Computer Science",
    schedule: "Mon, Wed, Fri • 10:00 AM",
    students: 45,
    progress: 68,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    description: "This course provides a broad introduction to computer science and programming. You'll learn fundamental concepts of computing and develop the ability to solve problems using code.",
    syllabus: [
      { title: "Introduction to Programming Concepts", completed: true },
      { title: "Variables and Data Types", completed: true },
      { title: "Control Structures", completed: true },
      { title: "Functions and Procedures", completed: false },
      { title: "Data Structures", completed: false },
      { title: "Object-Oriented Programming", completed: false },
      { title: "Algorithms and Problem Solving", completed: false },
    ],
    announcements: [
      { title: "Midterm Exam Schedule", content: "The midterm exam will be held on October 15th at 10:00 AM in Room 301. Please bring your student ID and a calculator.", date: "2 days ago" },
      { title: "Project Deadline Extended", content: "Due to the upcoming holiday, the project deadline has been extended to November 5th. Use this extra time to refine your implementations.", date: "1 week ago" },
    ],
    assignments: [
      { title: "Programming Assignment 1", due: "Sep 20, 11:59 PM", status: "Submitted", grade: "90/100" },
      { title: "Programming Assignment 2", due: "Oct 5, 11:59 PM", status: "Pending", grade: null },
      { title: "Midterm Project", due: "Oct 30, 11:59 PM", status: "Not Started", grade: null },
    ]
  },
  "2": {
    id: "2",
    title: "Advanced Mathematics",
    instructor: "Prof. Emily Chen",
    subject: "Mathematics",
    schedule: "Tue, Thu • 2:00 PM",
    students: 32,
    progress: 42,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    description: "This course covers advanced mathematical concepts including calculus, linear algebra, and differential equations. Students will develop rigorous mathematical reasoning and problem-solving skills.",
    syllabus: [
      { title: "Limits and Continuity", completed: true },
      { title: "Derivatives and Applications", completed: true },
      { title: "Integration Techniques", completed: false },
      { title: "Series and Sequences", completed: false },
      { title: "Vector Calculus", completed: false },
      { title: "Differential Equations", completed: false },
    ],
    announcements: [
      { title: "Study Group Formation", content: "Please form study groups of 3-4 students for the upcoming collaborative assignment. Submit group member names by Friday.", date: "3 days ago" },
    ],
    assignments: [
      { title: "Problem Set 1", due: "Sep 15, 5:00 PM", status: "Graded", grade: "85/100" },
      { title: "Problem Set 2", due: "Sep 29, 5:00 PM", status: "Submitted", grade: null },
      { title: "Problem Set 3", due: "Oct 13, 5:00 PM", status: "Not Started", grade: null },
      { title: "Problem Set 4", due: "Oct 27, 5:00 PM", status: "Not Started", grade: null },
    ]
  },
  // Add other course data here as needed
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  if (!courseId || !courseData[courseId as keyof typeof courseData]) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-8 text-muted-foreground">The course you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/dashboard')}>Return to Dashboard</Button>
      </div>
    );
  }
  
  const course = courseData[courseId as keyof typeof courseData];

  const handleEnroll = () => {
    toast({
      title: "Enrolled Successfully",
      description: `You are now enrolled in ${course.title}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with course image */}
      <div className="relative h-64 md:h-80">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute top-4 left-4 text-white bg-black/20 hover:bg-black/40"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Dashboard
          </Button>
          <div className="max-w-7xl mx-auto w-full">
            <Badge className="mb-2">{course.subject}</Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{course.title}</h1>
            <div className="flex items-center text-white/80 text-sm">
              <span className="mr-4">Instructor: {course.instructor}</span>
              <Calendar size={14} className="mr-1" />
              <span className="mr-4">{course.schedule}</span>
              <Users size={14} className="mr-1" />
              <span>{course.students} students</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>
            
            <Button onClick={handleEnroll}>Enroll in Course</Button>
          </div>
          
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About This Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Your Progress</h3>
                    <span className="text-sm text-muted-foreground">{course.progress}% Complete</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.announcements.map((announcement, index) => (
                      <div key={index} className="pb-3 border-b last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{announcement.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {announcement.date}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {announcement.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                      <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{course.instructor}</h3>
                      <p className="text-sm text-muted-foreground">Professor of {course.subject}</p>
                      <p className="text-sm mt-2">
                        PhD in Computer Science with 15 years of teaching experience.
                        Research interests include machine learning, algorithms, and computational theory.
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        <MessageSquare size={14} className="mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Course Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <FileText className="h-6 w-6 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Course Syllabus</div>
                      <div className="text-sm text-muted-foreground">PDF, 2.3 MB</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <BookOpen className="h-6 w-6 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Textbook</div>
                      <div className="text-sm text-muted-foreground">Online Access</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 justify-start">
                    <Video className="h-6 w-6 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Lecture Recordings</div>
                      <div className="text-sm text-muted-foreground">All Sessions</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="syllabus">
            <Card>
              <CardHeader>
                <CardTitle>Course Syllabus</CardTitle>
                <CardDescription>
                  Complete each module to progress through the course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                        item.completed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {item.completed ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <span className="text-xs">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.title}</h3>
                      </div>
                      <Button 
                        size="sm" 
                        variant={item.completed ? "ghost" : "outline"}
                        className={item.completed ? "text-muted-foreground cursor-default" : ""}
                      >
                        {item.completed ? "Completed" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="assignments">
            <Card>
              <CardHeader>
                <CardTitle>Course Assignments</CardTitle>
                <CardDescription>
                  View and submit your assignments for this course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.assignments.map((assignment, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{assignment.title}</h3>
                        <Badge variant={
                          assignment.status === "Graded" ? "outline" :
                          assignment.status === "Submitted" ? "secondary" :
                          assignment.status === "Pending" ? "default" : "destructive"
                        }>
                          {assignment.status}
                        </Badge>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        <span>Due: {assignment.due}</span>
                      </div>
                      {assignment.grade && (
                        <div className="mt-2 text-sm font-medium">
                          Grade: {assignment.grade}
                        </div>
                      )}
                      <div className="mt-4 flex justify-end">
                        <Button 
                          variant="outline" 
                          size="sm"
                          disabled={assignment.status === "Graded" || assignment.status === "Submitted"}
                        >
                          {assignment.status === "Graded" ? "View Feedback" : 
                           assignment.status === "Submitted" ? "Submitted" : "Submit Assignment"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="discussions">
            <Card>
              <CardHeader>
                <CardTitle>Course Discussions</CardTitle>
                <CardDescription>
                  Engage with your classmates and instructors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                  <h3 className="mt-4 text-lg font-medium">No discussions yet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Be the first to start a discussion in this course.
                  </p>
                  <Button className="mt-4">Start a Discussion</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetails;
