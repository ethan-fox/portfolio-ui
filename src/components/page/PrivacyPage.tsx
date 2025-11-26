import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PrivacyPage = () => {
  return (
    <div className="py-16">
      <div className="mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6">
          <p>
            This Privacy Policy describes how ethan builds ("we", "us", or
            "our") collects, uses, and shares your information when you use our
            website and services.
          </p>
          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p className="mb-2">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Account Information:</strong> When you sign in with
                  Google OAuth, we collect your name, email address, and profile
                  information that you authorize Google to share with us.
                </li>
                <li>
                  <strong>Contact Information:</strong> Email address and phone
                  number if you choose to provide them through our contact
                  forms.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website, including pages visited and
                  features used.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>
                  Communicate with you about updates, projects, and
                  opportunities
                </li>
                <li>
                  Authenticate your identity and provide secure access to our
                  services
                </li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage patterns to improve user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>Google OAuth 2.0</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p className="mb-2">
                When you sign in with Google, we request access to specific
                information from your Google account. We only request the
                minimum permissions necessary to provide our services.
              </p>
              <p className="mb-2">
                The information we receive from Google is subject to Google's
                Privacy Policy. You can review and manage the permissions you've
                granted at any time through your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Google Account settings
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>Data Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p className="mb-2">
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>With your consent:</strong> We may share information
                  when you explicitly authorize us to do so.
                </li>
                <li>
                  <strong>For legal reasons:</strong> We may disclose
                  information if required by law or to protect our rights and
                  safety.
                </li>
                <li>
                  <strong>Service providers:</strong> We may share information
                  with third-party services that help us operate our website
                  (e.g., hosting providers).
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p>
                We implement reasonable security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>
                  Revoke OAuth permissions through your Google Account settings
                </li>
                <li>Opt out of communications from us</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p>
                We retain your personal information only for as long as
                necessary to provide our services and fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention
                period is required by law.
              </p>
            </CardContent>
          </Card>

          <Card className={cn("bg-muted/5")}>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className={cn("text-left")}>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mb-6">
            Last updated: 11/13/2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
