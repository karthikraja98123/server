"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRightIcon,
  MenuIcon,
  RefreshCwIcon,
  SearchIcon,
  StarIcon,
  SlidersHorizontal,
  InfoIcon,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"

const servers = [
  { name: "Server 1", url: "https://takipcimx.net/", color: "bg-purple-500", icon: "🚀" },
  { name: "Server 2", url: "https://takipcizen.com/", color: "bg-red-500", icon: "🔥" },
  { name: "Server 3", url: "https://takipcimx.com/", color: "bg-yellow-500", icon: "⚡" },
  { name: "Server 4", url: "https://takipcigen.com/", color: "bg-green-500", icon: "🍀" },
  { name: "Server 5", url: "https://takipcikrali.com/", color: "bg-blue-500", icon: "💎" },
  { name: "Server 6", url: "https://takipcigir.com/", color: "bg-pink-500", icon: "🌸" },
  { name: "Server 7", url: "https://fastfollow.in/", color: "bg-purple-600", icon: "🚄" },
  { name: "Server 8", url: "https://takipcitime.net/", color: "bg-teal-500", icon: "⏱️" },
  { name: "Server 9", url: "https://takipcitime.com/", color: "bg-orange-500", icon: "🍊" },
  { name: "Server 10", url: "https://takipcibase.com/", color: "bg-green-600", icon: "🌿" },
  { name: "Server 11", url: "https://canlitakipci.com/", color: "bg-blue-600", icon: "🌊" },
  { name: "Server 12", url: "https://birtakipci.com/", color: "bg-yellow-600", icon: "🌟" },
  { name: "Server 13", url: "https://instamoda.org/", color: "bg-pink-600", icon: "🎀" },
]

export default function AndroidFollowersPage() {
  const [status, setStatus] = useState("")
  const [isStatusVisible, setIsStatusVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])
  const [sliderValue, setSliderValue] = useState([5])
  const [showAboutUs, setShowAboutUs] = useState(false)

  useEffect(() => {
    if (status) {
      setIsStatusVisible(true)
      const timer = setTimeout(() => {
        setIsStatusVisible(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const checkAccess = (serverName: string) => {
    setStatus(`${serverName} is accessed. You can select another server.`)
  }

  const toggleFavorite = (serverName: string) => {
    setFavorites((prev) =>
      prev.includes(serverName) ? prev.filter((name) => name !== serverName) : [...prev, serverName],
    )
  }

  const filteredServers = servers
    .filter((server) => server.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, sliderValue[0])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Enhanced App Bar */}
      <motion.div
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MenuIcon className="mr-4" />
            <motion.h1
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Followers Servers
            </motion.h1>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowAboutUs(!showAboutUs)}
            >
              <InfoIcon className="w-6 h-6" />
            </motion.button>
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <RefreshCwIcon className="w-6 h-6" />
            </motion.div>
          </div>
        </div>
        <motion.p
          className="mt-2 text-indigo-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Discover and connect with top follower servers
        </motion.p>
      </motion.div>

      {/* About Us Section */}
      <AnimatePresence>
        {showAboutUs && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">About Followers Servers</h2>
              <p className="text-gray-600 mb-4">
                Followers Servers is your go-to platform for accessing and managing various follower services. We
                provide a curated list of reliable servers that offer follower growth solutions for your social media
                accounts.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to simplify the process of finding and connecting with top-tier follower services,
                helping you grow your online presence efficiently and effectively.
              </p>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Access to multiple follower servers</li>
                <li>Easy-to-use interface with search functionality</li>
                <li>Ability to favorite and quickly access preferred servers</li>
                <li>Regular updates to ensure server reliability</li>
              </ul>
              <p className="text-gray-600">
                Whether you're an influencer, business owner, or social media enthusiast, Followers Servers is designed
                to meet your follower growth needs.
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Search and Slider Bar */}
      <div className="bg-white p-4 shadow-md">
        <div className="relative mb-4">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search servers..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <SlidersHorizontal className="text-gray-400" />
          <Slider
            defaultValue={[5]}
            max={13}
            min={1}
            step={1}
            value={sliderValue}
            onValueChange={setSliderValue}
            className="flex-grow"
          />
          <span className="text-sm text-gray-600 font-medium">Show: {sliderValue[0]}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {filteredServers.map((server, index) => (
            <motion.div
              key={server.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                <a
                  href={server.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => checkAccess(server.name)}
                  className="flex items-center flex-grow"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${server.color} flex items-center justify-center text-white text-2xl mr-4 shadow-md`}
                  >
                    {server.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{server.name}</span>
                </a>
                <div className="flex items-center">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(server.name)}
                    className={`mr-4 focus:outline-none ${favorites.includes(server.name) ? "text-yellow-500" : "text-gray-400"}`}
                  >
                    <StarIcon />
                  </motion.button>
                  <ChevronRightIcon className="text-gray-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.9 }}
      >
        <RefreshCwIcon />
      </motion.button>

      {/* Status Snackbar */}
      <AnimatePresence>
        {isStatusVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 bg-indigo-900 text-white py-3 px-6 rounded-md shadow-lg flex items-center justify-between"
          >
            <span>{status}</span>
            <button onClick={() => setIsStatusVisible(false)} className="text-indigo-300 hover:text-white">
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

