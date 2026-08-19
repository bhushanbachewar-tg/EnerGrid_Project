export default function Page() {
  const investors = [
    {
      name: "IndiGrid",
      tags: ["BSE: 540565", "NSE: INDIGRID"],
      description:
        'IndiGrid is the first Infrastructure Investment Trust ("InvIT") in the Indian power sector. It owns 41 power projects, consisting of 49 transmission lines with more than ~8,700 ckms length, 15 substations with ~22,550 MVA transformation capacity, ~855 MWAC (~1.1 GWp) of solar generation capacity, and 450 MW / 900 MWh of Battery Energy Storage Systems.',
      highlights: [
        "Assets under management (AUM) of over ~₹ 294 billion (~USD 3.4 billion)",
        "Investment manager wholly owned by KKR",
        "41 power projects across India",
      ],
    },
    {
      name: "British International Investment",
      tags: ["UK DFI", "Impact Investor"],
      description:
        "British International Investment is the UK's development finance institution and impact investor. As a trusted investment partner to businesses in Africa, Asia and the Caribbean, BII invests to create productive, sustainable and inclusive economies.",
      highlights: [
        "At least 30% of total new commitments (2022–2026) in climate finance",
        "Founding member of the 2X Challenge — over $33.6 billion raised for women's economic development",
        "Investments in over 1,580 businesses across 65 countries",
        "Total net assets of £8.5 billion",
      ],
    },
    {
      name: "Norfund",
      tags: ["Norwegian Government", "Development Fund"],
      description:
        "Norfund is the Norwegian Investment Fund for developing countries with a mission to create jobs and improve lives by investing in businesses that drive sustainable development. Owned and funded by the Norwegian Government, Norfund is the Government's most important tool for strengthening the private sector in developing countries and reducing poverty.",
      highlights: [
        "Committed portfolio of USD 3.6 billion",
        "Investments across Sub-Saharan Africa, South/Southeast Asia, and Latin America",
        "Manages the Norwegian Climate Investment Fund focused on reducing greenhouse gas emissions",
        "Invests in renewable energy in developing countries with large fossil fuel emissions",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Our Investors</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Backed by leading global infrastructure and development finance institutions.
      </p>

      <div className="grid gap-8">
        {investors.map((investor) => (
          <div
            key={investor.name}
            className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 className="text-2xl font-semibold">{investor.name}</h2>
              {investor.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-5">
              {investor.description}
            </p>

            <ul className="grid sm:grid-cols-2 gap-2">
              {investor.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-emerald-500 mt-0.5">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
