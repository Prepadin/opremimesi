'use client'


import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Image as ImageIcon, Sliders, X } from 'lucide-react'
import Image from "next/image"
// import { ScrollArea } from "@/components/ui/scroll-area"

interface RoomDescription {
  image: string
  description: string
}


export default function ImagePage() {
  const [file, setFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  
  const [preview, setPreview] = useState<string | null>(null)

  const rooms: RoomDescription[] = [
    {
      image: "/bed.jpg?height=50&width=50",
      description: "Elegantno opremljena spalnica v slogu Art Deco z veliko zakonsko posteljo z geometrijsko posteljnino, razkošnim žametnim foteljem in zrcalno nočno omarico, ki odraža razkošje sobe. Umetniška dela, navdihnjena z Art Deco, dodajo pridih glamurja"
    },
    {
      image: "/bedroom_2.jpg?height=50&width=100",
      description: "Spalnica, ki izžareva francoski podeželski čar z mehko oblazinjeno posteljo, stenami, okrašene s cvetličnimi tapetami, in vintage leseno garderobo. Kristalni lestenec meče topel in vabljiv sijaj nad prostorom"
    },
    {
      image: "/din.jpg?height=200&width=300",
      description: "Udobna jedilnica, ki zajema bistvo rustikalnega šarma s trdno leseno kmečko mizo v svojem jedru, obdano z eklektično mešanico neusklajenih stolov. Starinska omara služi kot izjava, vzdušje pa toplo osvetljuje vrsta čudnih Edisonovih žarnic, ki visijo s stropa"
    },
    {
      image: "/dinning.jpg?height=200&width=300",
      description: "Jedilnica, ki pooseblja sodobno eleganco, zasidrana z elegantno, minimalistično jedilno mizo v kombinaciji z elegantnimi sodobnimi stoli. Umetniške svetilke ustvarjajo osrednjo točko zgoraj, medtem ko okoliški minimalistični dekor zagotavlja, da se prostor počuti odprt, zračen in popolnoma sodoben"
    },
    {
      image: "/imga1.jpg?height=200&width=300",
      description: "Glamurozna glavna spalnica v slogu Hollywood Regency, ki se ponaša s plišastim vzglavjem, zrcalnim pohištvom, ki odraža eleganco, razkošnimi tkaninami v bogatih teksturah in razkošnimi zlatimi poudarki za pridih razkošja"
    },
    {
      image: "/living2.jpg?height=200&width=300",
      description: "Živahna dnevna soba s tropsko temo, skupaj z udobnim pohištvom iz ratana, velikimi listnatimi rastlinami, ki prinašajo zunanjost, svetlimi blazinami, ki dodajajo barve, in bambusovimi žaluzijami za nadzor naravne svetlobe"
    },
    {
      image: "/livingg.jpg?height=200&width=300",
      description: "Elegantna dnevna soba, ki zajema sodobno estetiko sredi stoletja, v središču ima starinsko mizico iz tikovine, ki jo dopolnjuje klasična sončna ura na steni in udobna preproga pod nogami, ki ustvarja toplo in vabljivo vzdušje"
    }
  ]



  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    }
  };

 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    setFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

 

  const removeImage = () => {
    setSelectedImage(null); // Clear the selected image from state
  };

  // Token for authentication (replace with actual token or fetch it securely)
  const AUTH_TOKEN = "EJNVCNK42QFNIQALCMNOLENFLQ3JNQLJ";  // Replace with the actual token

  // Function to translate the prompt
  async function translatePrompt(inputText: string): Promise<string> {
    if (!inputText) return '';

    const res = await fetch('/api/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: inputText,
        source: 'sl',  // Assuming Slovenian prompt needs to be translated to English
        target: 'en',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    return data.translatedText;  // Assuming your API returns the translated text here
  }

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!prompt || !selectedImage) {
      alert("Please provide both prompt and image");
      return;
    }

    try {
      // Step 1: Translate the prompt
      const translatedPrompt = await translatePrompt(prompt);
      console.log("Translated Prompt:", translatedPrompt);

      // Step 2: Call API route to check API limit and subscription
      const response = await axios.post('/api/design');
      if (response.status !== 200) {
        alert(response.data.error || "Failed to verify checks");
        return;
      }

      const formData = new FormData();
      formData.append("prompt", translatedPrompt);  // Use translated prompt here
      formData.append("image", selectedImage);  // Pass the actual file, not the URL

      // Step 3: Generate the image with the translated prompt
      setLoading(true);
      const imageResponse = await axios.post(
        `https://d901-46-122-68-255.ngrok-free.app/generate_design/?prompt=${translatedPrompt}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${AUTH_TOKEN}`,  // Add the token to the Authorization header
          },
          responseType: "blob",  // We expect a blob image response
        }
      );

      // Create a temporary URL for the generated image
      const imageUrl = URL.createObjectURL(imageResponse.data);
      setGeneratedImage(imageUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error generating design:", error);
      setLoading(false);
    }
  };

  // Add this new function to handle example image selection
  const handleExampleImageSelect = async (imageUrl: string, description: string) => {
    try {
      // Handle image selection
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], 'example-room.jpg', { type: 'image/jpeg' });
      setSelectedImage(file);
      
      // Set the prompt text
      setPrompt(description);
    } catch (error) {
      console.error('Error loading example image:', error);
    }
  };


 

