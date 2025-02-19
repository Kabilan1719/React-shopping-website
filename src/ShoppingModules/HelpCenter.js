import React, { useState } from 'react'
import { FaFacebook, FaXTwitter, FaLinkedin, FaLink } from "react-icons/fa6";

const faqs = {
  general: [
    {
      question: "What is an FAQ section?",
      answer: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".'
    },
    {
      question: "Why do FAQs matter?",
      answer: "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience."
    },
    {
      question: "Where can I add my FAQs?",
      answer: "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
    }
  ],
  setup: [
    {
      question: "How do I add a new question & answer?",
      answer: (
        <>
          <p>To add a new FAQ, follow these steps:</p>
          <ol>
            <li>Manage FAQs from your site dashboard or in the Editor.</li>
            <li>Add a new question & answer.</li>
            <li>Assign your FAQ to a category.</li>
            <li>Save and publish.</li>
          </ol>
          <p>You can always come back and edit your FAQs.</p>
        </>
      ),
    },
    {
      question: "Can I insert an image, video, or GIF in my FAQ?",
      answer: (
        <>
          <p>Yes. To add media follow these steps: </p>
          <ol>
            <li>Manage FAQs from your site dashboard or in the Editor </li>
            <li>Create a new FAQ or edit an existing one </li>
            <li>From the answer text box click on the video, image or GIF icon </li>
            <li>Add media from your library and save.</li>
          </ol>
        </>
      ),
    },
    {
      question: "How do I edit or remove the 'Frequently Asked Questions' title?",
      answer: "You can edit the title from the FAQ 'Settings' tab in the Editor. To remove the title from your mobile app go to the 'Site & App' tab in your Owner's app and customize."
    },
  ],
};


const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='help-container'>
      <div className='help-maintxt'>
        <h1>TechShed Help Center</h1>
      </div>
      <div className="faq-container">
        <h2 className="faq-title">Frequently asked questions</h2>
          <div className="faq-tabs">
            <span className={activeTab === "general" ? "active-tab" : ""} onClick={() => setActiveTab("general")}>General</span>
            <span className={activeTab === "setup" ? "active-tab" : ""} onClick={() => setActiveTab("setup")}>Setting up FAQs</span>
          </div>
          <div className="faq-list">
            {faqs[activeTab].map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h5>{faq.question}</h5>
                <span className="faq-icon">{openIndex === index ? "▲" : "▼"}</span>
              </div>
                {openIndex === index && <div className="faq-answer">{faq.answer}
                <div className="faq-social-icons">
                  <FaFacebook className="icon" />
                  <FaXTwitter className="icon" />
                  <FaLinkedin className="icon" />
                  <FaLink className="icon" />
                </div>
              </div>}
            </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default HelpCenter