'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@repo/design-system/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@repo/design-system/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@repo/design-system/components/ui/form'
import { Input } from '@repo/design-system/components/ui/input'
import { Separator } from '@repo/design-system/components/ui/separator'
import { Textarea } from '@repo/design-system/components/ui/textarea'
import type { Dictionary } from '@repo/internationalization'
import {
  Check,
  FileText,
  Loader2Icon,
  Mail,
  MoveRight,
  User
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { ContactSend } from '../actions/contact'

type ContactFormProps = {
  dictionary: Dictionary
}

const formSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'This field is required'
    })
    .min(3, {
      message: 'Name must be at least 3 characters'
    })
    .refine(
      (val) => {
        const word = val.trim().split(/\s+/)
        return word.length >= 2
      },
      {
        message: 'The full name must have at least 2 words'
      }
    ),
  email: z.email(),
  description: z
    .string()
    .nonempty({
      message: 'This field is required'
    })
    .refine(
      (val) => {
        const word = val.trim().split(/\s+/)
        return word.length >= 12
      },
      {
        message: 'The full name must have at least 2 words'
      }
    )
})

const defaultValues = {
  name: process.env.NODE_ENV === 'development' ? 'Rodrigo Ribeiro' : '',
  email: process.env.NODE_ENV === 'development' ? 'me+fake@rodrigo3d.com' : '',
  description:
    process.env.NODE_ENV === 'development'
      ? 'Schedule a consultation to discuss how we can help optimize your operations and drive your business growth.'
      : ''
}

export const ContactForm = ({ dictionary }: ContactFormProps) => {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true)
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    // showSubmittedData(data)
    const send = await ContactSend(data.name, data.email, data.description)
    toast(send.success ? send.success : send.error)

    setLoading(false)
  }

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="max-w-6xl-- container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                  {dictionary.web.contact.meta.title}
                </h4>
                <p className="text-muted-foreground max-w-sm text-left text-lg leading-relaxed tracking-tight">
                  {dictionary.web.contact.meta.description}
                </p>
              </div>
            </div>
            {dictionary.web.contact.hero.benefits.map((benefit, index) => (
              <div
                className="flex flex-row items-start gap-6 text-left"
                key={index}
              >
                <Check className="text-primary mt-2 h-4 w-4" />
                <div className="flex flex-col gap-1">
                  <p>{benefit.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-end">
            <div className="flex w-full max-w-md">
              <Card className="mx-auto h-full w-full">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                      Enter your email below to login to your account
                    </CardDescription>
                  </CardHeader>
                  <Separator className="mx-6 my-6" />
                  <CardContent>
                    <Form {...form}>
                      <form
                        id="contact-form"
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full name</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <User className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                                  <Input
                                    type="text"
                                    placeholder="Enter your full name"
                                    disabled={loading}
                                    className="pl-10"
                                    {...field}
                                  />
                                </div>
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
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                                  <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    disabled={loading}
                                    className="pl-10"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <FileText className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
                                  <Textarea
                                    placeholder="Enter contact description"
                                    className="h-30 resize-none pl-10 pt-2"
                                    disabled={loading}
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  </CardContent>
                  <Separator className="mx-6 my-6" />
                  <CardFooter>
                    <Button
                      className="gap-4"
                      type="submit"
                      form="contact-form"
                      disabled={loading}
                    >
                      {dictionary.web.contact.hero.form.cta}
                      {loading ? (
                        <Loader2Icon className="animate-spin" />
                      ) : (
                        <MoveRight className="h-4 w-4" />
                      )}
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
