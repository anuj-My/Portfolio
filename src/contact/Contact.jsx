import React from "react";
import { Container } from "../styles/container.styled";
import {
  HeadingWrapper,
  StyledSection,
  HeadingPrimary,
  Divider,
} from "../styles/Section.Styled";
import { AnchorButtonBlack } from "../styles/Button.styled";
import { ContactContent, ContactForm } from "./Contact.Styled";

export default function Contact() {
  return (
    <StyledSection id="contact">
      <Container>
        <HeadingWrapper>
          <HeadingPrimary>Get in touch</HeadingPrimary>
          <Divider></Divider>
        </HeadingWrapper>
        <ContactContent>
          <ContactForm>
            <form action="POST" data-netlify="true" className="flex">
              <div className="group-input-wrap">
                <div className="input-label-group">
                  <label htmlFor="name">First Name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-box"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>

                <div className="input-label-group">
                  <label htmlFor="Email">Email</label>
                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-box"
                      name="email"
                      id="email"
                      placeholder="@gmail.com"
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
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <div data-netlify-recaptcha="true"></div>
              </div>
              <AnchorButtonBlack as="button">Say hello!</AnchorButtonBlack>
            </form>
            <h4>Say Hello !</h4>
          </ContactForm>
        </ContactContent>
      </Container>
    </StyledSection>
  );
}
