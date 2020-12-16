import React, { useEffect, useState } from "react"
import { MessageWrapper, Text } from "./Message.style"

interface MessageProps {
  type: "success" | "warning" | "error"
  content: string
  onHide?: () => void
}

export const Message: React.FC<MessageProps> = ({ type, content, onHide }) => {
  const [viewed, setViewed] = useState<boolean>(false)

  const handleHide = () => {
    setViewed(true)
    onHide && onHide()
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleHide()
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])

  if (viewed) {
    return null
  }

  return (
    <MessageWrapper type={type} onClick={handleHide}>
      <Text>{content}</Text>
    </MessageWrapper>
  )
}
