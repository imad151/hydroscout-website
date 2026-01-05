import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/**
 * GALLERY DATA - Easy to update!
 * 
 * To add a new gallery item:
 * 1. Add your image to src/assets/ folder
 * 2. Import it at the top of this file
 * 3. Add a new object to the galleryItems array below
 * 
 * Example:
 * import myNewImage from "@/assets/my-new-image.jpg";
 * 
 * Then add to galleryItems:
 * {
 *   type: "image",  // or "video"
 *   src: myNewImage,
 *   title: "My Update Title",
 *   description: "What happened in this update",
 *   date: "2025-01-15",
 * },
 * 
 * For videos, add videoUrl for the embed:
 * {
 *   type: "video",
 *   src: thumbnailImage,
 *   videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
 *   title: "Video Title",
 *   description: "Video description",
 *   date: "2025-01-15",
 * },
 */

// Import your gallery images here:
import galleryExperiment from "@/assets/gallery_experiment.png";
import plasticTurbid from "@/assets/plastic_turbid.png";
import disposalSystem from "@/assets/disposal_system.jpg"
import heroRobot from "@/assets/hero-robot.jpeg";
import datasetAnnotation from "@/assets/annotaion_dataset.png"

// ==========================================
// GALLERY ITEMS - Add new items here!
// ==========================================
interface GalleryItem {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  date: string;
  videoUrl?: string; // For videos, add the embed URL
}

const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: galleryExperiment,
    title: "Experimental Setup for Imaging of MicroPlastics",
    description: "This experimental setup was designed to evaluate microplastic visibility under controlled lighting conditions. A beaker containing water polluted with small plastic fragments was imaged using a Raspberry Pi HQ Camera, with data recorded directly to on-board storage. The configuration shown includes a focused UV light source directed into the water, enabling fluorescence-based visualization of plastic particles.",
    date: "2025-12-02",
  },
  {
    type: "image",
    src: plasticTurbid,
    title: "Detecting Microplastics in Turbid Water Using Dual-Light Fluorescence",
    description: "We captured images of microplastic fragments of varying sizes suspended in turbid water using a dual-light imaging system. Under white light, the plastic particles remain effectively invisible. Under UV illumination, however, the plastics fluoresce clearly, enabling reliable detection. To reflect real-world conditions, we tested the system under combined white and UV lighting, confirming that fluorescence remains detectable even in daylight-like environments where background light could interfere.",
    date: "2025-12-03",
  },
  {
    type: "image",
    src: datasetAnnotation,
    title: "Annotating Dataset for AI based MicroPlastic Detection",
    description: "We used the captured images of microplastics in our beaker environment and annotaed the dataset using RoboFlow annotate. We took 50 images of PET, PP and PVC plastics under White, UV and mixed lighting condition under different orientations. Using image augmentation tools, we tripled our dataset to 150 images which was used to train and fine-tune a pre-trained yolov8 model.",
    date: "2026-01-03"
  },
  {
    type: "image",
    src: disposalSystem,
    title: "Post Experimental Microplastics collection and disposal system",
    description: "Following imaging experiments, microplastic-contaminated water was filtered using a muslin cloth to capture residual plastic particles. The filtered water was safely discarded, and the cloth was allowed to dry before the collected microplastics were disposed of in accordance with appropriate waste-handling practices.",
    date: "2026-01-04",
  },
  {
    type: "image",
    src: heroRobot,
    title: "HydroScout: First Prototype",
    description: "Our first HydroScout prototype is ready for controlled testing. It uses four corner-mounted turbines driven by an Arduino Mega, with a Raspberry Pi acting as the central controller. The Pi coordinates motor control, toggles UV and white lighting, and provides a remote interface for teleoperation with live camera streaming. A fine-tuned onboard AI model runs on the Pi to detect microplastics in real time.",
    date: "2026-01-03"
  }
  // Add more items here following the same format
];
// ==========================================

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            Follow our development journey through photos and videos documenting key milestones and progress updates.
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
              {/* Image/Video Container */}
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
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                  {item.type === "video" && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Video
                    </span>
                  )}
                </div>
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
              Gallery updates coming soon! Check back for project photos and videos.
            </p>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedItem && (
            <>
              {/* Image */}
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
              
              {/* Content */}
              <div className="p-6">
                <DialogHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={selectedItem.date}>{formatDate(selectedItem.date)}</time>
                    {selectedItem.type === "video" && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Video
                      </span>
                    )}
                  </div>
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
