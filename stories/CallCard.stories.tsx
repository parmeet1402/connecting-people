import CallCard from "../components/card/CallCard";

const config = {
  title: "Example/CallCard",
  component: CallCard,
  args: {
    name: "Rahul Dravid",
    isAudio: true,
    isVideo: true,
  },
};

export const BaseCallCard = <CallCard />;

export default config;
