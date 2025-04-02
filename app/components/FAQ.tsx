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
    answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {faqs.map((faq: FAQItem, index: number) => (
        <div 
          key={index} 
          className="border-b border-gray-200 py-4"
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