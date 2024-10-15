'use client' // Ini digunakan untuk menunjukkan bahwa komponen ini dirender di sisi klien (client-side rendering).

import { useState, useEffect } from 'react' // Mengimpor hook React untuk state management dan efek samping (side effects).
import { Input } from "@/components/ui/input" // Komponen input untuk field pencarian.
import { Button } from "@/components/ui/button" // Komponen button untuk tindakan pencarian.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Komponen card untuk menampilkan hasil pencarian.
import { ScrollArea } from "@/components/ui/scroll-area" // Komponen untuk memungkinkan scroll pada area terbatas.
import { Search, Book } from "lucide-react" // Ikon-ikon yang digunakan dalam UI, seperti ikon pencarian dan ikon buku.


// Mock dictionary data - Ini adalah data kamus tiruan yang digunakan untuk simulasi pencarian.
const dictionary = [
  { word: 'Apple', definition: 'A round fruit with red or green skin and crisp flesh.', image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D' },
  { word: 'Banana', definition: 'A long curved fruit with a yellow skin.', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fHww' },
  { word: 'Cherry', definition: 'A small round fruit with a stone inside.', image: 'https://images.unsplash.com/photo-1611096265583-5d745206f2a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5fGVufDB8fDB8fHww' },
  { word: 'Date', definition: 'A sweet dark brown oval fruit.', image: 'https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0ZSUyMGZydWl0fGVufDB8fDB8fHww' },
  { word: 'Elderberry', definition: 'A small dark purple fruit used in wines and jams.', image: 'https://images.unsplash.com/photo-1597736714474-99c5d8d2f387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxkZXJiZXJyeXxlbnwwfHwwfHx8MA%3D%3D' },
]

// Komponen utama aplikasi.
export function MaxEngine() {
  // State untuk menyimpan istilah pencarian.
  const [searchTerm, setSearchTerm] = useState('')
  // State untuk menyimpan saran pencarian yang sesuai.
  const [suggestions, setSuggestions] = useState([])
  // State untuk menyimpan kata yang dipilih.
  const [selectedWord, setSelectedWord] = useState(null)

  // Hook useEffect yang akan dipicu setiap kali nilai searchTerm berubah.
  useEffect(() => {
    if (searchTerm.length > 0) {
      // Filter kata dari dictionary yang cocok dengan pencarian.
      const filteredSuggestions = dictionary.filter(item =>
        item.word.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
    } else {
      // Jika searchTerm kosong, tidak ada saran yang ditampilkan.
      setSuggestions([])
    }
  }, [searchTerm]) // Memantau perubahan pada searchTerm.

  // Fungsi yang memproses pencarian dan menampilkan hasil yang sesuai.
  const handleSearch = () => {
    // Mencari kata di dalam dictionary berdasarkan searchTerm.
    const word = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase())
    setSelectedWord(word || null) // Menampilkan kata yang cocok, atau null jika tidak ada.
  }

  // Komponen UI untuk menampilkan input pencarian, saran kata, dan hasil pencarian.
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center p-8">
      {/* Bagian header yang menampilkan judul dan deskripsi aplikasi */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Max Engine</h1>
        <p className="text-lg text-blue-600">Your friendly dictionary search</p>
      </header>

      <div className="w-full max-w-2xl">
        <div className="relative">
          {/* Input field untuk memasukkan istilah pencarian */}
          <Input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Mengubah searchTerm sesuai input pengguna.
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:outline-none"
          />
          {/* Ikon pencarian yang ditampilkan di samping input */}
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-400" />
          {/* Tombol untuk melakukan pencarian */}
          <Button
            onClick={handleSearch}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          >
            Search
          </Button>
        </div>

        {/* Menampilkan saran hasil pencarian jika ada */}
        {suggestions.length > 0 && (
          <Card className="mt-4">
            <CardContent>
              <ScrollArea className="rounded-md overflow-y-auto p-4 text-sm font-medium leading-none">
                {/* Daftar kata yang sesuai dengan pencarian */}
                {suggestions.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      setSearchTerm(item.word) // Mengisi searchTerm dengan kata yang dipilih.
                      setSelectedWord(item) // Menampilkan detail kata yang dipilih.
                    }}
                  >
                    {item.word}
                  </Button>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        )}

        {/* Menampilkan detail kata yang dipilih */}
        {selectedWord && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                {/* Ikon buku di samping nama kata */}
                <Book className="mr-2" />
                {selectedWord.word}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Definisi dan gambar kata yang dipilih */}
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
