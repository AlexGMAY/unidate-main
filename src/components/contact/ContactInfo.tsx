import { GiEnvelope, GiSmartphone, GiPositionMarker, GiClockwork } from "react-icons/gi";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: GiEnvelope,
      title: "Email Support",
      details: ["support@unidate.com", "safety@unidate.com"],
      description: "We respond within 24 hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GiSmartphone,
      title: "Phone Support",
      details: ["+216 20 036 679", "+216 70 036 679"],
      description: "Mon-Fri: 9AM-6PM Tunisia Time",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: GiPositionMarker,
      title: "Office Location",
      details: ["123 Bourguiba Street", "Tunis City, Tunisia 10001"],
      description: "Visit our headquarters",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const responseTimes = [
    { type: "General Inquiries", time: "Within 24 hours", priority: "normal" },
    { type: "Technical Support", time: "Within 12 hours", priority: "high" },
    { type: "Safety Reports", time: "Within 6 hours", priority: "urgent" },
    { type: "Billing Issues", time: "Within 8 hours", priority: "high" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Have questions about UniDate? Need support with your account? 
          Our dedicated team is here to provide you with exceptional service 
          and ensure your experience is seamless and secure.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <div key={index} className="flex items-start group">
              <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <IconComponent className="text-white text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                ))}
                <p className="text-gray-500 text-sm mt-1">{method.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Response Times */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-center mb-4">
          <GiClockwork className="text-blue-600 text-xl mr-2" />
          <h4 className="font-semibold text-blue-800 text-lg">Response Times</h4>
        </div>
        <div className="space-y-3">
          {responseTimes.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-blue-100 last:border-b-0">
              <span className="text-gray-700 font-medium">{item.type}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.priority === 'urgent' 
                  ? 'bg-red-100 text-red-800' 
                  : item.priority === 'high' 
                  ? 'bg-orange-100 text-orange-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
            <span className="text-white text-sm font-bold">!</span>
          </div>
          <div>
            <h4 className="font-semibold text-red-800 mb-2">Emergency Contact</h4>
            <p className="text-red-700 text-sm">
              For immediate safety concerns or emergencies, please contact local authorities first.
              <strong className="block mt-1">Emergency Services: 190 (Tunisia) or your local emergency number</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}