"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

const Timeline = () => {
  return (
    <div className="relative flex justify-center ">
      <section id='experience' >
      <h1 className="text-center uppercase tracking-widest text-blue-100 mb-8">Timeline</h1>
        <VerticalTimeline>
          
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              key={index}
              visible={true}
              className="text-black vertical-timeline-element--work s-12"
            >
                <h3 className="vertical-timeline-element-title"> {item.title}</h3>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Timeline;
