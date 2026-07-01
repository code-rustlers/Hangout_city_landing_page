import Link from "next/link";

const sections = [
  {
    title: "1. Information we collect",
    body: [
      "We collect information you provide when you use Hangout City, including your name, phone number, city, age, gender, preferences, social media profile links, event selections, booking details, and messages or support requests you send to us.",
      "We may also collect basic device, usage, and app activity information, such as pages viewed, buttons clicked, approximate location derived from your city selection, device type, operating system, and crash or performance data."
    ],
  },
  {
    title: "2. How we use your information",
    body: [
      "We use your information to operate the app, verify profiles, create guest lists, manage event bookings, share venue details, send event updates, provide customer support, improve our service, and keep events safe and well organized.",
      "We use basic details such as age, gender, city, preferences, and event type to curate guest lists and aim for a balanced event experience."
    ],
  },
  {
    title: "3. Profile verification",
    body: [
      "We manually review social media profiles or other profile signals to help reduce fraudulent, incomplete, or misleading profiles. Verification is not a guarantee of a person's identity, character, background, or conduct.",
      "If a profile appears suspicious, incomplete, or unsuitable for an event, we may decline or delay approval."
    ],
  },
  {
    title: "4. Event communication",
    body: [
      "We share event information through the app and may also contact you individually through SMS, WhatsApp, phone, or email for booking confirmations, venue details, reminders, changes, safety issues, and support.",
      "Venue details are generally shared 24 hours before an event after your spot is confirmed."
    ],
  },
  {
    title: "5. Payments and booking information",
    body: [
      "If payments are enabled, payment information may be processed by third-party payment providers. We do not store full card numbers or sensitive payment credentials unless expressly stated by the payment provider and permitted by law.",
      "We may keep transaction references, booking status, refund status, invoices, and related records for operations, accounting, dispute handling, and legal compliance."
    ],
  },
  {
    title: "6. Sharing of information",
    body: [
      "We do not sell your personal information. We may share limited information with service providers who help us operate the app, process payments, send messages, host events, provide analytics, or support users.",
      "We may share information when required by law, to protect users or the public, to investigate misuse, to enforce our terms, or in connection with a business transfer such as a merger, acquisition, or restructuring."
    ],
  },
  {
    title: "7. Safety and conduct",
    body: [
      "We may use reports, host observations, user feedback, and event conduct information to decide whether a person can attend future events.",
      "If someone acts inappropriately, we may remove them from an event, restrict access to future events, or take other action we consider necessary for safety and comfort."
    ],
  },
  {
    title: "8. Data retention",
    body: [
      "We keep information for as long as needed to provide the service, manage bookings, resolve disputes, comply with legal obligations, prevent misuse, and maintain safety records.",
      "Some information may be retained after account deletion where required for legal, safety, fraud prevention, accounting, or dispute-resolution purposes."
    ],
  },
  {
    title: "9. Your choices",
    body: [
      "You may request access, correction, or deletion of your personal information by contacting us. Some requests may be limited by legal, safety, fraud prevention, or operational requirements.",
      "You can opt out of non-essential marketing messages, but we may still send service messages related to bookings, venue details, payments, safety, or account activity."
    ],
  },
  {
    title: "10. Security",
    body: [
      "We use reasonable administrative, technical, and organizational measures to protect user information. No app, website, or transmission method is completely secure, and we cannot guarantee absolute security."
    ],
  },
  {
    title: "11. Children",
    body: [
      "Hangout City is intended for adults. Users must be at least 18 years old or the age of majority required by applicable law, whichever is higher."
    ],
  },
  {
    title: "12. Updates to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will be posted on this page with the effective date."
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-16" style={{ backgroundColor: "#F8F6F3" }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
          Back to Hangouts
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-10">
          Effective date: July 1, 2026
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          This Privacy Policy explains how Hangout City collects, uses, stores, and shares information when you use our website, app, events, and related services.
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For privacy questions or requests, contact Hangout City through the app or the support channel provided on our website.
          </p>
        </section>
      </div>
    </main>
  );
}
