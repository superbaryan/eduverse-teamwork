
import { useState, useEffect } from "react";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  Calendar, 
  CheckCircle, 
  Clock, 
  FilePlus, 
  Grid, 
  List, 
  LogOut, 
  Menu,
  MessageSquare, 
  PlusCircle, 
  Search, 
  Settings,
  UserCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);

  const courses: CourseProps[] = [
    {
      id: "1",
      title: "Introduction to Computer Science",
      instructor: "Dr. James Wilson",
      subject: "Computer Science",
      schedule: "Mon, Wed, Fri • 10:00 AM",
      students: 45,
      progress: 68,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Advanced Mathematics",
      instructor: "Prof. Emily Chen",
      subject: "Mathematics",
      schedule: "Tue, Thu • 2:00 PM",
      students: 32,
      progress: 42,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Introduction to Psychology",
      instructor: "Dr. Robert Brown",
      subject: "Psychology",
      schedule: "Mon, Wed • 11:30 AM",
      students: 56,
      progress: 75,
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "World History: Modern Era",
      instructor: "Prof. Sarah Johnson",
      subject: "History",
      schedule: "Tue, Thu • 9:00 AM",
      students: 38,
      progress: 30,
      image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "5",
      title: "Organic Chemistry",
      instructor: "Dr. Michael Lee",
      subject: "Chemistry",
      schedule: "Mon, Wed, Fri • 1:30 PM",
      students: 29,
      progress: 50,
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "6",
      title: "Digital Marketing Strategies",
      instructor: "Prof. Jessica Martinez",
      subject: "Marketing",
      schedule: "Wed • 3:00 PM",
      students: 42,
      progress: 85,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop"
    },
  ];

  const upcomingAssignments = [
    {
      title: "Research Paper",
      course: "Introduction to Psychology",
      dueDate: "Tomorrow at 11:59 PM",
      urgent: true
    },
    {
      title: "Problem Set 4",
      course: "Advanced Mathematics",
      dueDate: "Friday at 5:00 PM",
      urgent: false
    },
    {
      title: "Lab Report",
      course: "Organic Chemistry",
      dueDate: "Next Monday at 9:00 AM",
      urgent: false
    }
  ];

  const announcements = [
    {
      course: "Introduction to Computer Science",
      message: "Office hours canceled this Thursday. Will hold virtual office hours instead.",
      timestamp: "2 hours ago"
    },
    {
      course: "Advanced Mathematics",
      message: "New study materials added for upcoming midterm exam.",
      timestamp: "Yesterday"
    }
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-border transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-8 h-8 bg-primary rounded-md"></span>
              <span className="text-xl font-medium">EduVerse</span>
            </div>
          </div>
          
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">Computer Science</div>
              </div>
            </div>
          </div>
          
          <nav className="p-2 flex-grow">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/dashboard")}>
                <Grid size={18} className="mr-2" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/courses")}>
                <Book size={18} className="mr-2" />
                Courses
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/assignments")}>
                <CheckCircle size={18} className="mr-2" />
                Assignments
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/calendar")}>
                <Calendar size={18} className="mr-2" />
                Calendar
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/messages")}>
                <MessageSquare size={18} className="mr-2" />
                Messages
              </Button>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/profile")}>
                <UserCircle size={18} className="mr-2" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/settings")}>
                <Settings size={18} className="mr-2" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => navigate("/")}>
                <LogOut size={18} className="mr-2" />
                Logout
              </Button>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 overflow-auto transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden mr-2">
                <Menu size={20} />
              </Button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-full bg-secondary pl-8 focus-visible:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell size={18} />
              </Button>
            </div>
          </div>
        </header>
        
        <div className="p-6">
          <Tabs defaultValue="overview">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-secondary/50">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => setView("grid")} className={view === "grid" ? "bg-secondary" : ""}>
                  <Grid size={16} />
                </Button>
                <Button variant="outline" size="sm" onClick={() => setView("list")} className={view === "list" ? "bg-secondary" : ""}>
                  <List size={16} />
                </Button>
              </div>
            </div>
            
            <TabsContent value="overview" className="mt-0 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Clock size={18} className="mr-2 text-primary" />
                      Upcoming Deadlines
                    </CardTitle>
                    <CardDescription>Assignments due soon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAssignments.map((assignment, index) => (
                        <div key={index} className="flex items-start space-x-3 pb-3 border-b last:border-0 last:pb-0">
                          <div className={`w-2 h-2 mt-1.5 rounded-full ${assignment.urgent ? 'bg-red-500' : 'bg-blue-500'}`} />
                          <div className="flex-1">
                            <p className="font-medium">{assignment.title}</p>
                            <p className="text-sm text-muted-foreground">{assignment.course}</p>
                            <div className="flex items-center mt-1">
                              <Clock size={14} className="mr-1 text-muted-foreground" />
                              <span className={`text-xs ${assignment.urgent ? 'text-red-500 font-medium' : 'text-muted-foreground'}`}>
                                {assignment.dueDate}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-3 text-primary">
                      <CheckCircle size={16} className="mr-2" />
                      View All Assignments
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <MessageSquare size={18} className="mr-2 text-primary" />
                      Recent Announcements
                    </CardTitle>
                    <CardDescription>Updates from your courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {announcements.map((announcement, index) => (
                        <div key={index} className="pb-3 border-b last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium">{announcement.course}</p>
                            <Badge variant="outline" className="text-xs">
                              {announcement.timestamp}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {announcement.message}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-3 text-primary">
                      <MessageSquare size={16} className="mr-2" />
                      View All Announcements
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Calendar size={18} className="mr-2 text-primary" />
                      This Week
                    </CardTitle>
                    <CardDescription>Your upcoming schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 pb-3 border-b">
                        <div className="bg-primary/10 text-primary font-medium flex flex-col items-center justify-center w-12 h-12 rounded-lg">
                          <span className="text-xs">MON</span>
                          <span>12</span>
                        </div>
                        <div>
                          <p className="font-medium">Computer Science Lecture</p>
                          <p className="text-xs text-muted-foreground">10:00 AM - 11:30 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 pb-3 border-b">
                        <div className="bg-primary/10 text-primary font-medium flex flex-col items-center justify-center w-12 h-12 rounded-lg">
                          <span className="text-xs">TUE</span>
                          <span>13</span>
                        </div>
                        <div>
                          <p className="font-medium">Math Study Group</p>
                          <p className="text-xs text-muted-foreground">2:00 PM - 4:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 text-primary font-medium flex flex-col items-center justify-center w-12 h-12 rounded-lg">
                          <span className="text-xs">WED</span>
                          <span>14</span>
                        </div>
                        <div>
                          <p className="font-medium">Psychology Midterm</p>
                          <p className="text-xs text-muted-foreground">11:30 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-3 text-primary">
                      <Calendar size={16} className="mr-2" />
                      View Full Calendar
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Recent Courses</h2>
                  <Button variant="ghost" className="text-primary">
                    <PlusCircle size={16} className="mr-2" />
                    Add Course
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.slice(0, 3).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="mt-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">My Courses</h2>
                <Button className="bg-primary hover:bg-primary/90">
                  <PlusCircle size={16} className="mr-2" />
                  Join New Course
                </Button>
              </div>
              
              {view === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredCourses.map((course) => (
                    <div key={course.id} className="flex flex-col sm:flex-row bg-white border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="sm:w-48 h-32 sm:h-auto">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <Badge>{course.subject}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                          
                          <div className="flex items-center mt-2 text-sm text-muted-foreground">
                            <Calendar size={14} className="mr-1" />
                            <span className="mr-4">{course.schedule}</span>
                            <Users size={14} className="mr-1" />
                            <span>{course.students} students</span>
                          </div>
                          
                          {course.progress !== undefined && (
                            <div className="mt-3">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary rounded-full" 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4">
                          <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
                            <a href={`/courses/${course.id}`}>
                              <Book size={14} className="mr-2" />
                              View Course
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="assignments" className="mt-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">My Assignments</h2>
                <Button className="bg-primary hover:bg-primary/90">
                  <FilePlus size={16} className="mr-2" />
                  Create Assignment
                </Button>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Research Paper</CardTitle>
                      <Badge className="bg-red-500 hover:bg-red-600">Due Tomorrow</Badge>
                    </div>
                    <CardDescription>Introduction to Psychology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Write a 5-page research paper on a topic of your choice related to developmental psychology.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={14} className="mr-1" />
                        <span>Due Sept 15, 11:59 PM</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Submit Assignment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Problem Set 4</CardTitle>
                      <Badge variant="outline">Due in 3 days</Badge>
                    </div>
                    <CardDescription>Advanced Mathematics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete problems 1-15 in Chapter 7. Show all work for full credit.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={14} className="mr-1" />
                        <span>Due Sept 18, 5:00 PM</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Submit Assignment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Lab Report</CardTitle>
                      <Badge variant="outline">Due in 5 days</Badge>
                    </div>
                    <CardDescription>Organic Chemistry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Write a detailed report on the experiment conducted in last week's lab session.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={14} className="mr-1" />
                        <span>Due Sept 20, 9:00 AM</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Submit Assignment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Midterm Project</CardTitle>
                      <Badge variant="outline">Due in 2 weeks</Badge>
                    </div>
                    <CardDescription>Introduction to Computer Science</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Develop a simple web application using HTML, CSS, and JavaScript that demonstrates key concepts learned in class.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock size={14} className="mr-1" />
                        <span>Due Sept 30, 11:59 PM</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
