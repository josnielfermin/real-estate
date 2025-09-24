import React, { useRef } from "react";
import { Content } from "../content";
import { Button } from "../ui/Button";
import Input from "../ui/Input";

export const Newsletter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = inputRef.current?.value;
    // Implement submission behavior or integrations later
    console.log("newsletter submit", email);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] text-white font-normal leading-[1.1]">
            {Content.newsletter.title}
          </h3>
          <h2 className="text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] text-white font-bold leading-[1.1]">
            {Content.newsletter.subtitle}
          </h2>
          <p className="mt-4 text-base-2 text-sm max-w-md">
            {Content.newsletter.description}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center justify-end">
          <div className="w-full md:w-[560px]">
            <Input
              ref={inputRef}
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
              leftIcon="icon-mail"
              bgTransparent
              radius="full"
              fullWidth
              className="placeholder:text-base-2"
            />
          </div>
          <div className="ml-4">
            <Button
              ariaLabel="Send newsletter"
              type="submit"
              label="Send"
              variant="filled"
              leftIcon="icon-arrow-right-up"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
