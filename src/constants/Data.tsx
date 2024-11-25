import { RiCpuLine, RiEarthLine, RiRamLine, RiShieldLine, RiTimeLine, RiWifiLine } from "react-icons/ri";


export const landingPageData = {
    hero: {
      title: "High-Performance Dedicated Servers",
      description:
        "Experience unparalleled performance with our enterprise-grade infrastructure. Deploy your applications on powerful dedicated servers optimized for your needs.",
     
    },
    features: [
      {
        icon: <RiShieldLine size={40}/>, 
        title: "Enterprise Security",
        description:
          "Advanced DDoS protection and regular security updates to keep your data secure.",
      },
      {
        icon: <RiEarthLine size={40}/>, 
        title: "Global Network",
        description:
          "Strategically located data centers ensuring low latency worldwide.",
      },
      {
        icon: <RiTimeLine size={40}/>, 
        title: "99.9% Uptime",
        description:
          "Guaranteed uptime with redundant infrastructure and alert monitoring.",
      },
    ],
    pricingPlans: [ {
      title: "Starter",
      price: 49,
      features: [
        { icon: <RiCpuLine />, description: "4 vCPU" },
        { icon: <RiRamLine />, description: "8GB RAM" },
        { icon: <RiShieldLine />, description: "100GB SSD" },
        { icon: <RiWifiLine />, description: "5TB " },
      ],
    },
    {
      title: "Professional",
      price: 99,
      features: [
        { icon: <RiCpuLine />, description: "8 vCPU" },
        { icon: <RiRamLine />, description: "16GB RAM" },
        { icon: <RiShieldLine />, description: "240GB SSD" },
        { icon: <RiWifiLine />, description: "10TB " },
      ],
    },
    {
      title: "Enterprise",
      price: 199,
      features: [
        { icon: <RiCpuLine />, description: "16 vCPU" },
        { icon: <RiRamLine />, description: "32GB RAM" },
        { icon: <RiShieldLine />, description: "500GB SSD" },
        { icon: <RiWifiLine />, description: "Unlimited " },
      ],
    },
  ],
   
    
  };
  