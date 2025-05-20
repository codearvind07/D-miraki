import newbeginnings from "@/assets/new-beginnings.png"

export const Blogs = () => {
  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center gap-10">
                <div className="text-center lg:text-start space-y-6">

                    <main className="text-4xl md:text-6xl font-bold">
                        <h1 className="inline">
                            <span className="inline bg-gradient-to-r bg-clip-text text-transparent
 from-[#ff9a9e]  via-[#fecfef] to-[#ff9a9e] 
animate-text">
                                Coming Soon
                            </span>
                        </h1>
                    </main>

                    <p className="text-base md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                  Bold ideas, brilliant insights, and unstoppable innovation—our blog is where stories meet strategy. Here, we’ll share powerful perspectives, industry trends, and real-world lessons that challenge the norm and inspire action. Because success isn't just about knowledge—it's about using it to create change.  

🚀 Coming soon—stay tuned!
                    </p>


                </div>

                {/* Hero Image sections */}
                <div className="z-10">
                    <img
                        src={newbeginnings}
                        alt="Hero Image"
                        className="w-[200px] lg:w-[600px] mx-auto"
                    />
                </div>

                {/* Shadow effect */}
                <div className="shadow"></div>
            </section>
  )
}
