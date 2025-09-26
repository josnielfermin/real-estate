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
    <section className="w-full px-[clamp(1.25rem,_-2.417rem_+_7.639vw,_6.75rem)] flex items-center h-[clamp(22.25rem,_14.042rem_+_17.101vw,_34.563rem)]">
      <div className="max-w-[1704px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] text-white font-normal leading-[1.1]">
            {Content.newsletter.title}
          </h3>
          <h2 className="text-[clamp(1.5rem,_0rem_+_3.125vw,_3.75rem)] text-white font-bold leading-[1.1]">
            {Content.newsletter.subtitle}
          </h2>
          <p className="mt-4 text-base-2 text-[clamp(0.75rem,_0.583rem_+_0.347vw,_1rem)] max-w-md">
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
              bgTransparent
              radius="lg"
              size="lg"
              fullWidth
              className="placeholder:text-base-2"
              rightElement={
                <Button
                  ariaLabel="Send newsletter"
                  type="submit"
                  radius="full"
                  label="Send"
                  variant="filled"
                  rightIcon="icon-arrow-right"
                  className="!w-[140px] mr-3.5 whitespace-nowrap"
                />
              }
              leftElement={
                <div className="h-24 !w-24 max-md:h-[70px] max-md:!w-[70px] flex items-center justify-center flex-shrink-0 rounded-[20px] bg-transparent-1">
                  <span className="icon-mail text-primary-1 text-3xl -ml-2"></span>
                </div>
              }
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
