"use client";
import { Section } from "@/layout/Section";
import React from "react";
import { useState } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { Events, Profile } from "@/types/types";
import { useParams } from "next/navigation";
import OTPModal from "./OTPModal";
import { useDisclosure } from "@nextui-org/react";
import { NextResponse } from "next/server";
import { Formik, Form } from "formik";
import { Button } from "@nextui-org/react";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

type IGTQSTEPS = {
  profile: Profile;
};

// interface FormGtq {
//   occassion: string;
//   eventDate: string;
//   budget: string;
//   attendees: string;
//   venue: string;
//   moreInfo: string;
//   newsLetter: string;
//   name: string;
//   mobileNumber: number | string;
//   email: string;
// }

const GTQStep = ({ profile }: IGTQSTEPS) => {
  const { slug, name } = useParams();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isLastStep, setIsLastStep] = useState<boolean>(false);
  const [isFirstStep, setIsFirstStep] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState<any | null>(null);

  console.log(isFirstStep);

  const step0 = Yup.object().shape({
    occassion: Yup.string().required("Occasion is required"),
    eventDate: Yup.string().required("Event date is required"),
    budget: Yup.string().required("Budget is required"),
    attendees: Yup.string().required("Number of attendees is required"),
    venueCity: Yup.string().required("Venue city is required"),
  });

  const step1 = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobileNumber: Yup.string().required("Mobile number is required"),
  });

  const step2 = Yup.object().shape({
    moreInfo: Yup.string().max(
      200,
      "Description must be at most 200 characters"
    ),
    newsLetter: Yup.boolean(),
  });

  const handleOtpVerify = async () => {
    try {
      const jsonData = {
        mobile: formData?.mobileNumber,
        card_id: formData?.mobileNumber,
        mode: "mobile",
        type: "gtq",
      };
      const res = await fetch(`${"https://staging-api.starclinch.in"}/cart/otp/`, {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status ${res.status}`);
      }
      onOpen();
      return NextResponse.json({ res });
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <Section>
      <OTPModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        formData={formData}
      />
      <div className="flex flex-col justify-start overflow-hidden">
        <div className="flex flex-col  px-[48px] py-[28px] ">
          <div className=" flex items-start justify-start max-h-[137px] py-[60px]">
            <h1
              className="text-2xl leading-[29.05px]"
              style={{ opacity: "0.5" }}
            >
              Categories {">"} {slug} {">"} {name}
            </h1>
          </div>
          <div className="bg-gradient-to-b from-[rgba(119,138,189,1)] to-[rgba(255,255,255,0)] p-[2px] rounded-[5rem] w-full ">
            <div className="rounded-[5rem] p-[56px] bg-[#07070e] bg-gradient-to-b from-[rgba(20,20,41,1)] to-[rgba(0,0,0,0)]  w-full">
              <div className="flex gap-8">
                <div className="max-w-[460px] min-h-[600px] max-h-[600px] w-full overflow-hidden rounded-[5rem]">
                  <Image
                    width={800}
                    height={800}
                    src={profile?.artist?.profile_pic}
                    className="object-cover h-full"
                    alt="artist"
                  />
                </div>
                <div className="flex flex-col justify-start gap-20 w-full max-h-[730px] overflow-hidden">
                  <div className="flex flex-col items-center">
                    <h1
                      className="text-[32px] leading-[38.73px] font-semibold"
                      style={{
                        color: "rgba(255, 253, 253, 0.8)",
                      }}
                    >
                      Woohoo! You made a great choice
                    </h1>
                    <span
                      className="text-[18px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      Just a step away from booking your dream star
                    </span>
                  </div>
                  <div className="w-full max-h px-6 py-2 ">
                    <Stepper
                      lineClassName="bg-white/50"
                      activeLineClassName="bg-deep-orange-500"
                      activeStep={activeStep}
                      isLastStep={(value: boolean) => setIsLastStep(value)}
                      isFirstStep={(value: boolean) => setIsFirstStep(value)}
                      placeholder=""
                    >
                      <Step placeholder="">
                        <div className="absolute right-[-5rem] top-[-2rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 0 ? "blue-gray" : "gray"}
                            placeholder=""
                          >
                            Event Details
                          </Typography>
                        </div>
                      </Step>
                      <Step placeholder="">
                        <div className="absolute top-[-2rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 1 ? "blue-gray" : "gray"}
                            placeholder=""
                          >
                            Personal Details
                          </Typography>
                        </div>
                      </Step>
                      <Step placeholder="">
                        <div className="absolute top-[-2rem] w-max text-center">
                          <Typography
                            variant="h6"
                            color={activeStep === 2 ? "blue-gray" : "gray"}
                            placeholder=""
                          >
                            Done
                          </Typography>
                        </div>
                      </Step>
                    </Stepper>
                    {activeStep === 0 && (
                      <div className="mt-14">
                        <Formik
                          initialValues={{
                            occassion: "",
                            eventDate: "",
                            budget: "",
                            attendees: "",
                            venueCity: "",
                          }}
                          validationSchema={step0}
                          onSubmit={(
                            values
                            // { setSubmitting }
                          ) => {
                            setActiveStep((cur) => cur + 1);
                            console.log(values);
                            setFormData(values);
                            // Submit the form values
                          }}
                        >
                          {({
                            // handleSubmit,
                            handleChange,
                            // setSubmitting,
                            // isSubmitting,
                            values,
                            errors,
                            // isValid,
                          }) => (
                            <Form>
                              <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="occassion"
                                  >
                                    What the occassion
                                  </label>
                                  <select
                                    onChange={handleChange}
                                    value={values.occassion}
                                    id="occassion"
                                    name="occassion"
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)]"
                                  >
                                    <option>Select Occassion</option>
                                    {profile?.events_list?.map(
                                      (list: Events) => (
                                        <option
                                          key={list.id}
                                          value={list.key_name}
                                        >
                                          {list.event_name}
                                        </option>
                                      )
                                    )}
                                  </select>
                                  {errors.occassion && (
                                    <div className="text-red-500">
                                      {errors.occassion}
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="eventDate"
                                  >
                                    Event Date
                                  </label>
                                  <input
                                    onChange={handleChange}
                                    value={values.eventDate}
                                    id="eventDate"
                                    type="date"
                                    name="eventDate"
                                    placeholder="Select the Type"
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)] dark:text-white dark:[color-scheme:dark]"
                                  />
                                  {errors.eventDate && (
                                    <div className="text-red-500">
                                      {errors.eventDate}
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="budget"
                                  >
                                    Specify your Budget
                                  </label>
                                  <input
                                    onChange={handleChange}
                                    value={values.budget}
                                    id="budget"
                                    name="budget"
                                    type="number"
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)]"
                                  />
                                  {errors.budget && (
                                    <div className="text-red-500">
                                      {errors.budget}
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="attendees"
                                  >
                                    How many people will attend?
                                  </label>
                                  <input
                                    onChange={handleChange}
                                    value={values.attendees}
                                    id="attendees"
                                    name="attendees"
                                    type="number"
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)]"
                                  />
                                  {errors.attendees && (
                                    <div className="text-red-500">
                                      {errors.attendees}
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="venueCity"
                                  >
                                    Select Venue, City
                                  </label>
                                  <input
                                    onChange={handleChange}
                                    value={values.venueCity}
                                    id="venueCity"
                                    name="venueCity"
                                    type="text"
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)]"
                                  />
                                  {errors.venueCity && (
                                    <div className="text-red-500">
                                      {errors.venueCity}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex justify-end">
                                {!isLastStep && (
                                  <Button
                                    type="submit"
                                    // disabled={!isValid}
                                    className="bg-transparent outline-none focus:outline-none hover:outline-none "
                                  >
                                    <h1
                                      className="capitalize text-lg leading-[21.78px] font-semibold bg-gradient-to-b from-[rgba(255,227,226,0.8)] via-[rgba(241,102,51,0.8)] to-[rgba(253,45,125,0.8)] inline-block text-transparent bg-clip-text"
                                      style={{}}
                                    >
                                      Next Step {">>"}
                                    </h1>
                                  </Button>
                                )}
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="mt-14">
                        <Formik
                          initialValues={{
                            name: "",
                            email: "",
                            mobileNumber: "",
                          }}
                          validationSchema={step1}
                          onSubmit={(
                            values
                            // { setSubmitting }
                          ) => {
                            setActiveStep((cur) => cur + 1);
                            console.log(values);
                            // Submit the form values
                          }}
                        >
                          {({
                            // handleSubmit,
                            handleChange,
                            // setSubmitting,
                            // isSubmitting,
                            values,
                            errors,
                            setFieldValue,
                            // isValid,
                          }) => (
                            <Form>
                              <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="name"
                                  >
                                    Your Name
                                  </label>
                                  <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.name}
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)]"
                                  />
                                  {errors.name && (
                                    <div className="text-red-500">
                                      {errors.name}
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="event-date"
                                  >
                                    Email {"("}We Don&apos;t Spam{")"}
                                  </label>
                                  <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)]"
                                  />
                                  {errors.email && (
                                    <div className="text-red-500">
                                      {errors.email}
                                    </div>
                                  )}
                                </div>
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="event-date"
                                  >
                                    Mobile Number
                                  </label>
                                  <PhoneInput
                                    id="mobileNumber"
                                    country="INDIA"
                                    containerStyle={{
                                      border: "10px solid black"
                                    }}
                                    placeholder="Enter phone number"
                                    onChange={(value) => setFieldValue("mobileNumber",value)}
                                    className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255,255,255,0.58)]"
                                    numberInputProps={{
                                      required:true,
                                      className:"bg-[#111119] block rounded-md border-none justify-between shadow-sm focus:ring-0 focus:border-none focus:bg-transparent focus:outline-none"
                                    }}
                                  />
                                  {errors.mobileNumber && (
                                    <div className="text-red-500">
                                      {errors.mobileNumber}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex justify-end">
                                {!isLastStep && (
                                  <Button
                                    type="submit"
                                    className="bg-transparent outline-none focus:outline-none hover:outline-none "
                                  >
                                    <h1
                                      className="capitalize text-lg leading-[21.78px] font-semibold bg-gradient-to-b from-[rgba(255,227,226,0.8)] via-[rgba(241,102,51,0.8)] to-[rgba(253,45,125,0.8)] inline-block text-transparent bg-clip-text"
                                      style={{}}
                                    >
                                      Next Step {">>"}
                                    </h1>
                                  </Button>
                                )}
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="mt-14">
                        <Formik
                          initialValues={{ moreInfo: "", newsLetter: false }}
                          validationSchema={step2}
                          onSubmit={(
                            values
                            // { setSubmitting }
                          ) => {
                            handleOtpVerify;
                            console.log(values);
                          }}
                        >
                          {({
                            // handleSubmit,
                            handleChange,
                            // setSubmitting,
                            // isSubmitting,
                            values,
                            errors,
                            isValid,
                          }) => (
                            <Form>
                              <div className="grid grid-cols-1 gap-6">
                                <div className="flex flex-col gap-4">
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="moreInfo"
                                  >
                                    Tell us more we love to listen
                                  </label>
                                  <textarea
                                    id="moreInfo"
                                    name="moreInfo"
                                    className="input-field w-full p-6 rounded-2xl bg-[#111119] text-lg leading-[29.05px] text-[rgba(255,255,255,0.58)] resize-none"
                                    rows={5}
                                    onChange={handleChange}
                                    value={values.moreInfo}
                                    placeholder="Describe addition info in 200 words"
                                  ></textarea>
                                  {errors.moreInfo && (
                                    <div className="text-red-500">
                                      {errors.moreInfo}
                                    </div>
                                  )}
                                </div>
                                <div className="flex items-center">
                                  <input
                                    id="newsLetter"
                                    type="checkbox"
                                    name="newsLetter"
                                    onChange={handleChange}
                                    checked={values.newsLetter}
                                    className="mr-2"
                                  />
                                  <label
                                    className="text-white text-lg leading-[21.78px]"
                                    htmlFor="newsLetter"
                                  >
                                    Send Quotes on WhatsApp
                                  </label>
                                </div>
                              </div>
                              <div className="flex justify-end">
                                <div className="flex flex-col items-center py-10 gap-8">
                                  <button
                                    disabled={!isValid}
                                    type="submit"
                                    className="px-20 bg-gradient-to-tl rounded-2xl from-[rgba(51,50,50,0.25)] via-[rgba(253,45,125,0.55)] to-[rgba(164,153,153,0.75)]"
                                  >
                                    <h1 className="text-lg font-normal leading-[21.78px] bg-transparent py-4">
                                      Verify Otp
                                    </h1>
                                  </button>
                                  <h1 className="text-lg leading-[21.78px] font-normal  opacity-50">
                                    We do not spam , otp is just sent to
                                    validate your credibility blah blah
                                  </h1>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { GTQStep };
