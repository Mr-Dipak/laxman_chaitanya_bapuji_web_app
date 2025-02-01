import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <main className="text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Sant Shree Laxman Chaitanya
            </h1>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200">
              Radha Madhav Mandir
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A sacred space for spiritual growth, community, and divine connection
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                Visit Temple
              </a>
              <a
                href="#about"
                className="px-8 py-3 text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Radha Madhav Mandir. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

const features = [
  {
    icon: "🕉️",
    title: "Daily Prayers",
    description: "Join us for daily aartis and spiritual ceremonies",
  },
  {
    icon: "🏛️",
    title: "Sacred Space",
    description: "Experience peace in our beautiful temple premises",
  },
  {
    icon: "🤝",
    title: "Community",
    description: "Be part of our growing spiritual family",
  },
];
