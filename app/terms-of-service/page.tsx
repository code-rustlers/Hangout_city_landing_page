import Link from "next/link";

const sections = [
  {
    title: "1. Eligibility",
    body: [
      "You must be at least 18 years old or the age of majority required by applicable law, whichever is higher, to use Hangout City or attend an event.",
      "By using the service, you confirm that the information you provide is accurate and that you are single and interested in meeting people offline in good faith."
    ],
  },
  {
    title: "2. The service",
    body: [
      "Hangout City operates offline singles events, including Curated Tables and Singles Mashups. Events may be hosted at restaurants, bars, cafes, or other public venues.",
      "We may offer browsing, booking, profile review, event updates, venue details, guest-list curation, and related features through our app, website, SMS, WhatsApp, email, or other communication channels."
    ],
  },
  {
    title: "3. Account and profile information",
    body: [
      "You agree to provide accurate, current, and complete information. You may not impersonate another person, misrepresent your age, gender, identity, relationship status, intentions, or social media profile.",
      "We may decline, suspend, or remove accounts or bookings if information appears inaccurate, incomplete, fraudulent, misleading, unsafe, or unsuitable for the event format."
    ],
  },
  {
    title: "4. Verification and curation",
    body: [
      "We manually review social media profiles and other details to help prevent fraudulent profiles and improve guest-list quality. Approval is discretionary and does not guarantee admission to every event.",
      "We use details such as age, gender, city, preferences, and event type to create guest lists. We aim for a balanced experience, including a 50-50 gender ratio where possible, but we do not guarantee exact ratios, specific attendees, matches, outcomes, or romantic compatibility."
    ],
  },
  {
    title: "5. Bookings, payments, and refunds",
    body: [
      "Events are paid unless expressly stated otherwise. Pricing may vary by city, venue, format, date, and inclusions.",
      "Your spot is confirmed only after the required booking steps and payment, if applicable, are completed. Refunds, credits, transfers, and cancellations may depend on the event rules shown at booking or communicated by Hangout City.",
      "We may cancel, reschedule, relocate, or modify an event due to venue issues, safety concerns, low attendance, operational needs, weather, legal restrictions, or other circumstances."
    ],
  },
  {
    title: "6. Venue details and event updates",
    body: [
      "Venue details are generally shared through the app 24 hours before the event. We may also send updates by SMS, WhatsApp, phone, email, or other direct channels.",
      "You are responsible for checking event updates and arriving on time. Venue policies, entry requirements, food and beverage rules, dress codes, and local laws may apply."
    ],
  },
  {
    title: "7. Conduct at events",
    body: [
      "You agree to behave respectfully toward hosts, venue staff, and other guests. Harassment, intimidation, discrimination, unwanted physical contact, excessive intoxication, abusive language, stalking, recording without consent, or unsafe behavior is not allowed.",
      "Anyone acting inappropriately may be asked to leave the venue and may not be approved for future events. We may take action silently where needed to protect privacy, safety, and the event experience."
    ],
  },
  {
    title: "8. No guarantee of outcomes",
    body: [
      "Hangout City creates opportunities to meet people offline. We do not guarantee attraction, chemistry, compatibility, dates, relationships, friendships, specific attendees, gender ratio, or any particular outcome from an event."
    ],
  },
  {
    title: "9. User responsibility",
    body: [
      "You are responsible for your own decisions, interactions, transportation, personal belongings, purchases at venues, and conduct before, during, and after an event.",
      "You should use your own judgment when sharing personal information, continuing conversations, meeting someone again, or leaving a venue with another person."
    ],
  },
  {
    title: "10. Third-party venues and services",
    body: [
      "Events may take place at third-party venues and may involve third-party payment providers, messaging services, app stores, analytics tools, or other service providers. Their own terms and policies may apply.",
      "Hangout City is not responsible for the acts, omissions, products, services, or policies of third-party venues or providers, except where required by law."
    ],
  },
  {
    title: "11. Intellectual property",
    body: [
      "The Hangout City name, branding, website, app content, text, layout, graphics, and related materials are owned by or licensed to Hangout City. You may not copy, modify, distribute, or use them without permission."
    ],
  },
  {
    title: "12. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Hangout City is not liable for indirect, incidental, special, consequential, or punitive damages, or for losses arising from user interactions, event outcomes, venue issues, third-party services, missed updates, or unavailable services.",
      "Nothing in these Terms limits liability that cannot be limited under applicable law."
    ],
  },
  {
    title: "13. Changes to the service or terms",
    body: [
      "We may update, suspend, discontinue, or change parts of the service at any time. We may also update these Terms from time to time. The latest version will be posted on this page with the effective date."
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen px-6 py-16" style={{ backgroundColor: "#F8F6F3" }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
          Back to Hangouts
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-3">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-10">
          Effective date: July 1, 2026
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          These Terms of Service govern your use of Hangout City&apos;s website, app, events, and related services. By using Hangout City or booking an event, you agree to these Terms.
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
            For questions about these Terms, contact Hangout City through the app or the support channel provided on our website.
          </p>
        </section>
      </div>
    </main>
  );
}
