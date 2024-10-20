
import React from "react";
import Title from "./Title";
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
        <Title title="Experience" />
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              key={index}
              visible={true}
              className="vertical-timeline-element--education text-black dark:text-white"
              contentStyle={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "0.75rem", // rounded-xl
                paddingLeft: "1.25rem", // px-5
                paddingRight: "1.25rem", // px-5
                paddingTop: "0.75rem", // py-3
                paddingBottom: "0.75rem", // py-3
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem"  
              }}
              contentArrowStyle={{
                borderRight:"0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon ={item.icon}
              iconStyle={{
                background: "black",
                fontSize: "1.5rem",
                color: '#fff'
                
              }}
            >
                <h3 className="font-semibold capitalize"> {item.title}</h3>
                <p className="!font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-slate-400">{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Timeline;
