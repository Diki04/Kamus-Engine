"use client" // Menandakan bahwa file ini berjalan di sisi client dalam aplikasi Next.js

import * as React from "react" // Mengimpor modul React untuk membuat komponen
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area" // Mengimpor komponen primitif dari Radix UI untuk membuat area gulir (scroll area)

import { cn } from "@/lib/utils" // Mengimpor fungsi utilitas 'cn' untuk penggabungan className secara kondisional

/* Komponen ScrollArea menggunakan forwardRef untuk mengirimkan referensi ke elemen root ScrollAreaPrimitive */
const ScrollArea = React.forwardRef< // Mendefinisikan ScrollArea dengan `forwardRef` untuk memberikan akses ref ke elemen DOM
  React.ElementRef<typeof ScrollAreaPrimitive.Root>, // Tipe elemen referensi
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> // Tipe props tanpa referensi
>(({ className, children, ...props }, ref) => ( // Mendestrukturisasi className, children, dan props lainnya, serta menerima ref
  <ScrollAreaPrimitive.Root // Root dari ScrollAreaPrimitive yang menerima ref dan props lainnya
    ref={ref}
    className={cn("relative overflow-visible", className)} // Menerapkan kelas CSS untuk membuat area scroll dengan overflow visible
    {...props} // Menyebarkan props ke ScrollAreaPrimitive.Root
  >
    {/* Viewport untuk area gulir, mewarisi bentuk elemen
     Isi dari ScrollArea, ditampilkan di dalam Viewport
     Memanggil komponen ScrollBar untuk menambahkan scrollbar ke ScrollArea
     Menambahkan sudut ScrollArea biasanya untuk tampilan estetika*/}
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]"> 
      {children} 
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar /> 
    <ScrollAreaPrimitive.Corner /> 
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName // Menetapkan nama tampilan ScrollArea untuk debugging React DevTools

/* Komponen ScrollBar menggunakan forwardRef untuk memberikan ref ke elemen ScrollAreaScrollbar */
const ScrollBar = React.forwardRef< // Mendefinisikan ScrollBar menggunakan forwardRef untuk memberikan akses ref
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, // Tipe elemen referensi
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> // Tipe props tanpa referensi
>(({ className, orientation = "vertical", ...props }, ref) => ( // Mendestrukturisasi className, orientation, props, dan menerima ref
  <ScrollAreaPrimitive.ScrollAreaScrollbar // Komponen primitif ScrollAreaScrollbar dari Radix UI
    ref={ref}
    orientation={orientation} // Menetapkan orientasi scrollbar (default: vertical)
    className={cn( // Menggabungkan className CSS berdasarkan orientasi scrollbar
      "flex touch-none select-none transition-colors", // Kelas CSS umum untuk tampilan scrollbar
      orientation === "vertical" && // Jika orientasi vertikal, terapkan kelas untuk tampilan vertikal
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && // Jika orientasi horizontal, terapkan kelas untuk tampilan horizontal
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className // Tambahkan className dari props
    )}
    {...props} // Menyebarkan props ke ScrollAreaScrollbar
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-auto rounded-full bg-border" /> // Komponen Thumb (penanda) scrollbar dengan gaya penuh
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName // Menetapkan nama tampilan ScrollBar untuk debugging

/* Mengekspor komponen ScrollArea dan ScrollBar */
export { ScrollArea, ScrollBar }
