import React from 'react';
import { MdLiveTv } from 'react-icons/Md';
import { RiLiveLine } from 'react-icons/Ri';
import { BiNotepad } from 'react-icons/Bi';
import { MdSportsEsports } from 'react-icons/Md';
import { GrDocumentPerformance } from 'react-icons/Gr';
import Lottie, { useLottie } from "lottie-react"
import liveClass from '../../../assets/academic/onlineClass.json'
import watchVideo from '../../../assets/academic/watchVideo.json'
import notes from '../../../assets/academic/notes.json'
import sportseq from '../../../assets/academic/sportseq.json'
import performance from '../../../assets/academic/performance.json'


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../shared/Header';

const Academic = () => {
    return (
        <div className="py-12  bg-gradient-to-r from-sky-800 to-indigo-800 ">
            <div className="max-w-screen-xl mx-auto">

                <div className="headarea">
                      <div class="container flex justify-center mx-auto ">
                     <div className="gallery-head mx-auto mt-8">
                    <h2 className='text-3xl font-bold text-slate-50'>Our Academic Program Include</h2>
                    <div className="divider before:bg-slate-50 after:bg-slate-50 mb-10"></div>
                    </div>
                    </div>
              </div>



                     <Tabs className="flex flex-row gap-10 justify-around mx-auto items-center">
                    <TabList className="no-underline flex flex-col gap-10">
                        <Tab className='bg-white  cursor-pointer flex items-center gap-5 border border-2 shadow-xl p-3 px-8 text-xl font-bold hover:translateY(-2px)'><RiLiveLine></RiLiveLine>Live & Recorded Class</Tab>
                        <Tab className='bg-white cursor-pointer flex items-center gap-5 border border-2 shadow-xl p-3 px-8 text-xl font-bold hover:translateY(-2px)'><MdLiveTv></MdLiveTv>Unlimited Video</Tab>
                        <Tab className='bg-white cursor-pointer flex items-center gap-5 border border-2 shadow-xl p-3 px-8 text-xl font-bold hover:translateY(-2px)'><BiNotepad></BiNotepad>Note Class</Tab>
                        <Tab className='bg-white cursor-pointer flex items-center gap-5 border border-2 shadow-xl p-3 px-8 text-xl font-bold hover:translateY(-2px)'><MdSportsEsports></MdSportsEsports>Sports Equipment Support</Tab>
                        <Tab className='bg-white cursor-pointer flex items-center gap-5 border border-2 shadow-xl p-3 px-8 text-xl font-bold hover:translateY(-2px)'><GrDocumentPerformance></GrDocumentPerformance>Performance Report</Tab>
                        </TabList>
                       

                        <TabPanel>
                        <Lottie animationData={liveClass} loop={true} className='h-96 w-96' />;
                        </TabPanel>
                        <TabPanel>
                        <Lottie animationData={watchVideo} loop={true} className='h-96 w-96' />;
                    </TabPanel>
                     <TabPanel>
                        <Lottie animationData={notes} loop={true} className='h-96 w-96' />;
                    </TabPanel>
                     <TabPanel>
                        <Lottie animationData={sportseq} loop={true} className='h-96 w-96' />;
                    </TabPanel>
                     <TabPanel>
                        <Lottie animationData={performance} loop={true} className='h-96 w-96' />;
                        </TabPanel>
                    </Tabs>
            </div>
        </div>
    );
};

export default Academic;