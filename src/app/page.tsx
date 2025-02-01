import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-black">
      {/* Header/Navigation */}
      <header className="bg-orange-600/90 text-white sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🕉️</span>
              <span className="font-semibold">श्री राधा माधव मंदिर</span>
            </div>
            <div className="text-sm font-medium animate-pulse">
              वेबसाइट लवकरच येत आहे...
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-500">
              संत श्री लक्ष्मण चैतन्य बापूजी आश्रम संचालित
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              श्री राधा माधव मंदिर
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              आध्यात्मिक विकास, समुदायिक एकता आणि दैवी संबंधांचे पवित्र स्थान
            </p>
            <address className="text-gray-600 dark:text-gray-400 not-italic">
              संत श्री लक्ष्मण चैतन्यजी आश्रम सद्गुरुधाम,<br />
              अंबाडी प्रकल्प, तेलवाडी चाळीसगाव रोड,<br />
              कन्नड, जिल्हा छत्रपती संभाजीनगर - ४३११०३
            </address>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-500">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Donation Section */}
        <section className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">दान माहिती</h3>
            <div className="space-y-8">
              {/* Bank Details */}
              <div className="bg-white/10 rounded-xl p-4 text-center space-y-2">
                <p className="font-semibold text-orange-200">बँक तपशील:</p>
                <div className="space-y-1">
                  <p>HDFC Bank</p>
                  <p>A/C No.: 50200070434708</p>
                  <p>IFSC: HDFC0004373</p>
                  <p>Branch: Pishor Naka, Kannad</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-white rounded-xl p-6">
                <div className="text-gray-800 text-sm mb-4 text-center font-medium">
                  Powered by Razorpay
                </div>
                <Image
                  src="/qr-code.png"
                  alt="UPI QR Code"
                  width={200}
                  height={200}
                  className="mx-auto"
                  priority
                />
                <p className="text-gray-800 text-sm mt-4 text-center font-medium">
                  कोणत्याही UPI ऍप द्वारे स्कॅन करा आणि पेमेंट करा
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-sm">
                  <p className="text-orange-200">सपोर्टेड पेमेंट ऍप्स:</p>
                  <p>Google Pay • PhonePe • Paytm</p>
                </div>
                <div className="font-bold">
                  संत श्री लक्ष्मण चैतन्यजी आश्रम ट्रस्ट पाल
                </div>
                <p className="text-sm text-orange-200">
                  80G अंतर्गत कर सवलत उपलब्ध
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-600 dark:text-orange-500">
              संपर्क
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center text-lg">
              <a href="tel:8975852179" className="hover:text-orange-600">8975852179</a>
              <a href="tel:8888075197" className="hover:text-orange-600">8888075197</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-100 dark:bg-gray-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 श्री राधा माधव मंदिर. सर्व हक्क राखीव.
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "🕉️",
    title: "दैनिक प्रार्थना",
    description: "दररोजच्या आरती आणि आध्यात्मिक कार्यक्रमांमध्ये सहभागी व्हा",
  },
  {
    icon: "🏛️",
    title: "पवित्र स्थळ",
    description: "आमच्या सुंदर मंदिर परिसरात शांती अनुभवा",
  },
  {
    icon: "🤝",
    title: "समुदाय",
    description: "आमच्या वाढत्या आध्यात्मिक कुटुंबाचा भाग बना",
  },
];
