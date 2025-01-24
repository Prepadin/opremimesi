import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export const LandingTutos = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
          Posnemite fotografijo in v nekaj sekundah preoblikujte svojo notranjost z uporabo umetne inteligence
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Ali želite spremeniti svoj dom znotraj? Naša čudovita notranja funkcija umetne inteligence Opremi Me je tukaj da
          pomaga. Omogoča vam prenovo vašega prostora v različnih stilih in zagotavlja spektakularen videz. Lahko preoblikujete
          notranjost z lahkoto.
          </p>
          {/* <Button size="lg" className="bg-[#6C5CE7] hover:bg-[#5A4BD1]">
            Inizia Subito
          </Button> */}
        </div>
        {/* <div className="aspect-[4/3] w-full"> */}
          {/* <BeforeAfterSlider
            beforeImage="@/images/room4.jpg"
            afterImage="@/images/room4lux.png"
          /> */}
             <div className="aspect-[4/3] w-full relative rounded-full overflow-hidden"  style={{ height: "300px" }}>
          <Image
            src="/room4lux.png"
            alt="Before redesign"
            layout="fill"
            objectFit="cover"
            priority
          />
          </div>
      </div>
      <div className="text-center mb-16 space-y-12">
        {/* <p className="text-purple-600 font-medium">FALLO IN SECONDI INVECE DI GIORNI</p> */}
        <h1 className="text-4xl md:text-5xl font-bold ">
          <span className="text-purple-600">Opremi Me lahko pomaga vam in vašemu podjetju prihraniti denar. </span>
          <span className="text-white">Čas in denar. Začnite danes.</span>
        </h1>
      </div>
    </section>
  )
}

