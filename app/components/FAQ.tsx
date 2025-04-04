import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

// Define interfaces for our data structures
interface FAQItem {
  question: string;
  answer: string;
}

// Sample FAQ data
const faqs: FAQItem[] = [
  {
    question: 'What services do Saint Sparks Innovations provide?',
    answer:" Saintsparks is a full-service digital agency offering branding, web design & development, social media management, content creation, and creative consulting—all with a faith-driven and purpose-aligned approach."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "roject timelines vary depending on the scope, but on average, branding takes 2–3 weeks, and full website projects may take 4–6 weeks. We always communicate clearly and work with your schedule in mind."
  },
  {
    question: " What makes Saintsparks different from other digital agencies?",
    answer: "We combine professional creativity with spiritual sensitivity. Our goal isn’t just to make things look good—it’s to make them meaningful. We pray over our projects, listen deeply, and co-create with you from the heart."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we do! We understand the importance of flexibility and offer installment options for most services to help you stay on budget while still getting excellent results."
  },
  {
    question: "Can Saintsparks manage my social media accounts?",
    answer: "Absolutely. We offer monthly social media management packages that include strategy, content creation, scheduling, and analytics—tailored to match your brand's voice and mission."
  },
  {
    question: "How do I get started with Saintsparks?",
    answer: "Getting started is easy! Just fill out our contact form or send us a message. We’ll schedule a discovery call to learn about your vision and recommend the best path forward."
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w space-y-3 mx-auto p-6">
      {faqs.map((faq: FAQItem, index: number) => (
        <div 
          key={index} 
          className="rounded-2xl border border-gray-200 p-5 pl-5 "
        >
          <div 
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <IoIosArrowDown 
              className={`transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </div>
          {openIndex === index && (
            <div className="mt-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;