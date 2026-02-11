export default function Map() {
  return (
    <section
      className="py-12 px-4 bg-white scroll-mt-24"
      id="map"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#364025] mb-2">
            CUSTOMER AND CLIENTS MAP
          </h2>
          <div className="w-16 h-1 bg-[#6F8054] mx-auto"></div>
        </div>

        {/* GOOGLE MAP CONTAINER */}
        <div className="w-full h-[320px] md:h-[350px] bg-[#F5F5F5] rounded-lg shadow-md mb-10 overflow-hidden">
          {/* Replace this with real Google Maps iframe */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-[#364025]/60 text-sm">
              Google Maps will be embedded here
            </p>
          </div>
        </div>

        {/* CONNECT WITH US SECTION */}
        <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-xl border border-[#E0E0E0]">

          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#364025]">
              CONNECT WITH US
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* COLUMN 1 - COMPANY DETAILS */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#364025]/80 mb-1 block">
                  Company Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-[#D0D0D0] rounded-lg focus:border-[#6F8054] focus:outline-none focus:ring-1 focus:ring-[#6F8054]/20 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#364025]/80 mb-1 block">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 bg-white border border-[#D0D0D0] rounded-lg focus:border-[#6F8054] focus:outline-none focus:ring-1 focus:ring-[#6F8054]/20 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#364025]/80 mb-1 block">
                  Business Address
                </label>
                <input
                  type="text"
                  placeholder="Your business address"
                  className="w-full px-4 py-3 bg-white border border-[#D0D0D0] rounded-lg focus:border-[#6F8054] focus:outline-none focus:ring-1 focus:ring-[#6F8054]/20 text-sm"
                />
              </div>
            </div>

            {/* COLUMN 2 - CONTACT INFO */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#364025]/80 mb-1 block">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-white border border-[#D0D0D0] rounded-lg focus:border-[#6F8054] focus:outline-none focus:ring-1 focus:ring-[#6F8054]/20 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#364025]/80 mb-1 block">
                  Contact Person
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 bg-white border border-[#D0D0D0] rounded-lg focus:border-[#6F8054] focus:outline-none focus:ring-1 focus:ring-[#6F8054]/20 text-sm"
                />
              </div>
            </div>

            {/* COLUMN 3 - MESSAGE */}
            <div>
              <label className="text-sm font-medium text-[#364025]/80 mb-1 block">
                Message Us
              </label>

              <div className="relative">
                <textarea
                  rows="6"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 bg-white border border-[#D0D0D0] rounded-lg focus:border-[#6F8054] focus:outline-none focus:ring-1 focus:ring-[#6F8054]/20 text-sm resize-none pr-24"
                ></textarea>

                <button className="absolute bottom-3 right-3 px-4 py-2 bg-[#6F8054] text-white rounded-md hover:bg-[#364025] transition-colors text-xs">
                  Send
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
