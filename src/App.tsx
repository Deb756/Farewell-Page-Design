import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, Heart, Star, GraduationCap } from 'lucide-react';
import { Button } from './components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './components/ui/dialog';
import { FarewellMessage } from './components/FarewellMessage';
import { useIsMobile } from './components/ui/use-mobile';

export default function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [showFarewell, setShowFarewell] = useState(false);
  const isMobile = useIsMobile();

  // If we're showing the farewell message, render that instead
  if (showFarewell) {
    return <FarewellMessage onBack={() => setShowFarewell(false)} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background - Optimized for Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300">
        {/* Multiple animated gradient orbs - Reduced on mobile */}
        <motion.div
          animate={isMobile ? {
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.5, 0.4],
          } : {
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: isMobile ? 8 : 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}
        />
        <motion.div
          animate={isMobile ? {
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.5, 0.4],
          } : {
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.7, 0.5],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: isMobile ? 9 : 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-pink-400 to-rose-400 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}
        />
        {!isMobile && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, -60, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
                y: [0, 80, 0],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-rose-300 to-orange-300 rounded-full blur-3xl"
            />
          </>
        )}
      </div>

      {/* Enhanced Floating Elements - Reduced count on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 8 : 25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
            }}
            animate={{
              y: -50,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {i % 4 === 0 ? (
              <Heart className="w-3 h-3 text-white/60 fill-white/40" />
            ) : i % 4 === 1 ? (
              <Star className="w-3 h-3 text-white/60 fill-white/40" />
            ) : i % 4 === 2 ? (
              <Sparkles className="w-3 h-3 text-white/60" />
            ) : (
              <GraduationCap className="w-3 h-3 text-white/60" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Decorative Top Icons - Simplified on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8 flex items-center gap-3 md:gap-4"
        >
          <motion.div
            animate={!isMobile ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : undefined}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 ${isMobile ? '' : 'backdrop-blur-sm'} flex items-center justify-center border-2 border-white/40`}
          >
            <Star className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 ${isMobile ? '' : 'backdrop-blur-md'} flex items-center justify-center border-2 border-white/50 shadow-2xl`}
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
          </motion.div>
          <motion.div
            animate={!isMobile ? {
              rotate: [0, -360],
              scale: [1, 1.1, 1],
            } : undefined}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 ${isMobile ? '' : 'backdrop-blur-sm'} flex items-center justify-center border-2 border-white/40`}
          >
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-20 h-1 mx-auto mb-6 bg-white/60 rounded-full"
          />
          
          <h1 className="text-white mb-6 drop-shadow-2xl">
            A Special Message Awaits
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`bg-white/10 ${isMobile ? '' : 'backdrop-blur-md'} rounded-2xl border border-white/30 p-4 md:p-6 shadow-2xl`}
          >
            <p className="text-white/90 text-lg leading-relaxed">
              Our heartfelt farewell message for the seniors who have inspired and guided us
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-32 h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"
          />
        </motion.div>

        {/* Enhanced Button Container */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1
          }}
          className="relative"
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150" />
          
          <div className={`relative bg-white/10 ${isMobile ? '' : 'backdrop-blur-lg'} rounded-3xl p-4 md:p-8 border border-white/30 shadow-2xl`}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <motion.div
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setShowFarewell(true)}
                  size="lg"
                  className="relative group bg-gradient-to-br from-white to-purple-50 text-purple-700 hover:from-purple-50 hover:to-white shadow-2xl transition-all duration-300 px-8 md:px-12 py-5 md:py-7 rounded-2xl overflow-hidden border-2 border-white/50"
                >
                  <span className="relative z-10 flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-base md:text-lg">Reveal Message</span>
                  </span>
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </Button>
              </motion.div>

              <motion.div
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setShowVideo(true)}
                  size="lg"
                  className="relative group bg-gradient-to-br from-white to-pink-50 text-pink-700 hover:from-pink-50 hover:to-white shadow-2xl transition-all duration-300 px-8 md:px-12 py-5 md:py-7 rounded-2xl overflow-hidden border-2 border-white/50"
                >
                  <span className="relative z-10 flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                      <Play className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-base md:text-lg">Watch Video</span>
                  </span>
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 text-center"
        >
          <div className={`inline-block bg-white/10 ${isMobile ? '' : 'backdrop-blur-md'} rounded-full px-6 md:px-8 py-2 md:py-3 border border-white/30`}>
            <p className="text-white/90 text-sm flex items-center gap-2">
              <Heart className="w-4 h-4 fill-white/60" />
              Choose your experience below
              <Star className="w-4 h-4 fill-white/60" />
            </p>
          </div>
        </motion.div>

        {/* Floating decorative elements - Desktop only */}
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-10 hidden lg:block">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            <div className="absolute top-1/3 right-10 hidden lg:block">
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center"
              >
                <Heart className="w-8 h-8 text-white fill-white/80" />
              </motion.div>
            </div>

            <div className="absolute bottom-1/4 left-1/4 hidden lg:block">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Video Dialog */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="sm:max-w-4xl">
          <DialogTitle className="sr-only">Farewell Video Message</DialogTitle>
          <DialogDescription className="sr-only">
            Watch this heartfelt farewell video message
          </DialogDescription>
          
          <div className="flex flex-col items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="mb-6 text-center"
            >
              <h2>A Special Video Message</h2>
              <p className="text-gray-600 text-sm mt-2">
                Watch this heartfelt farewell
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full aspect-video bg-black rounded-2xl shadow-lg overflow-hidden"
            >
              <iframe
                src="https://drive.google.com/file/d/1k6lI9LIQvWBufikVbcc8Cbwau8tIjXWI/preview"
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>


    </div>
  );
}
