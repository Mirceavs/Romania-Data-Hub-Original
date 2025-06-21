import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { BarChart3, Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Adresa de email nu este validă"),
  password: z.string().min(6, "Parola trebuie să aibă cel puțin 6 caractere"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Autentificare reușită!",
      description: "Bun venit pe Romania Data Hub.",
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg border border-border bg-background rounded-xl">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <BarChart3 className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl text-foreground">
            Autentificare
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Accesează platforma Romania Data Hub
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@exemplu.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parolă</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Parola ta"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    className="accent-primary border-border rounded-sm"
                  />
                  <span>Ține-mă conectat</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Am uitat parola
                </a>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Se autentifică..." : "Autentificare"}
              </Button>
            </form>
          </Form>

          {/* Separator */}
          <Separator className="my-6" />

          {/* Extra options */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Nu ai un cont?{" "}
              <a href="#" className="text-primary hover:underline">
                Înregistrează-te aici
              </a>
            </p>

            <Link href="/">
              <Button variant="outline" className="w-full">
                Înapoi la pagina principală
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
