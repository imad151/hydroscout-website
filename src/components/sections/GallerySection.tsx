import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Import your gallery images here:
import galleryExperiment from "@/assets/gallery_experiment.png";
import plasticTurbid from "@/assets/plastics_turbid.png";
import disposalSystem from "@/assets/disposal_system.jpg";
import heroRobot from "@/assets/hero-robot.jpeg";
import datasetAnnotation from "@/assets/annotation_dataset.png";
import assemblyGif from "@assets/assembly_gif.gif"
//import assemblyImg from "assets/assembly_img.png"

// ==========================================
// TYPES
// ==========================================
interface GalleryItem {
  type: "image" | "video" | "gif";
  src: string;
  gifsrc?: string;
  title: string;
  description: string;
  videoUrl?: string;
}

// ==========================================
// GALLERY ITEMS
// ==========================================
const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: galleryExperiment,
    title: "Experimental Setup for Imaging of Microplastics",
    description:
      "This experimental setup was designed to evaluate microplastic visibility in controlled conditions and train the AI system. A Raspberry Pi HQ Camera was used to detect and capture images of small plastic fragments in a beaker containing clear or turbid water.  The images collected were stored directly on a memory card. In addition, microplastic-fluorescent images were also captured using focused UV light directed into the water.",
  },
  {
    type: "image",
    src: plasticTurbid,
    title: "Detecting Microplastics in Turbid Water Using Dual-Light Fluorescence",
    description:
      "We captured images of microplastic fragments of varying sizes suspended in turbid water using a dual-light imaging system. Under white light, the plastic particles remain effectively invisible. However, under UV light, the plastics fluoresce clearly, enabling reliable detection. To reflect real-world conditions, we tested the system under combined white and UV lights, confirming that fluorescence remains detectable even in daylight-like environments.",
  },
  {
    type: "image",
    src: datasetAnnotation,
    title: "Annotating Dataset for AI based Microplastic Detection",
    description:
      "We captured a total of 150 images of microplastics (PET, PP and PVC) in our test environment. Using image augmentation tools, we tripled our dataset to 450 images. These microplastic images were annotated using RoboFlow and then used to train and fine-tune a pre-trained  YOLOv8 model.",
  },
  {
    type: "image",
    src: disposalSystem,
    title: "Post Experimental Microplastics Collection and Disposal System",
    description:
      "Following imaging experiments, microplastic-contaminated water was filtered using a muslin cloth. The filtered and clean water was safely discarded. The cloth was allowed to dry before the collected microplastics were disposed of, in accordance with appropriate waste-handling practices.",
  },
  {
    type: "gif",
    src: heroRobot,
    gifsrc: assemblyGif,
    title: "Thruster Wiring and Integration for Underwater Propulsion",
    description: "This step documents the wiring and integration of the propulsion system used in the prototype. Each module is powered by a U01 brushless underwater thruster rated for 12–16 V operation and capable of producing up to 2 kg of thrust. The thrusters include bi-directional electronic speed controllers (ESCs), enabling precise forward and reverse motion control required for underwater maneuvering. Proper wiring and sealing were critical to ensure electrical safety, reliability, and consistent thrust performance during submerged operation."
  },
  {
    type: "image",
    src: heroRobot,
    title: "HydroScout: First Prototype",
    description:
      "Our first HydroScout prototype is ready for controlled testing. The current prototype uses a non-corrosive PVC frame with four corner-mounted thrusters. Electronics are housed in a watertight enclosure. Inside, an Arduino Mega handles thruster control, with a Raspberry Pi acting as the central controller. The Raspberry Pi also toggles UV and white lights, and provides a remote interface for teleoperation with live camera streaming. A fine-tuned onboard AI model runs on the Pi to detect microplastics in real time.",
  },
];

// ==========================================
// COMPONENT
// ==========================================
const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="gallery"
      className={`min-h-screen flex items-center py-24 lg:py-32 gradient-surface transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our development journey through photos and videos documenting
            key milestones and progress updates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group gradient-card rounded-2xl overflow-hidden border border-border/30 shadow-soft hover:shadow-card transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`View ${item.title}`}
            >
              {/* Image / Video */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-elevated">
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {item.type === "video" && (
                  <span className="mb-2 inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Video
                  </span>
                )}

                <h3 className="font-semibold text-foreground mb-2 line-clamp-1 text-sm sm:text-base">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {galleryItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Gallery updates coming soon! Check back for project photos and
              videos.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedItem && (
            <>
              <div className="relative aspect-video w-full">
                {selectedItem.type === "video" && selectedItem.videoUrl ? (
                  <iframe
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <DialogHeader>
                  {selectedItem.type === "video" && (
                    <span className="mb-2 inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Video
                    </span>
                  )}

                  <DialogTitle className="text-xl sm:text-2xl font-display font-bold text-foreground">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-muted-foreground leading-relaxed mt-4 text-sm sm:text-base">
                  {selectedItem.description}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
