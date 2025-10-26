import { motion } from 'motion/react';
import { Heart, Sparkles, Star, ArrowLeft, GraduationCap, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from './ui/use-mobile';

interface FarewellMessageProps {
  onBack?: () => void;
}

export function FarewellMessage({ onBack }: FarewellMessageProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blissful Animated Background - Optimized for Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
        {/* Animated gradient orbs - Reduced on mobile */}
        <motion.div
          animate={isMobile ? {
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
          } : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: isMobile ? 6 : 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}
        />
        <motion.div
          animate={isMobile ? {
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          } : {
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: isMobile ? 8 : 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-blue-300 to-purple-300 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}
        />
        {!isMobile && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-300 to-orange-200 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -50, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-rose-300 to-pink-200 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.25, 0.45, 0.25],
                y: [0, 70, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-300 to-purple-200 rounded-full blur-3xl"
            />
          </>
        )}
      </div>

      {/* Floating particles - Reduced count on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 10 : 30)].map((_, i) => (
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="w-3 h-3 text-white opacity-60" />
            ) : (
              <Star className="w-2 h-2 text-white opacity-50" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      {onBack && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-8 left-8 z-20"
        >
          <Button
            onClick={onBack}
            variant="ghost"
            size="lg"
            className={`bg-white/80 ${isMobile ? '' : 'backdrop-blur-sm'} hover:bg-white/90 text-purple-600 shadow-lg rounded-full`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full"
        >
          {/* Header with Icons */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="text-center mb-8"
          >
            {/* Three Icon Design - Simplified on mobile */}
            <div className="flex items-center justify-center gap-3 md:gap-6 mb-6">
              <motion.div
                animate={!isMobile ? {
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                } : undefined}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-xl"
              >
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-2xl"
              >
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
              </motion.div>
              
              <motion.div
                animate={!isMobile ? {
                  y: [0, -10, 0],
                  rotate: [0, -5, 0],
                } : undefined}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-xl"
              >
                <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent"
            >
              A Heartfelt Farewell
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-purple-700 mb-4"
            >
              From Your Juniors with Love
            </motion.p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-32 h-1 mx-auto bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full"
            />
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={`bg-white/90 ${isMobile ? '' : 'backdrop-blur-xl'} rounded-3xl shadow-2xl p-6 md:p-12 relative overflow-hidden border-2 border-white/60`}
          >
            {/* Enhanced decorative corner elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full -mr-20 -mt-20 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-300/40 to-orange-300/40 rounded-full -ml-16 -mb-16 blur-2xl" />
            <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-bl from-blue-300/30 to-purple-300/30 rounded-full -mr-12 blur-xl" />
            
            {/* Decorative top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400" />
            
            {/* Floating decorative elements inside card */}
            <div className="absolute top-8 left-8 w-3 h-3 bg-purple-400 rounded-full opacity-40 blur-sm" />
            <div className="absolute top-12 left-16 w-2 h-2 bg-pink-400 rounded-full opacity-50 blur-sm" />
            <div className="absolute bottom-8 right-8 w-3 h-3 bg-rose-400 rounded-full opacity-40 blur-sm" />
            <div className="absolute bottom-16 right-12 w-2 h-2 bg-purple-400 rounded-full opacity-50 blur-sm" />

            {/* Message Content */}
            <div className="relative z-10 space-y-6">
              {/* Greeting with icon */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                  Dear Seniors,
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pl-4 border-l-4 border-purple-300"
              >
                <p className="text-gray-700 leading-relaxed">
                  As you embark on new adventures beyond these walls, we want you to know how grateful
                  we are for the time we've shared together. Your presence has brought joy, laughter, and
                  countless cherished memories to our class.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pl-4 border-l-4 border-pink-300"
              >
                <p className="text-gray-700 leading-relaxed">
                  Though distance may separate us, the bonds we've created will remain forever in our hearts.
                  May your journey ahead be filled with success, happiness, and wonderful new experiences.
                  You have inspired us and left a lasting impact on each one of us.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="pl-4 border-l-4 border-rose-300"
              >
                <p className="text-gray-700 leading-relaxed">
                  Thank you for everything you've done for us. This isn't goodbye, it's see you later.
                </p>
              </motion.div>

              {/* Signature Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="pt-6 mt-6 border-t-2 border-gradient-to-r from-purple-200 via-pink-200 to-rose-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">With love and warm wishes,</p>
                    <p className="mt-2 text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                      Your Juniors
                    </p>
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Heart className="w-12 h-12 text-rose-400 fill-rose-300" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Decorative sparkles inside card */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-6 right-6 text-purple-300 opacity-40"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-6 left-6 text-pink-300 opacity-40"
            >
              <Star className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Quote Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center"
          >
            <div className={`bg-gradient-to-br from-white/70 via-purple-50/70 to-pink-50/70 ${isMobile ? '' : 'backdrop-blur-xl'} rounded-3xl shadow-xl p-6 md:p-8 border-2 border-white/60 inline-block max-w-2xl relative overflow-hidden`}>
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-tl-full" />
              
              <div className="relative flex items-start gap-4 text-purple-700">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-6 h-6 flex-shrink-0 mt-1 text-pink-500" />
                </motion.div>
                <div className="text-left">
                  <p className="italic text-lg leading-relaxed text-gray-700">
                    "How lucky I am to have something that makes saying goodbye so hard."
                  </p>
                  <p className="mt-3 text-sm text-gray-500 not-italic">— A.A. Milne</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Memories Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            {[
              { icon: Heart, text: "Memories", color: "from-pink-400 to-rose-500" },
              { icon: Star, text: "Friendship", color: "from-purple-400 to-indigo-500" },
              { icon: Sparkles, text: "Forever", color: "from-blue-400 to-cyan-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white/80 ${isMobile ? '' : 'backdrop-blur-md'} rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg border border-white/50 flex items-center gap-2`}
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating decorative hearts - Desktop only */}
          {!isMobile && [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-pink-400 fill-pink-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
