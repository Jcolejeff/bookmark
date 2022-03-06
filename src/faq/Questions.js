import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>
          <h3>Frequently Asked Questions</h3>
          <h6>
            Here are some of our FAQs.
            <br />
            If you have any other questions you’d <br></br>
            like answered please feel free to email us.
          </h6>
          {/* <img src="illustration-woman-online-desktop.svg" alt="" /> */}
        </h3>

        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