return (
     <>
  <div className="p-5">
    <h1 className="text-3xl font-bold mb-6 ">Generator Sobne Opreme</h1>
    <form onSubmit={handleSubmit} className="mb-6 grid  ">
      <div className="mb-4 ">
        <label className="block text-base font-medium text-gray-700 ">Besedilo za oblikovanje:</label>
       
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Opišite želje oblikovanja"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      {/* <div>
        <p>Primer:</p>
    <p className="block text-sm font-medium text-gray-700 ">Elegantno opremljena spalnica v slogu Art Deco z veliko zakonsko posteljo in zrcalno nočno omarico, ki odraža razkošje sobe. Umetniška dela, navdihnjena z Art Deco, dodajo pridih glamurja. </p>
        
   </div> */}
     
 
    </form>
    </div>
    <div className="h-full w-full max-w-6xl mx-auto p-4 pb-20">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Card 1: Upload Image (Inside Form) */}
    <Card className="h-90 flex flex-col">
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
        <CardContent className="p-4 h-full flex flex-col justify-between">
          {selectedImage ? (
            <div className="relative h-full">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-full cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Vstavite sliko sobe</p>
              <p className="text-sm text-gray-400 mt-2">- ali -</p>
              <p className="text-sm text-blue-500">Pritisnite in pripnite sliko sobe</p>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Generiram, prosim počakajte ...' : 'Generiraj'}
          </button>
        </CardContent>
      </form>
    </Card>

    {/* Card 2: Generated Image Output */}
    <Card className="h-90 flex flex-col">
      <CardContent className="p-4 h-full flex flex-col justify-between">
        {generatedImage ? (
          <div className="h-full flex flex-col">
            <img
              src={generatedImage}
              alt="Generated Design"
              className="w-full h-full object-cover rounded-lg"
            />
            <a
              href={generatedImage}
              download="generated_image.png"
              className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Prenesi sliko
            </a>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg h-full flex items-center justify-center">
            <p className="text-sm text-gray-500">Generirana slika</p>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
</div>
<div className="container mx-auto p-4">
      <h1 className="text-xl  mb-6">Splošni primeri:</h1>
      {/* <ScrollArea className="h-[800px] rounded-lg border p-4"> */}
        {rooms.map((room, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src={room.image}
                  alt={`Room design ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full md:w-1/6"
                />
                <div className="w-full md:w-2/3">
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <Button 
                    onClick={() => handleExampleImageSelect(room.image, room.description)}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Preizkusi
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      {/* </ScrollArea> */}
    </div>
   
</>
  );
}