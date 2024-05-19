"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  subject: z.string().min(1, { message: "Subject is required." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  contenido: z.string().min(1, { message: "Contenido is required." }),
})

export function SendEmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      contenido: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tema</FormLabel>
              <FormControl>
                <Input placeholder="Cooperación / Solicitud de demo / Agendar visita" {...field} />
              </FormControl>
              <FormDescription>
                De qué tema nos quieres hablar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Pepito Perez" {...field} />
              </FormControl>
              <FormDescription>
                Cuéntanos quién eres.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="tu-email@email.com" {...field} />
              </FormControl>
              <FormDescription>
                Te responderemos a este correo
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contenido"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Contenido</FormLabel>
              <FormControl>
                <Input style={{ height: "10vh" }} placeholder="Me gustaría trabajar con ustedes en ..." {...field} />
              </FormControl>
              <FormDescription>
                Cuéntanos que nos quieres decir 😁, estaremos encantados de responder y ayudar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
    </div>
  )
}