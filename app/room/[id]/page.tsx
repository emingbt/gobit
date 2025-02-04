"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import type { Room, VoiceCallMember } from "@/interfaces"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, ChevronUp, Mic, MicOff, PhoneCall, Send } from "lucide-react"

const rooms = [
  {
    id: 2,
    name: "Team Standup",
    icon: "⚔️",
    members: [
      {
        id: 1,
        name: "John Doe",
        online: true,
      },
      {
        id: 2,
        name: "Jane Doe",
        online: true,
      },
      {
        id: 3,
        name: "Alice Doe",
        online: false,
      },
    ]
  },
  {
    id: 3,
    name: "Team Retrospective",
    icon: "🦎",
    members: [
      {
        id: 1,
        name: "John Doe",
        online: true,
      },
      {
        id: 2,
        name: "Jane Doe",
        online: true,
      },
      {
        id: 3,
        name: "Alice Doe",
        online: false,
      },
    ],
    membersInCall: [
      {
        id: 1,
        name: "John Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 2,
        name: "Jane Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 3,
        name: "Alice Doe",
        online: false,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
    ]
  },
  {
    id: 4,
    name: "Team Planning",
    icon: "💪",
    members: [
      {
        id: 1,
        name: "John Doe",
        online: true,
      },
      {
        id: 2,
        name: "Jane Doe",
        online: true,
      },
      {
        id: 3,
        name: "Alice Doe",
        online: false,
      },
      {
        id: 4,
        name: "Bob Doe",
        online: true,
      },
      {
        id: 5,
        name: "Eve Doe",
        online: false,
      },
      {
        id: 6,
        name: "Mallory Doe",
        online: true,
      }
    ],
    membersInCall: [
      {
        id: 1,
        name: "John Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 2,
        name: "Jane Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 3,
        name: "Alice Doe",
        online: false,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 4,
        name: "Bob Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 5,
        name: "Eve Doe",
        online: false,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 6,
        name: "Mallory Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 7,
        name: "Charlie Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 8,
        name: "David Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 9,
        name: "Frank Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 10,
        name: "Grace Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 11,
        name: "Heidi Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 12,
        name: "Ivy Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 13,
        name: "Jack Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 14,
        name: "Karl Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 15,
        name: "Liam Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 16,
        name: "Mary Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 17,
        name: "Nancy Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 18,
        name: "Oliver Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 19,
        name: "Peter Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 20,
        name: "Quinn Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 21,
        name: "Rose Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 22,
        name: "Sam Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 23,
        name: "Tom Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 24,
        name: "Ursula Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
      {
        id: 25,
        name: "Violet Doe",
        online: true,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      },
    ]
  }
]

export default function RoomPage() {
  const params = useParams<{ id: string }>()
  const roomId = params.id

  const [room, setRoom] = useState<Room>()
  const [isInCall, setIsInCall] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [voiceCallMembers, setVoiceCallMembers] = useState<VoiceCallMember[]>([])

  useEffect(() => {
    const room = rooms.find((room) => room.id === Number(roomId))
    if (!room) {
      // handle error
      return
    }
    setRoom(room)
    setVoiceCallMembers(
      room?.membersInCall?.map((member) => ({
        ...member,
        volume: 100,
        isSpeaking: false,
        showVolumeSlider: false,
      })) || [],
    )
  }, [roomId])

  const toggleVolumeSlider = (memberId: number) => {
    setVoiceCallMembers((members) =>
      members.map((member) =>
        member.id === memberId ? { ...member, showVolumeSlider: !member.showVolumeSlider } : member,
      ),
    )
  }

  const handleVolumeChange = (memberId: number, newVolume: number) => {
    setVoiceCallMembers((members) =>
      members.map((member) => (member.id === memberId ? { ...member, volume: newVolume } : member)),
    )
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
            <span className="text-gray-400">{room?.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="hidden md:flex text-gray-400">gobeat</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="md:h-[calc(100vh-140px)] grid md:grid-cols-3 md:grid-rows-2 gap-4">
          {/* Voice Call */}
          <Card className="max-h-[calc(100vh-140px)] md:h-full p-6 bg-card transition-colors relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg text-gray-400">Voice Call</span>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant={isMuted ? "destructive" : "secondary"}
                  onClick={() => setIsMuted(!isMuted)}
                  disabled={!isInCall}
                >
                  {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Button size="sm" variant={isInCall ? "destructive" : "secondary"} onClick={() => setIsInCall(!isInCall)}>
                  <PhoneCall className="w-4 h-4 mr-2" />
                  {isInCall ? "Leave" : "Join"}
                </Button>
              </div>
            </div>
            <Separator className="mb-4" />
            <ScrollArea className="h-full md:h-[calc(100%-80px)]">
              <div className="space-y-4">
                {voiceCallMembers.map((member) => (
                  <div key={member.id} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{member.name}</span>
                        {member.isSpeaking && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />}
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => toggleVolumeSlider(member.id)}>
                        {member.showVolumeSlider ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    {member.showVolumeSlider && (
                      <div className="my-4">
                        <Slider
                          // change the slider color to bg-gradient-to-r from-orange-500 via-green-500 to-purple-500
                          className="cursor-pointer"
                          value={[member.volume]}
                          onValueChange={(value) => handleVolumeChange(member.id, value[0])}
                          max={100}
                          step={1}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-purple-500" />
          </Card>

          {/* Chatbox Card */}
          <Card className="w-full md:max-h-[calc(100vh-140px)] md:h-full md:col-span-2 row-span-2 p-6 bg-card transition-colors relative overflow-hidden">
            <h2 className="text-lg text-gray-400">Chat</h2>
            <Separator className="mb-4" />
            <div className="flex flex-col h-[calc(100vh-180px)] md:h-[calc(100vh-240px)]">
              <ScrollArea className="flex-grow mb-4">
                <div className="space-y-4">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex space-x-2">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                        <AvatarFallback>U{i + 1}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">User {i + 1}</p>
                        <p className="text-sm text-gray-400">This is a sample message {i + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <form className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow"
                />
                <Button variant="secondary" type="submit">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </Card>

          {/* Members Card */}
          <Card className="w-full h-full p-6 bg-card transition-colors relative overflow-hidden">
            <div className="w-full h-full flex flex-col text-gray-400">
              <span className="text-lg">Members - {room?.members?.length}</span>
              <Separator className="my-2" />
              <div className="flex flex-col h-full rounded-lg overflow-hidden">
                <ScrollArea>
                  <div className="flex flex-col space-y-2">
                    {
                      room?.members?.map((member) => (
                        <div key={member.id} className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                          <span>{member.name}</span>
                          <span className={`w-3 h-3 rounded-full ${member.online ? "bg-green-500" : "bg-gray-500"}`} />
                        </div>
                      ))
                    }
                  </div>
                </ScrollArea>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}