import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Sent",
      description: "We will get back to you shortly!",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-bold block mb-4">
              Contattaci
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Pianifichiamo il tuo <span className="text-primary italic">Evento</span>
            </h2>
            <p className="text-white/60 mb-12 text-lg">
              Pronto a creare qualcosa di straordinario? Contattaci per una consulenza o un preventivo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Vienici a trovare</h4>
                  <p className="text-white/50">Corso Umberto I, 11,<br />84020 Aquara SA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Chiamaci</h4>
                  <p className="text-white/50">393 209 3010</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-1">Orari di apertura</h4>
                  <p className="text-white/50">Aperto 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 w-full h-64 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.656916568164!2d15.207856315396554!3d40.444988979361715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133e8d7a1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sCorso%20Umberto%20I%2C%2011%2C%2084020%20Aquara%20SA%2C%20Italy!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5"
          >
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Mario Rossi" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50 h-12" />
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
                      <FormLabel className="text-white/80">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="mario@esempio.com" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Telefono</FormLabel>
                      <FormControl>
                        <Input placeholder="+39 393 209 3010" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50 h-12" />
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
                      <FormLabel className="text-white/80">Dettagli</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Parlaci del tuo evento..." {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50 min-h-[150px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-black font-bold uppercase tracking-widest h-14 hover:bg-primary/90 transition-all text-sm"
                >
                  Invia Richiesta <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
