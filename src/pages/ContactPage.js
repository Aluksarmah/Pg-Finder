import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <>
      <Heading heading="Contact Us" title="Home" subtitle="Contact" />

      <div class="container-xxl py-5">
        <div class="container">
          <CommonHeading
            heading="Fill up the Form to"
            subtitle="Contact"
            title="Us"
          />
          <div class="row g-4">
            <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57008.713854911686!2d94.16128156496029!3d26.742952299116162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c294ee518ba1%3A0x75147ff2c76406bc!2sJorhat%2C%20Assam%2C%20India!5e0!3m2!1sen!2sjp!4v1727097295358!5m2!1sen!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              style={{ minHeight: "350px", border: "0" }}
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
