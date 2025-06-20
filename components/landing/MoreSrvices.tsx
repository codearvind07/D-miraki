"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MoreSrvices() {
  const services = [
    {
      id: 1,
      title: "Digital Marketing Services",
      description: "Elevate your online presence with the Best Marketing Agency that ensures you are seen and heard. We've got your social media marketing covered, along with proven marketing strategies that go beyond traditional methods, incorporating a dynamic blend of technical expertise, creative finesse, and strategic insight.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-slate-700",
      textColor: "text-white",
      buttonStyle: "bg-amber-500 hover:bg-amber-600 text-slate-900"
    },
    {
      id: 2,
      title: "White Label Marketing Services", 
      description: "Dmiraki marketing services to your clients via our best-in-class white label services, be it white label SEO & guest posting, white label PPC, or white label web development. We got it all!",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-amber-500",
      textColor: "text-slate-900",
      buttonStyle: "bg-white hover:bg-slate-100 text-slate-900"
    },
    {
      id: 3,
      title: "Design and Development Services",
      description: "Engage top-tier designers & developers for websites and web & mobile app development through our services. Leveraging a robust pool of talent, we facilitate timely project delivery. Our expertise lies in crafting user-friendly, high-performance websites, apps, and various other solutions.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-slate-700",
      textColor: "text-white", 
      buttonStyle: "bg-amber-500 hover:bg-amber-600 text-slate-900"
    },
    {
      id: 4,
      title: "IT Outsourcing Services",
      description: "Implement proactive maintenance, cloud, and AI solutions to ensure seamless business operations, allowing you to concentrate on core business activities via on-demand and remote contractual resources.",
      image: "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-amber-500",
      textColor: "text-slate-900",
      buttonStyle: "bg-white hover:bg-slate-100 text-slate-900"
    }
  ];

  return (
    <div className="min-h-screen py-8">
       <div className="flex-col justify-center items-center gap-2 flex pb-14">
  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent
        from-primary/60 to-primary
        animate-text">
    Ignite Your Business with Creative Tech!
  </h2>
  <p className="text-[#B3B3B3] text-sm text-center">
    Explore our innovative solutions tailored to elevate your brand.
  </p>
</div>

      <div className="container mx-auto space-y-8">
        {services.map((service, index) => (
          <Card 
            key={service.id}
            className={`${service.bgColor} ${service.textColor} overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[400px]`}>
              {/* Image Section */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-base lg:text-lg mb-8 leading-relaxed opacity-90">
                  {service.description}
                </p>
                {/* <div className="flex">
                  <Button 
                    className={`${service.buttonStyle} px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg`}
                  >
                    Learn More
                  </Button>
                </div> */}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}