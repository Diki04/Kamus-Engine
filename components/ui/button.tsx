import * as React from "react" // Mengimpor modul React untuk membuat komponen
import { Slot } from "@radix-ui/react-slot" // Mengimpor komponen Slot dari Radix UI untuk memungkinkan komponen diubah sesuai konteks
import { cva, type VariantProps } from "class-variance-authority" // Mengimpor `cva` untuk menangani variasi kelas CSS dan `VariantProps` untuk mendefinisikan tipe props

import { cn } from "@/lib/utils" // Mengimpor fungsi utilitas 'cn' untuk penggabungan className secara kondisional

/* Variabel `buttonVariants` digunakan untuk mengatur berbagai variasi tampilan tombol dengan menggunakan cva */
const buttonVariants = cva( // `cva` digunakan untuk membuat variasi kelas CSS
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", // Kelas dasar yang digunakan pada semua tombol
  {
    variants: { // Mendefinisikan variasi yang didukung oleh komponen tombol
      variant: { // Variasi gaya tombol berdasarkan tipe/varian
        default: "bg-primary text-primary-foreground hover:bg-primary/90", // Gaya default
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", // Tombol destruktif (misalnya untuk penghapusan)
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Tombol dengan border
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Tombol sekunder
        ghost: "hover:bg-accent hover:text-accent-foreground", // Tombol tipe ghost (transparan)
        link: "text-primary underline-offset-4 hover:underline", // Tombol tipe link
      },
      size: { // Variasi ukuran tombol
        default: "h-10 px-4 py-2", // Ukuran default
        sm: "h-9 rounded-md px-3", // Ukuran kecil (small)
        lg: "h-11 rounded-md px-8", // Ukuran besar (large)
        icon: "h-10 w-10", // Ukuran untuk tombol berbentuk ikon
      },
    },
    defaultVariants: { // Variasi default jika tidak ada yang dispesifikasikan
      variant: "default", // Menggunakan gaya default
      size: "default", // Menggunakan ukuran default
    },
  }
)

/* Definisi interface untuk ButtonProps, yang meliputi semua atribut tombol HTML bawaan, 
   ditambah props untuk varian (variant dan size), dan opsi untuk menggunakan `asChild` */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Mengambil semua properti standar tombol HTML
    VariantProps<typeof buttonVariants> { // Memungkinkan penggunaan props varian yang didefinisikan oleh `buttonVariants`
  asChild?: boolean // Opsi untuk mengganti elemen tombol dengan elemen anak menggunakan `Slot`
}

/* Komponen `Button` dibuat dengan `forwardRef` untuk memberikan ref ke elemen DOM */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>( // Mendefinisikan komponen Button dengan `forwardRef`
  ({ className, variant, size, asChild = false, ...props }, ref) => { // Mendestrukturisasi props yang diterima oleh komponen
    const Comp = asChild ? Slot : "button" // Jika `asChild` true, gunakan `Slot`, jika tidak gunakan elemen "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Menerapkan kelas dengan menggunakan variasi dari `buttonVariants`
        ref={ref} // Meneruskan ref untuk elemen DOM
        {...props} // Menyebarkan semua props lainnya ke elemen
      />
    )
  }
)
Button.displayName = "Button" // Memberikan nama tampilan pada komponen untuk debugging di React DevTools

/* Mengekspor komponen `Button` dan `buttonVariants` */
export { Button, buttonVariants }
