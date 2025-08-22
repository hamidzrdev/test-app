import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

export default function AuthFaq() {
  return (
    <div className="h-full bg-gray-700 p-2 rounded-lg">
      <Accordion type="multiple" className="flex flex-col gap-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>No Wallet Needed</AccordionTrigger>
          <AccordionContent>
            Pay directly using your email — no crypto wallet required.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Instant Rewards</AccordionTrigger>
          <AccordionContent>
            Earn cashback and tokens immediately after each transaction.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Crypto and Card Friendly</AccordionTrigger>
          <AccordionContent>
            Pay with crypto or traditional cards — your choice, no friction.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Instant Sign Up</AccordionTrigger>
          <AccordionContent>
            Create your account in seconds — no wallet or app needed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
