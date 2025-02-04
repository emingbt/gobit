export interface Room {
  id: number
  name: string
  icon: string,
  members?: Member[],
  membersInCall?: VoiceCallMember[]
}

export interface Member {
  id: number
  name: string
  online: boolean
}

export interface VoiceCallMember extends Member {
  volume: number
  isSpeaking: boolean
  showVolumeSlider: boolean
}
