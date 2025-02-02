import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RoomModalProps {
  isOpen: boolean
  onClose: () => void
  isNewRoom: boolean
  onSubmit: (roomName: string, password: string) => void
  roomId?: number
}

export function RoomModal({ isOpen, onClose, isNewRoom, onSubmit, roomId }: RoomModalProps) {
  const [roomName, setRoomName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(roomName, password)
    setRoomName("")
    setPassword("")
    console.log("Room Id: ", roomId)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isNewRoom ? "Create New Room" : "Join Room"}</DialogTitle>
          <DialogDescription>
            {isNewRoom ? "Enter a name and password for your new room." : "Enter the room password to join."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {isNewRoom && (
            <div className="grid w-full items-center gap-4 mb-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="roomName">Room Name</Label>
                <Input
                  id="roomName"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  placeholder="Enter room name"
                />
              </div>
            </div>
          )}
          <div className="grid w-full items-center gap-4 mb-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
          </div>
          <DialogFooter className="mt-4 ">
            <Button type="submit">{isNewRoom ? "Create" : "Join"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

