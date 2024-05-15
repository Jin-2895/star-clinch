"use client";
import { Section } from "@/layout/Section";
import React from "react";
import { useState } from "react";
import { Stepper, Step, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import { Events, Profile } from "@/types/types";
import { useParams } from "next/navigation";
import OTPModal from "./OTPModal";
import { useDisclosure } from "@nextui-org/react";
import { NextResponse } from "next/server";

type IGTQSTEPS = {
  profile: Profile;
};

interface FormGtq {
    occassion: string,
    eventDate: string,
    budget: string,
    attendees: string,
    venue: string,
    moreInfo: string,
    newsLetter: string,
    name: string,
    mobileNumber: number | string,
    email: string,
}

const GTQStep = ({ profile }: IGTQSTEPS) => {
  const { slug, name } = useParams();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isLastStep, setIsLastStep] = useState<boolean>(false);
  const [isFirstStep, setIsFirstStep] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState<FormGtq>({
    occassion: "",
    eventDate: "",
    budget: "",
    attendees: "",
    venue: "",
    moreInfo: "",
    newsLetter: "off",
    name: "",
    mobileNumber: "",
    email: "",
  });

  console.log(isFirstStep)

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1);

  const handleInput = (e: any) => {
    const target = e.target 
    const fieldName = target.name;
    const fieldValue = target.value
      setFormData((prevState: any) => {
        if(prevState){
          return ({
            ...prevState,
            [fieldName]: fieldValue,
          }) 
        }else {
          return ({
            [fieldName]: fieldValue,
          })
        }
      });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    const target = e.target as typeof e.target
    const formURL = target.action;
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    }).then(() => {
      setFormData({
        occassion: "",
        eventDate: "",
        budget: "",
        attendees: "",
        venue: "",
        moreInfo: "",
        newsLetter: "off",
        name: "",
        mobileNumber: "",
        email: "",
      });
    });
  };

  const handleOtpVerify = async () => {
    try {
      const jsonData = {
        mobile: formData.mobileNumber,
        card_id: formData.mobileNumber,
        mode: "mobile",
        type: "gtq"
      }
      const res = await fetch(`https://staging-api.starclinch.in/cart/otp/`,{
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'content-type': 'application/json'
        }
      })
      if(!res.ok){
       throw new Error(`HTTP error! status ${res.status}`)
      }
      onOpen()
      return NextResponse.json({res})
    } catch (error) {
        return console.log(error)
    }
  }

  return (
    <Section>
      <OTPModal isOpen={isOpen} onOpenChange={onOpenChange} formData={formData}/>
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
                    src={profile.artist.profile_pic}
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
                      <Step
                        className="bg-deep-orange-500"
                        onClick={() => setActiveStep(0)}
                        placeholder=""
                      >
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
                      <Step onClick={() => setActiveStep(1)} placeholder="">
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
                      <Step
                        onClick={() => setActiveStep(2)}
                        placeholder={undefined}
                      >
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
                        <form onSubmit={submitForm}>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-4">
                              <label
                                className="text-white text-lg leading-[21.78px]"
                                htmlFor="occassion"
                              >
                                What the occassion
                              </label>
                              <select
                                defaultValue={formData?.occassion}
                                onChange={handleInput}
                                id="occassion"
                                name="occassion"
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              >
                                 <option>Select Occassion</option>
                                {profile?.events_list?.map((list: Events) => (
                                  <option key={list.id} value={list.key_name}>
                                    {list.event_name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex flex-col gap-4">
                              <label
                                className="text-white text-lg leading-[21.78px]"
                                htmlFor="eventDate"
                              >
                                Event Date
                              </label>
                              <input
                                defaultValue={formData?.eventDate}
                                onChange={handleInput}
                                id="eventDate"
                                type="date"
                                name="eventDate"
                                placeholder="Select the Type"
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              />
                            </div>
                            <div className="flex flex-col gap-4">
                              <label
                                className="text-white text-lg leading-[21.78px]"
                                htmlFor="budget"
                              >
                                Specify your Budget
                              </label>
                              <input
                                defaultValue={formData?.budget}
                                onChange={handleInput}
                                id="budget"
                                name="budget"
                                type="number"
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              />
                            </div>
                            <div className="flex flex-col gap-4">
                              <label
                                className="text-white text-lg leading-[21.78px]"
                                htmlFor="attendees"
                              >
                                How many people will attend?
                              </label>
                              <input
                                defaultValue={formData?.attendees}
                                onChange={handleInput}
                                id="attendees"
                                name="attendees"
                                type="number"
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              />
                            </div>
                            <div className="flex flex-col gap-4">
                              <label
                                className="text-white text-lg leading-[21.78px]"
                                htmlFor="venue-city"
                              >
                                Select Venue, City
                              </label>
                              <input
                                defaultValue={formData?.venue}
                                onChange={handleInput}
                                id="venue-city"
                                name="venue"
                                type="text"
                                // placeholder="Select the City"
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="mt-14">
                        <form onSubmit={submitForm}>
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
                                defaultValue={formData?.name}
                                onChange={handleInput}
                                type="text"
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              />
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
                                defaultValue={formData?.email}
                                onChange={handleInput}
                                type="text"
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              />
                            </div>
                            <div className="flex flex-col gap-4">
                               <label
                                className="text-white text-lg leading-[21.78px]"
                                htmlFor="event-date"
                              >
                                Mobile Number
                              </label>
                              <input
                                id="mobileNumber"
                                name="mobileNumber"
                                defaultValue={formData?.mobileNumber}
                                onChange={handleInput}
                                type="number"
                                placeholder=""
                                className="input-field px-4 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="mt-14">
                        <form onSubmit={submitForm}>
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
                                defaultValue={formData?.moreInfo}
                                onChange={handleInput}
                                className="input-field w-full p-6 rounded-2xl bg-[#111119] text-lg leading-[29.05px] text-[rgba(255, 255, 255, 0.58)] resize-none"
                                rows={5}
                                placeholder="Describe addition info in 200 words"
                              ></textarea>
                            </div>
                            <div className="flex items-center">
                              <input
                                onChange={handleInput}
                                id="newsLetter"
                                type="checkbox"
                                name="newsLetter"
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
                        </form>
                        <div className="flex flex-col items-center py-10 gap-8">
                          <button
                            onClick={handleOtpVerify}
                            className="px-20 bg-gradient-to-tl rounded-2xl from-[rgba(51,50,50,0.25)] via-[rgba(253,45,125,0.55)] to-[rgba(164,153,153,0.75)]"
                          >
                            <h1 className="text-lg font-normal leading-[21.78px] bg-transparent py-4">
                              Verify Otp
                            </h1>
                          </button>
                          <h1 className="text-lg leading-[21.78px] font-normal  opacity-50">
                            We do not spam , otp is just sent to validate your
                            credibility blah blah
                          </h1>
                        </div>
                      </div>
                    )}
                  </div>
                  {(activeStep === 0 || activeStep === 1) && (
                    <div className="flex justify-end">
                      {!isLastStep && (
                        <Button
                          className="bg-transparent outline-none focus:outline-none hover:outline-none "
                          onClick={handleNext}
                          disabled={isLastStep}
                          placeholder=""
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
                  )}
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
