import React from "react";
// import { useForm } from "@formspree/react";

import { Container } from "../../styles/container.styled";

import {
  HeadingWrapper,
  StyledSection,
  HeadingPrimary,
  Divider,
} from "../../styles/Section.Styled";
import { AnchorButtonWhite } from "../../styles/Button.styled";
import { ContactContent, ContactForm } from "./Contact.Styled";
import Icons from "../icons/Icons";

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
              name="contact-form-v2"
              method="POST"
              data-netlify="true"
              className="flex"
            >
              <input type="hidden" name="form-name" value="contact-form-v2" />
              <div className="group-input-wrap">
                <div className="input-label-group">
                  <label htmlFor="first-name">First Name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-box"
                      name="first-name"
                      id="first-name"
                      placeholder="First Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="input-label-group">
                  <label htmlFor="last-name">Last Name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-box"
                      name="last-name"
                      id="last-name"
                      placeholder="Last Name"
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
                      resize="false"
                      style={{ resize: "none" }}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <AnchorButtonWhite as="button" type="submit">
                Say hello!
              </AnchorButtonWhite>
            </form>
            {/* <h4>Say Hello !</h4> */}
          </ContactForm>
          <Icons />
        </ContactContent>
      </Container>
    </StyledSection>
  );
}
