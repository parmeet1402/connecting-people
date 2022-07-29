import React from "react";
import { CallLayout } from "../../components/layouts";

type Props = {};

const MeetingRoom = (props: Props) => {
  return (
    <CallLayout
      heading="Arizona"
      otherPeople={[
        {
          streams: [{}, {}],
          name: "Rahul Dravid",
          id:"X24343",
        },
        {
            streams: [{}, {}],
            name: "Rahul Dravid",
            id:"X24333",
        },
        {
            streams: [{}, {}],
            name: "Rahul Dravid",
            id:"X14333",
        },
      ]}
      user={{ name: "Harsh" }}
      callStartTime={new Date()}
    />
  );
};

export default MeetingRoom;

/* 
Call Layout
    X Back Button and Exit Room Button
    - Room Name with Elipsis feature
    - VideoCallCard
        - With Name
        - With support for video off
        - with Support for audio off
        - With support for both audio and video off
    - VideoCallCardList
    - Bottom Bar
        - Left Section
            - Avatar with Name 
            - Time UI
        - Right Section
            - Mic UI
            - Video Camera UI
*/
