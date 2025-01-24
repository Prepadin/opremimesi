import { Users, MessageCircle, Layout, HardHat, Home, TreePine, Upload, MousePointer, Wand2 } from "lucide-react"
import { IconCard } from "@/components/icon-card"
import { StepCard } from "@/components/step-card"

export const LandingCard = () => (
  
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Hitro in enostavno{" "}
            <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">
            Notranja tehnologija AI
            </span>
          </h1>

          {/* User Groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12 ">
            <IconCard icon={Users} title="TI, TVOJA DRUŽINA, TVOJI PRIJATELJI" />
            <IconCard icon={MessageCircle} title="SPLETNA SKUPNOST" />
            <IconCard icon={Layout} title="NOTRANJI OBLIKOVALECI" />
            <IconCard icon={HardHat} title="ARHITEKTI, GRADBENICI HIŠ" />
            <IconCard icon={Home} title="NEPREMIČNINSKE AGENCIJE, NEPREMIČNINSKI AGENTI" />
            <IconCard icon={TreePine} title="IN VSI DRUGI" />
          </div>
        </section>

        {/* How to Use Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-violet-600 font-semibold">OBLIKOVANJE VAŠEGA DOMA Z AI JE LAHKO PREPROSTO </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
            Kako uporabljati Opremi Me v <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">treh preprostih korakih</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              icon={Upload}
              title="Upload"
              description="Naložite svojo sliko katere koli vrste sobe"
            />
            <StepCard
              number={2}
              icon={MousePointer}
              title="Customize"
              description="Prilagodite vrsto sobe, navodila po meri, način oblikovanja in slog"
            />
            <StepCard
              number={3}
              icon={Wand2}
              title="Generate"
              description="V nekaj sekundah ustvarite nove ideje za okrasitev in oblikovanje"
            />
          </div>
        </section>
      </main>
    </div>
  )


