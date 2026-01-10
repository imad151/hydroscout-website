import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Images
import galleryExperiment from "@/assets/gallery_experiment.png";
import plasticTurbid from "@/assets/plastics_turbid.png";
import disposalSystem from "@/assets/disposal_system.jpg";
import heroRobot from "@/assets/hero-robot.jpeg";
import datasetAnnotation from "@/assets/annotation_dataset.png";

// Video
import turbineVid from "@/assets/turbineVid.mp4";

// ==========================================
// TYPES
// ==========================================
interface GalleryItem {
  type: "image" | "video";
  src: string;        // poster image
  videoSrc?: string; // mp4
  title: string;
  description: string;
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
      "This experimental setup was designed to evaluate microplastic visibility in controlled conditions and train the AI system. A Raspberry Pi HQ Camera was used to detect and capture images of small plastic fragments in a beaker containing clear or turbid water.",
  },
  {
    type: "image",
    src: plasticTurbid,
    title: "Detecting Microplastics in Turbid Water Using Dual-Light Fluorescence",
    description:
      "We captured images of microplastic fragments of varying sizes suspended in turbid water using a dual-light imaging system. Under UV light, the plastics fluoresce clearly, enabling reliable detection.",
  },
  {
    type: "image",
    src: datasetAnnotation,
    title: "Annotating Dataset for AI based Microplastic Detection",
    description:
      "150 images were captured and augmented to 450. They were annotated in RoboFlow and used to fine-tune a YOLOv8 model.",
  },
  {
    type: "image",
    src: disposalSystem,
    title: "Post Experimental Microplastics Collection and Disposal System",
    description:
      "Microplastic-contaminated water was filtered using muslin cloth and disposed following proper waste handling practices.",
  },
  {
    type: "video",
    src: heroRobot,        // poster
    videoSrc: turbineVid, // mp4
    title: "Thruster Wiring and Integration for Underwater Propulsion",
    description:
      "This step documents the wiring and integration of the underwater thrusters, ESCs, and power systems used in the prototype.",
  },
  {
    type: "image",
    src: heroRobot,
    title: "HydroScout: First Prototype",
    description:
      "Our first HydroScout prototype is ready for controlled testing with thrusters, Raspberry Pi, Arduino Mega, and onboard AI.",
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
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our development journey through photos and videos documenting
            key milestones and progress updates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group gradient-card rounded-2xl overflow-hidden border border-border/30 shadow-soft hover:shadow-card transition-all text-left"
            >
              <div className="relative aspect-video overflow-hidden">
                {item.type === "video" ? (
                  <video
                    src={item.videoSrc}
                    poster={item.src}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="p-5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedItem && (
            <>
              <div className="aspect-video w-full">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
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
                  <DialogTitle className="text-2xl">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="mt-4">
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
