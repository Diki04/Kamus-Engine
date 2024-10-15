import * as React from "react" // Mengimpor React untuk digunakan dalam komponen React
import { cn } from "@/lib/utils" // Mengimpor fungsi utilitas `cn` (biasanya digunakan untuk penggabungan className secara kondisional)

/* Definisi komponen Card */
const Card = React.forwardRef< // Menggunakan `forwardRef` untuk memungkinkan akses ke elemen DOM dari komponen ini
  HTMLDivElement, // Tipe elemen yang akan direferensikan (yaitu elemen div)
  React.HTMLAttributes<HTMLDivElement> // Props yang akan diteruskan, mewarisi atribut HTML standar untuk elemen div
>(({ className, ...props }, ref) => ( // Mendestrukturisasi `className` dan `props` lainnya, `ref` diteruskan untuk referensi DOM
  <div
    ref={ref} // Menetapkan ref ke elemen div
    className={cn( // Menggunakan utilitas `cn` untuk menggabungkan class CSS secara kondisional
      "rounded border bg-card text-card-foreground shadow-sm", // Kelas default untuk styling Card
      className // Menambahkan class tambahan yang diteruskan melalui props
    )}
    {...props} // Menyebarkan properti lainnya ke div (misalnya `onClick`, `id`, dll.)
  />
))
Card.displayName = "Card" // Menetapkan nama tampilan untuk komponen (berguna untuk debugging di React DevTools)

/* Definisi komponen CardHeader */
const CardHeader = React.forwardRef<
  HTMLDivElement, // Tipe elemen yang direferensikan (elemen div)
  React.HTMLAttributes<HTMLDivElement> // Props yang diteruskan, mewarisi atribut HTML standar untuk elemen div
>(({ className, ...props }, ref) => ( // Mendestrukturisasi `className` dan `props`, `ref` diteruskan untuk referensi DOM
  <div
    ref={ref} // Menetapkan ref ke elemen div
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Kelas default untuk styling header
    {...props} // Menyebarkan properti lainnya ke div (misalnya `onClick`, `id`, dll.)
  />
))
CardHeader.displayName = "CardHeader" // Menetapkan nama tampilan untuk komponen

/* Definisi komponen CardTitle */
const CardTitle = React.forwardRef<
  HTMLParagraphElement, // Tipe elemen yang direferensikan (elemen paragraf)
  React.HTMLAttributes<HTMLHeadingElement> // Props yang diteruskan, mewarisi atribut HTML standar untuk elemen heading
>(({ className, ...props }, ref) => ( // Mendestrukturisasi `className` dan `props`, `ref` diteruskan untuk referensi DOM
  <h3
    ref={ref} // Menetapkan ref ke elemen heading
    className={cn( // Menggunakan utilitas `cn` untuk menggabungkan class CSS secara kondisional
      "text-2xl font-semibold leading-none tracking-tight", // Kelas default untuk styling judul
      className // Menambahkan class tambahan yang diteruskan melalui props
    )}
    {...props} // Menyebarkan properti lainnya ke elemen heading (misalnya `onClick`, `id`, dll.)
  />
))
CardTitle.displayName = "CardTitle" // Menetapkan nama tampilan untuk komponen

/* Definisi komponen CardDescription */
const CardDescription = React.forwardRef<
  HTMLParagraphElement, // Tipe elemen yang direferensikan (elemen paragraf)
  React.HTMLAttributes<HTMLParagraphElement> // Props yang diteruskan, mewarisi atribut HTML standar untuk elemen paragraf
>(({ className, ...props }, ref) => ( // Mendestrukturisasi `className` dan `props`, `ref` diteruskan untuk referensi DOM
  <p
    ref={ref} // Menetapkan ref ke elemen paragraf
    className={cn("text-sm text-muted-foreground", className)} // Kelas default untuk styling deskripsi teks
    {...props} // Menyebarkan properti lainnya ke elemen paragraf (misalnya `onClick`, `id`, dll.)
  />
))
CardDescription.displayName = "CardDescription" // Menetapkan nama tampilan untuk komponen

/* Definisi komponen CardContent */
const CardContent = React.forwardRef<
  HTMLDivElement, // Tipe elemen yang direferensikan (elemen div)
  React.HTMLAttributes<HTMLDivElement> // Props yang diteruskan, mewarisi atribut HTML standar untuk elemen div
>(({ className, ...props }, ref) => ( // Mendestrukturisasi `className` dan `props`, `ref` diteruskan untuk referensi DOM
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // Menggunakan `cn` untuk menggabungkan class CSS, padding default
))
CardContent.displayName = "CardContent" // Menetapkan nama tampilan untuk komponen

/* Definisi komponen CardFooter */
const CardFooter = React.forwardRef<
  HTMLDivElement, // Tipe elemen yang direferensikan (elemen div)
  React.HTMLAttributes<HTMLDivElement> // Props yang diteruskan, mewarisi atribut HTML standar untuk elemen div
>(({ className, ...props }, ref) => ( // Mendestrukturisasi `className` dan `props`, `ref` diteruskan untuk referensi DOM
  <div
    ref={ref} // Menetapkan ref ke elemen div
    className={cn("flex items-center", className)} // Kelas default untuk styling footer, agar item sejajar secara horizontal
    {...props} // Menyebarkan properti lainnya ke div (misalnya `onClick`, `id`, dll.)
  />
))
CardFooter.displayName = "CardFooter" // Menetapkan nama tampilan untuk komponen

// Mengekspor semua komponen agar bisa digunakan di bagian lain aplikasi
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
