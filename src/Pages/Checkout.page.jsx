import { useState } from 'react';
import Navbar from '../components/homepage/Navbar';
import ZakirKhanImg from '../assets/celebrities/checkoutImage.png';
import '../Pages/checkoutPage.css';
import { Stepper, Step, Button, Typography } from '@material-tailwind/react';

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep(cur => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1);
  return (
    <div className="w-screen flex flex-col justify-start overflow-hidden">
      {/* <Navbar /> */}
      <div className="flex flex-col  px-[48px] py-[28px] ">
        <div className=" flex items-start justify-start max-h-[137px] py-[60px]">
          <h1 className="text-2xl leading-[29.05px]" style={{ opacity: '0.5' }}>
            All Categories {'>'} Comedians {'>'} Zakir Khan
          </h1>
        </div>
        <div className="bg-gradient-to-b from-[rgba(119,138,189,1)] to-[rgba(255,255,255,0)] p-[2px] rounded-[100px] w-full ">
          <div className="rounded-tl-full p-[56px] bg-[#07070e] bg-gradient-to-b from-[rgba(20,20,41,1)] to-[rgba(0,0,0,0)]  w-full">
            <div className="flex gap-8">
              <div className=" max-w-[459px] max-h-[730px] w-full overflow-hidden">
                <img src={ZakirKhanImg} className="  object-fill " />
              </div>
              <div className="flex flex-col justify-start gap-20 w-full max-h-[731.61px] overflow-hidden">
                <div className="flex flex-col items-center">
                  <h1
                    className="text-[32px] leading-[38.73px] font-semibold"
                    style={{
                      color: 'rgba(255, 253, 253, 0.8)',
                    }}
                  >
                    Woohoo! You made a great choice
                  </h1>
                  <span
                    className="text-[18px]"
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    Just a step away from booking your dream star
                  </span>
                </div>
                <div className="w-full max-h px-24 py-4 ">
                  <Stepper
                    activeStep={activeStep}
                    isLastStep={value => setIsLastStep(value)}
                    isFirstStep={value => setIsFirstStep(value)}
                  >
                    <Step
                      className="bg-deep-orange-500"
                      onClick={() => setActiveStep(0)}
                    >
                      <div className="absolute right-[-5rem] top-[-2rem] w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 0 ? 'blue-gray' : 'gray'}
                        >
                          Event Details
                        </Typography>
                      </div>
                    </Step>
                    <Step onClick={() => setActiveStep(1)}>
                      <div className="absolute top-[-2rem] w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 1 ? 'blue-gray' : 'gray'}
                        >
                          Personal Details
                        </Typography>
                      </div>
                    </Step>
                    <Step onClick={() => setActiveStep(2)}>
                      <div className="absolute top-[-2rem] w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 2 ? 'blue-gray' : 'gray'}
                        >
                          Done
                        </Typography>
                      </div>
                    </Step>
                  </Stepper>
                  {activeStep === 0 && (
                    <div className="mt-14">
                      <form>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="occasion"
                            >
                              What's the occasion?
                            </label>
                            <input
                              id="occasion"
                              type="text"
                              placeholder="Select the Type"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            />
                          </div>
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="event-date"
                            >
                              Event Date
                            </label>
                            <input
                              id="event-date"
                              type="date"
                              placeholder="Select the Type"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            />
                          </div>
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="budget"
                            >
                              Budget
                            </label>
                            <select
                              id="budget"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            >
                              <option value="">Select the type</option>
                              {/* Add options as needed */}
                            </select>
                          </div>
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="attendees"
                            >
                              How many people will attend?
                            </label>
                            <input
                              id="attendees"
                              type="text"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            />
                          </div>
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="venue-city"
                            >
                              Venue City
                            </label>
                            <input
                              id="venue-city"
                              type="text"
                              placeholder="Select the Type"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="mt-14">
                      <form>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="occasion"
                            >
                              Your Name
                            </label>
                            <input
                              id="occasion"
                              type="text"
                              placeholder="Select the Type"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            />
                          </div>
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="event-date"
                            >
                              Email {'('}We Don't Spam{')'}
                            </label>
                            <input
                              id="email"
                              type="text"
                              placeholder="Select the Type"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            />
                          </div>
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="budget"
                            >
                              Mobile Number
                            </label>
                            <select
                              id="mobile-number"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            >
                              <option value="">Select the type</option>
                              {/* Add options as needed */}
                            </select>
                          </div>
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="attendees"
                            >
                              Tell us more we love to listen 2000 words
                            </label>
                            <input
                              id="attendees"
                              type="text"
                              className="input-field px-10 py-4 rounded-2xl bg-[#111119] text-2xl leading-[29.05px] text-[rgba(255, 255, 255, 0.58)]"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="mt-14">
                      <form>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="flex flex-col gap-4">
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="attendees"
                            >
                              Tell us more we love to listen
                            </label>
                            <textarea
                              id="more-info"
                              className="input-field w-full p-6 rounded-2xl bg-[#111119] text-lg leading-[29.05px] text-[rgba(255, 255, 255, 0.58)] resize-none"
                              rows={5}
                              placeholder="Describe addition info in 200 words"
                            ></textarea>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="newsletter"
                              type="checkbox"
                              className="mr-2"
                            />
                            <label
                              className="text-white text-lg leading-[21.78px]"
                              htmlFor="newsletter"
                            >
                              Send Quotes on WhatsApp
                            </label>
                          </div>
                        </div>
                      </form>
                      <div className="flex flex-col items-center py-10 gap-8">
                        <button className="px-20 bg-gradient-to-tl rounded-2xl from-[rgba(51,50,50,0.25)] via-[rgba(255,227,226,0.55)] via-[rgba(241,102,51,0.55)] via-[rgba(253,45,125,0.55)] to-[rgba(164,153,153,0.75)]">
                          {/* <h1 className="text-lg font-normal leading-[21.78px] bg-transparent"> */}
                          Verify Otp
                          {/* </h1> */}
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
                      >
                        <h1
                          className="capitalize text-lg leading-[21.78px] font-semibold bg-gradient-to-b from-[rgba(255,227,226,0.8)] via-[rgba(241,102,51,0.8)] to-[rgba(253,45,125,0.8)] inline-block text-transparent bg-clip-text"
                          style={{}}
                        >
                          Next Step {'>>'}
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
  );
}

{
  /* <div className="w-full mx-auto py-4 px-8">
  <Stepper
    activeStep={activeStep}
    isLastStep={value => setIsLastStep(value)}
    isFirstStep={value => setIsFirstStep(value)}
  >
    <Step onClick={() => setActiveStep(0)}>Event Details</Step>
    <Step onClick={() => setActiveStep(1)}>Personal Details</Step>
    <Step onClick={() => setActiveStep(2)}>Done</Step>
  </Stepper>
  <div className="mt-16 flex justify-between">
    <Button onClick={handlePrev} disabled={isFirstStep}>
      Prev
    </Button>
    <Button onClick={handleNext} disabled={isLastStep}>
      Next
    </Button>
  </div>
</div> */
}
