import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";





export function Event() {
    const { slug } = useParams<{ slug: string }>()
    const [isOpen, setIsOpen] = useState(false)
  
    function toggleSidebar() {
      setIsOpen(!isOpen)
    }
  
    useEffect(() => {
      if (isOpen) {
        setIsOpen(false)
      }
    }, [slug])
  
    return (
      <div className="flex h-full max-h-screen min-h-screen flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <main className="flex flex-1 overflow-y-scroll scrollbar-none">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
          <Sidebar isOpen={isOpen} />
        </main>
      </div>
    )
  }