import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Il nome è richiesto"),
  email: z.string().email("Email non valida"),
  phone: z.string().min(5, "Il telefono è richiesto"),
  eventType: z.string().min(1, "Seleziona un tipo di evento"),
  message: z.string().min(10, "Il messaggio deve essere di almeno 10 caratteri"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Richiesta Inviata",
      description: "Ti ricontatteremo al più presto!",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
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
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
              Inizia a Pianificare <br/>
              <span className="text-primary font-script">Il Tuo Evento</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Siamo pronti ad ascoltare le tue idee e trasformarle in realtà. Contattaci per un preventivo personalizzato.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-black font-serif text-xl mb-1">Dove Siamo</h4>
                  <p className="text-gray-500">Corso Umberto I, 11,<br />84020 Aquara SA</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-black font-serif text-xl mb-1">Telefono</h4>
                  <p className="text-gray-500">393 209 3010</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-black font-serif text-xl mb-1">Email</h4>
                  <p className="text-gray-500">info@ontherocks.it</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-xl"
          >
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Il tuo nome" {...field} className="bg-white border-gray-200 focus:border-primary h-12" />
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
                        <FormLabel className="text-gray-700">Telefono</FormLabel>
                        <FormControl>
                          <Input placeholder="+39 ..." {...field} className="bg-white border-gray-200 focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="latua@email.com" {...field} className="bg-white border-gray-200 focus:border-primary h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Tipo di Evento</FormLabel>
                      <div className="relative mb-4">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white border-gray-200 focus:border-primary h-12">
                              <SelectValue placeholder="Seleziona un'opzione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="w-full rounded-sm border border-input px-4 py-3 text-sm bg-neutral-100 text-foreground shadow-lg relative z-20">
                            <SelectItem value="wedding">Matrimonio</SelectItem>
                            <SelectItem value="music">Evento Musicale</SelectItem>
                            <SelectItem value="party">Festa Privata / 18 Anni</SelectItem>
                            <SelectItem value="corporate">Evento Aziendale</SelectItem>
                            <SelectItem value="other">Altro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Messaggio</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Descrivi le tue esigenze..." {...field} className="bg-white border-gray-200 focus:border-primary min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white font-bold uppercase tracking-widest h-14 hover:bg-primary/90 transition-all text-sm rounded-lg shadow-lg shadow-primary/20"
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
