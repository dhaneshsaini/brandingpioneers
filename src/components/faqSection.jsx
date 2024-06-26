import { Accordion } from "react-bootstrap";
import "./css/faq.scss";

export default function FAQSection({ data, border = true }) {
  return (
    <>
      <section
        className={`faqs-container section-global ${border ? "no-border" : ""}`}
      >
        <div className="container container-2">
          <div className="row">
            <div className="col-12">
              <Accordion alwaysOpen flush>
                {data.map((e, i) => (
                  <Accordion.Item eventKey={i} key={i}>
                    <Accordion.Header>{e.title}</Accordion.Header>
                    <Accordion.Body>{e.text}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
