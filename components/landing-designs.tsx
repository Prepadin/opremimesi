import Image from "next/image"

export const LandingDesgns = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-16 space-y-4">
        <p className="text-purple-600 font-medium">NAREDITE TO V SEKUNDAH NAMESTO DNEVIH</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-purple-600">Opremi Me Umetna inteligenca je za </span>
          <span className="text-white">lastnike stanovanj in strokovnjake</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Personal Use Section */}
        <div className="space-y-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/for-whom-1.png"
              alt="Person using home design app on mobile phone"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
            Osebna uporaba <span className="text-purple-600">01</span>
            </h2>
            <p className="text-zinc-400">
            Odkrijte  <span className="text-purple-600">stil dekoracije</span> ki ustreza vašim željam in
            ustvarite neomejene ustvarjalne in realistične koncepte za notranje in zunanje prostore vašega doma.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Dekoracija doma AI",
              "AI hišno pohištvo",
              "DIY okraski za dom",
              
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Use Section */}
        <div className="space-y-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/for-whom-2.png"
              alt="Professional working at desk with laptop"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
            Profesionalna uporaba <span className="text-blue-400">02</span>
            </h2>
            <p className="text-zinc-400">
            Na potencialne stranke naredite odličen prvi vtis tako, da jim pokažete, koliko zmore vaše delo{" "}
              <span className="text-blue-400">izboljšajte svoj dom in prihranite čas</span>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Notranji oblikovalec",
              "Arhitekti",
              "Gradbeniki",
              "Nepremičninske agencije",
              "Proizvajalci pohištva",
              "Podjetniki",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-50 text-blue-400 rounded-full text-sm hover:bg-blue-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

