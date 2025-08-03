import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to the Admin Panel</CardTitle>
        <CardDescription>
          Here you can manage your portfolio content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Select a section from the sidebar to start managing your content.</p>
      </CardContent>
    </Card>
  );
};

export default DashboardPage;
