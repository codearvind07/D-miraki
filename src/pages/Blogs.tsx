type BlogPost = {
  id: number
  title: string
  summary: string
  date: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why TypeScript is Essential in 2025",
    summary:
      "Explore the rising importance of TypeScript in modern web development and large-scale applications.",
    date: "May 20, 2025",
   image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
  },
  {
    id: 2,
    title: "Modern UI Design Trends",
    summary:
      "A look at the latest UI/UX trends taking over the frontend landscape.",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
  },
  {
    id: 3,
    title: "Dark Mode: Beyond the Aesthetics",
    summary:
      "Discover the real reasons why dark mode improves both UX and performance.",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
  },
  {
    id: 4,
    title: "React Server Components: A Game Changer",
    summary:
      "Learn how React Server Components are transforming the way apps handle rendering.",
    date: "May 8, 2025",
     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 5,
    title: "Flutter vs React Native in 2025",
    summary:
      "A deep dive comparison of Flutter and React Native for modern mobile app development.",
    date: "May 6, 2025",
    image: "https://images.unsplash.com/photo-1633356122404-9d1f73f62c0e",
  },
  {
    id: 6,
    title: "Progressive Web Apps (PWAs) in the Mobile-First Era",
    summary:
      "Why PWAs are gaining traction and how they bridge the gap between web and native.",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
  },
  {
    id: 7,
    title: "State Management in Modern Web Apps",
    summary:
      "An overview of tools like Redux, Zustand, and Recoil for efficient state management.",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 8,
    title: "AI-Powered Development: The Future is Now",
    summary:
      "Explore how tools like GitHub Copilot and ChatGPT are changing the way we code.",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: 9,
    title: "Mobile-First Design: Still Relevant?",
    summary:
      "In the age of diverse screen sizes, mobile-first remains a strong strategy. Here's why.",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1603898037225-dab6f190e073",
  },
  {
    id: 10,
    title: "Monorepos with Nx: Scalable Codebases",
    summary:
      "Discover how monorepos simplify management for large-scale frontend and backend apps.",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1633356120584-dc1f3ad6a9e5",
  },
  {
    id: 11,
    title: "Tailwind CSS: Utility-First CSS in Production",
    summary:
      "A guide to mastering Tailwind CSS in real-world applications for consistent styling.",
    date: "April 20, 2025",
    image: "https://images.unsplash.com/photo-1581090700227-1b1e30e3df09",
  },
  {
    id: 12,
    title: "Web3 and the Future of Decentralized Apps",
    summary:
      "How blockchain and Web3 technologies are shaping the next generation of applications.",
    date: "April 18, 2025",
    image: "https://images.unsplash.com/photo-1611078489935-f9531b61f5dc",
  },
]


export const Blogs = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Blog Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Insights & Innovations in Web Development
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Stay updated with the latest in frontend technologies, design trends, and best practices from our expert team.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden  transition-all duration-300 hover:scale-[1.02] group"
          >
            {/* Featured Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-pink-400 to-yellow-500 flex items-center justify-center text-white text-xl font-semibold">
              <img
    src={post.image}
    alt={post.title}
    className="w-full h-48 object-cover"
  />
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{post.summary}</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
