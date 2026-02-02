"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Send, Loader2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("Failed to send message")
      }
    } catch (err) {
      alert("Something went wrong")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-mono text-sm">Contact</span>
          <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-muted-foreground">
              If you'd like to discuss a project or just say hi,
              feel free to reach out!
            </p>

            <div className="flex items-center gap-4">
              <Mail />
              <a href="mailto:ghanvat.rohit.ai023@gmail.com">
                ghanvat.rohit.ai023@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card border rounded-2xl p-8">

            {submitted ? (
              <div className="text-center py-12">
                <MessageSquare size={32} className="mx-auto mb-4 text-primary"/>
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p>I'll get back to you soon.</p>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />

                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">

                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}

                </Button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
