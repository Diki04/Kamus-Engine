'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Book } from "lucide-react"


// Mock dictionary data
const dictionary = [
  { word: 'Apple', definition: 'A round fruit with red or green skin and crisp flesh.', image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D' },
  // {word: "Ant",definition: "A small insect that lives in colonies, known for its ability to work in groups and build complex nests.",image: "https://images.app.goo.gl/exFXUZxf2zjC15WQ9"},
  // {word: "Airplane",definition: "A powered flying vehicle with wings, used for transporting passengers or cargo through the air.",image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmlufGVufDB8fDB8fHww"},
  // {word: "Alligator",definition: "A large reptile with a long body and powerful jaws, native to the Americas.",image: "https://images.unsplash.com/photo-1592194996308-6b3f14c04a1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxsaWdhdG9yfGVufDB8fDB8fHww"},
  // {word: "Anchor",definition: "A heavy object attached to a boat or ship to prevent it from drifting by holding it to the seabed.",image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5jaG9yfGVufDB8fDB8fHww"},
  // {word: "Astronaut",definition: "A person trained to travel in space and operate spacecraft.",image: "https://images.unsplash.com/photo-1582735680166-d6aa8bc4a7b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9uYXV0fGVufDB8fDB8fHww"},
  // {word: "Almond",definition: "A type of nut that is the edible seed of the almond tree, often used in cooking or eaten as a snack.",image: "https://images.unsplash.com/photo-1587202372775-df3a0d2c9bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxtb25kfGVufDB8fDB8fHww"},
  // {word: "Aquarium",definition: "A glass tank or pool in which fish and other aquatic animals are kept.",image: "https://images.unsplash.com/photo-1562887081-35b70353e6b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXF1YXJpdW18ZW58MHx8MHx8fHww"},
  // {word: "Apricot",definition: "A small, soft, orange fruit with a velvety skin and a single large seed.",image: "https://images.unsplash.com/photo-1590080876991-6b0dd3fd8a33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXByaWNvdHxlbnwwfHwwfHx8MA"},
  // {word: "Acorn",definition: "The nut of the oak tree, which is typically smooth and contained in a cup-like shell.",image: "https://images.unsplash.com/photo-1562699139-73f28228dd77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNvcm58ZW58MHx8MHx8fHww"},
  { word: 'Banana', definition: 'A long curved fruit with a yellow skin.', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fHww' },
  { word: 'Cherry', definition: 'A small round fruit with a stone inside.', image: 'https://images.unsplash.com/photo-1611096265583-5d745206f2a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5fGVufDB8fDB8fHww' },
  { word: 'Date', definition: 'A sweet dark brown oval fruit.', image: 'https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0ZSUyMGZydWl0fGVufDB8fDB8fHww' },
  { word: 'Elderberry', definition: 'A small dark purple fruit used in wines and jams.', image: 'https://images.unsplash.com/photo-1597736714474-99c5d8d2f387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxkZXJiZXJyeXxlbnwwfHwwfHx8MA%3D%3D' },
]

export function MaxEngine() {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selectedWord, setSelectedWord] = useState(null)

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = dictionary.filter(item =>
        item.word.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([])
    }
  }, [searchTerm])

  const handleSearch = () => {
    const word = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase())
    setSelectedWord(word || null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Max Engine</h1>
        <p className="text-lg text-blue-600">Your friendly dictionary search</p>
      </header>

      <div className="w-full max-w-2xl">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-400" />
          <Button
            onClick={handleSearch}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          >
            Search
          </Button>
        </div>

        {suggestions.length > 0 && (
          <Card className="mt-4">
            <CardContent>
              <ScrollArea className="rounded-md overflow-y-auto p-4  text-sm font-medium leading-none">
             
          
          
        
      
                {suggestions.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      setSearchTerm(item.word)
                      setSelectedWord(item)
                    }}
                  >
                    {item.word}
                  </Button>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        )}

        {selectedWord && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2" />
                {selectedWord.word}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{selectedWord.definition}</p>
              <img
                src={selectedWord.image}
                alt={selectedWord.word}
                className="w-full h-full object-cover rounded-md"
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}