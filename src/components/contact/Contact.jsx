import React from "react";
// import { useForm } from "@formspree/react";

import { Container } from "../../styles/container.styled";

import {
  HeadingWrapper,
  StyledSection,
  HeadingPrimary,
  Divider,
} from "../../styles/Section.Styled";
import { AnchorButtonBlack } from "../../styles/Button.styled";
import { ContactContent, ContactForm } from "./Contact.Styled";

export default function Contact() {
  return (
    <StyledSection id="contact">
      <Container>
        <HeadingWrapper style={{ justifyContent: "center" }}>
          <HeadingPrimary>Get in touch</HeadingPrimary>
          <Divider style={{ display: "none" }}></Divider>
        </HeadingWrapper>
        <ContactContent>
          <ContactForm>
            <form
              name="contact v1"
              // onSubmit="submit"
              // method="POST"
              netlify
              className="flex"
            >
              <input type="hidden" name="form-name" value="contact v1" />
              <div className="group-input-wrap">
                <div className="input-label-group">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-box"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="input-label-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-box"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="input-label-group">
                  <label htmlFor="subject">Subject</label>
                  <div class="input-wrap">
                    <input
                      type="text"
                      className="input-box"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      max="30"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="textarea-group-wrap">
                <div className="input-label-group">
                  <label htmlFor="message">Message</label>
                  <div className="input-wrap">
                    <textarea
                      className="input-box"
                      name="message"
                      id="message"
                      placeholder="Write Your Message Here..."
                      min="5"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <AnchorButtonBlack as="button" type="submit">
                Say hello!
              </AnchorButtonBlack>
            </form>
            {/* <h4>Say Hello !</h4> */}
          </ContactForm>
        </ContactContent>
      </Container>
    </StyledSection>
  );
}
