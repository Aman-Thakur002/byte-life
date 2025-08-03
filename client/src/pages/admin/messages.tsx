import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactMessage } from "@/types/portfolio";
import { format } from "date-fns";

const MessagesPage = () => {
  const { data: messages, isLoading, error } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact/messages"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/contact/messages");
      return res.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching messages</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Received At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages?.map((message) => (
            <TableRow key={message.id}>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell>{message.message}</TableCell>
              <TableCell>
                {format(new Date(message.createdAt), "PPP p")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MessagesPage;
