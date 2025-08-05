import { faqData } from "data/util";

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <h1 className="capitalize">Topics of Interest</h1>
        <div className="flex flex-wrap -mx-4" data-aos="fade-down">
          {faqData.map((faq, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <div className="h-full p-6 shadow flex flex-col justify-between">
                <div className="faq-head relative">
                  <h2 className="text-xl font-semibold mb-4">{faq.question}</h2>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <li>{faq.answer}</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
