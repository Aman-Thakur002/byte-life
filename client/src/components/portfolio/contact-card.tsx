import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactCard() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-gray-500" size={20} />,
      label: "amandhakare337@gmail.com",
      href: "mailto:amandhakare337@gmail.com"
    },
    {
      icon: <Phone className="text-gray-500" size={20} />,
      label: "+91 9315589061",
      href: "tel:+919315589061"
    },
    {
      icon: <MapPin className="text-gray-500" size={20} />,
      label: "Noida, UP, India",
      href: null
    }
  ];

  return (
    <div id="contact" className="glass-card rounded-3xl p-8 h-full transition-all duration-500 group">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Send className="text-gray-500" size={24} />
          <h2 className="text-2xl font-bold">Let's Work Together</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-400">
              I'm always interested in hearing about new opportunities and challenging projects. Let's discuss how we can work together.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-400">
                  {info.icon}
                  {info.href ? (
                    <a href={info.href} className="hover:text-white transition-colors duration-300">
                      {info.label}
                    </a>
                  ) : (
                    <span>{info.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Your Email" 
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Your Message" 
                        rows={4}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
