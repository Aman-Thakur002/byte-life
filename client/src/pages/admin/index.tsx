import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Briefcase,
  Shapes,
  MessageSquare,
  Star,
  Settings,
  Bell,
} from "lucide-react";
import { Switch, Route, Link } from "wouter";
import DashboardPage from "./dashboard";
import ProjectsPage from "./projects";
import MessagesPage from "./messages";
import { useWebSocket } from "@/hooks/use-websocket";

const AdminPage = () => {
  useWebSocket();

  return (
    <div className="dark flex min-h-screen bg-gradient-portfolio">
      <Sidebar>
        <Sidebar.Header>
          <h2 className="text-lg font-semibold text-white">Admin Panel</h2>
        </Sidebar.Header>
        <Sidebar.Nav>
          <Link href="/admin">
            <Sidebar.Nav.Link href="/admin" icon={<LayoutDashboard />}>
              Dashboard
            </Sidebar.Nav.Link>
          </Link>
          <Link href="/admin/projects">
            <Sidebar.Nav.Link href="/admin/projects" icon={<Briefcase />}>
              Projects
            </Sidebar.Nav.Link>
          </Link>
          <Link href="/admin/skills">
            <Sidebar.Nav.Link href="/admin/skills" icon={<Shapes />}>
              Skills
            </Sidebar.Nav.Link>
          </Link>
          <Link href="/admin/experience">
            <Sidebar.Nav.Link href="/admin/experience" icon={<Briefcase />}>
              Experience
            </Sidebar.Nav.Link>
          </Link>
          <Link href="/admin/testimonials">
            <Sidebar.Nav.Link href="/admin/testimonials" icon={<Star />}>
              Testimonials
            </Sidebar.Nav.Link>
          </Link>
          <Link href="/admin/messages">
            <Sidebar.Nav.Link href="/admin/messages" icon={<MessageSquare />}>
              Messages
            </Sidebar.Nav.Link>
          </Link>
        </Sidebar.Nav>
        <Sidebar.Footer>
          <Link href="/admin/settings">
            <Sidebar.Nav.Link href="/admin/settings" icon={<Settings />}>
              Settings
            </Sidebar.Nav.Link>
          </Link>
        </Sidebar.Footer>
      </Sidebar>

      <main className="flex-1 p-6 text-white">
        <header className="flex items-center justify-between pb-6 border-b border-gray-700">
          <h1 className="text-3xl font-bold">Admin</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
        </header>

        <div className="py-6">
          <Switch>
            <Route path="/admin" component={DashboardPage} />
            <Route path="/admin/projects" component={ProjectsPage} />
            <Route path="/admin/messages" component={MessagesPage} />
            {/* Add other routes here */}
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
