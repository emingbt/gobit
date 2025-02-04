"use client"

import { useState } from "react"
import { Plus, Users, Tent, Globe2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RoomModal } from "@/components/roomModal"
import Link from "next/link"

const myRooms = [
  {
    id: 2,
    name: "Team Standup",
    icon: "⚔️",
  },
  {
    id: 3,
    name: "Team Retrospective",
    icon: "🦎",
  },
  {
    id: 4,
    name: "Team Planning",
    icon: "💪",
  }
]

const otherRooms = [
  {
    id: 5,
    name: "All Hands",
    icon: "🤝",
  },
  {
    id: 6,
    name: "Brainstorming",
    icon: "🧠",
  },
  {
    id: 7,
    name: "Workshop",
    icon: "👨‍🏫",
  },
]

export default function Rooms() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNewRoom, setIsNewRoom] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<number>()

  const handleOpenModal = (isNew: boolean, roomId?: number) => {
    setIsNewRoom(isNew)
    setSelectedRoom(roomId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleRoomSubmit = (roomName: string, password: string) => {
    // Here you would typically handle room creation or joining
    console.log(`${isNewRoom ? "Creating" : "Joining"} room: ${roomName} with password: ${password}`)
    // Add your logic for creating or joining a room
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">
              gobit
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">Rooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">gobeat</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="flex items-center justify-start mb-4 text-gray-400">
          <Tent className="w-8 h-8 mr-2" />
          <h1 className="text-xl">My Rooms</h1>
        </div>
        {/* gray line to divide header and cards */}
        <div className="border-b border-border mb-4" />
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* New Room Card */}
          <Card className="p-6 bg-card hover:bg-secondary transition-colors cursor-pointer relative overflow-hidden"
            onClick={() => handleOpenModal(true)}
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <Plus className="w-6 h-6" />
              <span className="text-lg">New</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-purple-500" />
          </Card>

          {/* General Chat Card */}
          <Link href="/room/1">
            <Card className="w-full h-full p-6 bg-primary hover:bg-secondary transition-colors cursor-pointer relative overflow-hidden">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-6 h-6" />
                  <span className="text-lg">General</span>
                </div>
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-gray-900">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-gray-900">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-gray-900">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-sm text-gray-400 border-2 border-gray-900">
                    +5
                  </span>
                </div>
              </div>
            </Card>
          </Link>

          {
            myRooms.map((room) => (
              <Link key={room.id} href={`/room/${room.id}`}>
                <Card key={room.id} className="w-full h-full p-6 bg-card hover:bg-secondary transition-colors cursor-pointer">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <span className="text-xl">{room.icon}</span>
                    <span className="text-lg">{room.name}</span>
                  </div>
                </Card>
              </Link>
            ))
          }
        </div>

        <div className="flex items-center justify-start mb-4 text-gray-400">
          <Globe2 className="w-8 h-8 mr-2" />
          <h1 className="text-xl">Other Rooms</h1>
        </div>
        {/* gray line to divide header and cards */}
        <div className="border-b border-border mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {
            otherRooms.map((room) => (
              <Card key={room.id} className="p-6 bg-card hover:bg-secondary transition-colors cursor-pointer"
                onClick={() => handleOpenModal(false, room.id)}
              >
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="text-xl">{room.icon}</span>
                  <span className="text-lg">{room.name}</span>
                </div>
              </Card>
            ))
          }
        </div>
      </div>

      <RoomModal isOpen={isModalOpen} onClose={handleCloseModal} isNewRoom={isNewRoom} onSubmit={handleRoomSubmit} roomId={selectedRoom} />
    </div>
  )
}