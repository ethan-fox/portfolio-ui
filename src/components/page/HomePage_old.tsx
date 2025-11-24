import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactInfoInput from "@/components/domain/ContactInfoInput";
import SubscriberList from "@/components/domain/SubscriberList";
import { cn } from "@/lib/utils";

const HomePage = () => {
  let refetchSubscribers: (() => Promise<void>) | null = null;

  const handleContactSubmit = (data: { email: string; phone: string }) => {
    console.log("Contact info submitted:", data);
  };

  const handleSubscriptionSuccess = () => {
    refetchSubscribers?.();
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* TODO nail down styling better. */}
      <Empty className={cn("bg-muted/5")}>
        <EmptyHeader>
          <EmptyMedia variant="default">
            <Avatar className="size-16">
              <AvatarImage
                src="https://images.emojiterra.com/google/android-12l/512px/1f6a7.png"
                alt="Profile"
              />
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
          </EmptyMedia>
          <EmptyTitle>There's nothing here...</EmptyTitle>
          <EmptyDescription>
            ... yet! This website is currently under construction.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <p className="text-sm text-muted-foreground mb-4">
            In the meantime, feel free to leave some or all of your contact
            info so we can connect when it's ready:
          </p>
          <ContactInfoInput
            onSubmit={handleContactSubmit}
            onSuccess={handleSubscriptionSuccess}
            className="w-full"
          />
        </EmptyContent>
      </Empty>

      <div className="mt-8">
        <SubscriberList
          onRefetchRequest={(refetch) => {
            refetchSubscribers = refetch;
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
