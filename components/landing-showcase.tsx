import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const LandingShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Fill The Room Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#7C3AED]">Napolni sobo</span> <span className="text-white">s pohištvom in okraski</span>
          </h2>
          {/* <h3 className="text-3xl md:text-4xl font-bold text-white">Mobili e Decorazioni</h3> */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Ste se kdaj vprašali, kakšen bi bil vaš dom s pohištvom, ki si ga želite? Opremi Me omogoča, da zagotovi katero koli
            tip sobe. Preizkušate lahko različne konfiguracije, dokler ne najdete popolne. Okrasite prazno sobo z
            pohištvo. Dela za prostore v gradnji ali prazne prostore.
          </p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/spalnicalux.png"
              alt="Empty room with white walls and wooden flooring"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </CardContent>
        </Card>
      </section>

      {/* Decor Staging Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/living2-2.png"
              alt="Modern room with purple sofa and industrial shelving"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </CardContent>
        </Card>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#7C3AED]">Postavitev pohištva</span> <span className="text-white">in pohištvena vitrina</span>
          </h2>
          {/* <h3 className="text-3xl md:text-4xl font-bold text-white">Vetrina di mobili</h3> */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Predstavite svoje pohištvo in okraske v številnih stilih. Lahko vidite, kako bi izgledale vaše stvari
            preučite vse vrste različnih modelov, kot profesionalni dekorater. Postavite pohištvo ali druge predmete na ogled
            predmetov.
          </p>
        </div>
      </section>
    </div>
  )
}

