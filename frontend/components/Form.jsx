"use client";

import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  const [state, handleSubmit] = useForm("mpqyaqbz");
  const [service, setService] = React.useState("");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        if (!service) {
          e.preventDefault();
          toast.error("Please select a service");
          return;
        }
        handleSubmit(e);
      }}
      className="flex flex-col"
    >
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          minLength={3}
        />

        <Input name="email" type="email" placeholder="Email address" required />

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input
            name="phone"
            type="tel"
            placeholder="Phone number"
            required
            pattern="[0-9+\-\s]{8,15}"
          />

          <Select name="service" onValueChange={setService}>
            <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="hvac">HVAC</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="bms">BMS</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="service" value={service} required />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Textarea
          name="message"
          className="h-[180px] resize-none rounded-none"
          placeholder="Enter your message"
          required
          minLength={10}
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          type="submit"
          text={state.submitting ? "Sending..." : "Send message"}
          disabled={state.submitting}
        />
      </div>
    </form>
  );
};

export default Form;
