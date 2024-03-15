import React from "react";
import BlurredBackground from "../components/blurredBack";
import Markdown from "markdown-to-jsx";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <BlurredBackground />
        <div className="w-full relative z-10">
          <div className="flex flex-col space-y-5 w-full px-12 md:px-24 z-20 ">
            <article className="prose prose-a:text-white text-white/60 prose-headings:text-white prose-h3:text-slate-400 prose-img:rounded-lg prose-strong:text-white prose-code:text-white prose-code:before:inset-0 prose-code:before:bg-white/50">
              <Markdown>
                {`## Cally - AI Powered Calendar
                
##Privacy Policy

**Effective Date:** March 12, 2024

Cally ("Cally," "we," "us," or "our") is an AI-powered calendar application that syncs with your Google Calendar and leverages Natural Language Processing (NLP) to enhance your calendar management experience. This Privacy Policy describes how we collect, use, store, and share your information when you use our app.

**Information We Collect**

* **Google Account Information:** Through Google Sign-in, we collect your basic user information associated with your Google account, such as your name and email address. This information is used solely for authentication purposes and to link your Cally account with your Google Calendar.
* **Calendar Events:** With your explicit consent during Google Sign-in, Cally accesses your Google Calendar events list. This data is used to populate your Cally calendar and enable NLP features to analyze your events and provide suggestions or insights.

**Use of Information**

* **Calendar Management:** We use your calendar events list to display your schedule within Cally and allow NLP-powered features to assist you in managing your calendar.
* **Authentication:** We use your Google account information to verify your identity and securely connect your Cally account with your Google Calendar.

**Sharing of Information**

* **Third-Party AI Model (claude2.1):** We share only your calendar events list with the claude2.1 AI model, which is used to analyze your events and provide NLP suggestions.

**User Consent for AI Data Sharing**

Cally obtains your explicit consent separate from Google OAuth consent during the sign-in process. You will be presented with a clear disclosure explaining that Cally utilizes an AI model (claude2.1) to analyze your calendar events and provide NLP-powered features. By granting consent, you agree to the sharing of your calendar events list with claude2.1 for this purpose.

**Data Storage and Security**

We employ industry-standard security measures to protect your information. Your data is stored on secure servers with limited access controls.

**Demo Video**

A demo video detailing the user flow, OAuth consent screen, and how Cally utilizes the requested scopes to manage calendar events is available at 

**Compliance with Google’s Limited Use Policy**

We comply with Google's Limited Use Policy. We do not use Google user data for any purpose other than providing calendar management functionality within Cally, ensuring the data is handled securely and in accordance with Google's guidelines.

**Changes to This Privacy Policy**

We may update our Privacy Policy from time to time. We advise you to review this page periodically for any changes. Changes are effective immediately after they are posted on this page.

**Google API Limited Use Disclosure**

Cally - AI Powered Calendar's use and transfer to any other app of information received from Google Accounts will adhere to [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes), including the Limited Use requirements.

**Contact Us**

If you have any questions or comments about this Privacy Policy, please contact us at [hi@geekydan.dev](mailto:hi@geekydan.dev)
`}
              </Markdown>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
