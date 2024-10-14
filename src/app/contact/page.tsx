import ButtonArrowRight from '@/components/buttons/ButtonArrowRight';
import Image from 'next/image';
import React from 'react';

export default function ContactPage() {
  return (
    <main>
      <section className='py-space-140'>
        <div className='container '>
          <div className=''>
            <h1 className='text-headline-lg lg:text-display-xl font-[500] pb-space-80'>
              Let's Start a<br />
              Project together
            </h1>
            <div className='w-full flex flex-col md:flex-row gap-space-60 lg:gap-space-140'>
              <div className='w-full md:w-8/12 pt-0'>
                <div className='pb-4'>
                  <label
                    htmlFor='name'
                    className='text-body-lg lg:text-body-xl'
                  >
                    What's your name
                  </label>
                  <input
                    id='name'
                    type='text'
                    placeholder='John Doe'
                    name='name'
                  />
                </div>
                <div className='py-4'>
                  <label
                    htmlFor='email'
                    className='text-body-lg lg:text-body-xl'
                  >
                    Email Address
                  </label>
                  <input
                    id='email'
                    type='email'
                    placeholder='johndoe@email.com'
                    name='email'
                  />
                </div>
                <div className='py-4'>
                  <label
                    htmlFor='contactReason'
                    className='text-body-lg lg:text-body-xl'
                  >
                    What are you contacting about
                  </label>
                  <input
                    type='text'
                    name='contactReason'
                    placeholder='Design, Development'
                  />
                </div>
                <div className='py-4'>
                  <label
                    htmlFor='message'
                    className='text-body-lg lg:text-body-xl'
                  >
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    rows={6}
                    placeholder='Hello Caleb, can you help with'
                  />
                </div>
                <div className='pt-6'>
                  <ButtonArrowRight text='Send Message' />
                </div>
              </div>
              <div className='w-full md:w-4/12'>
                <div className='headshot rounded-full overflow-hidden w-[100px] h-[100px]'>
                  <Image
                    src='http://via.placeholder.com/100x100'
                    alt=''
                    objectFit='cover'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='py-10 lg:py-space-60'>
                  <p className='lead lead-sm'>Details</p>
                  <div className='pt-5'>
                    <p className='text-body-xl mb-2'>Caleb Olojo</p>
                    <p className='text-body-xl mb-2'>
                      <span>Location:</span> Atlanta, GA
                    </p>
                    <p className='text-body-xl'>hello@calebolojo.com</p>
                  </div>
                </div>
                <div>
                  <p className='lead lead-sm'>Socials</p>
                  <div className='pt-5'>
                    <p className='text-body-xl mb-2'>Twitter</p>
                    <p className='text-body-xl'>LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
