import * as React from "react" // Mengimpor React untuk membuat komponen React
import { cn } from "@/lib/utils" // Mengimpor fungsi utilitas `cn` untuk penggabungan className secara kondisional

/* Mendefinisikan antarmuka InputProps */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {} // InputProps adalah interface yang mewarisi semua atribut input HTML standar

/* Definisi komponen Input */
const Input = React.forwardRef<HTMLInputElement, InputProps>( // Menggunakan `forwardRef` untuk mengirimkan referensi ke elemen input
  ({ className, type, ...props }, ref) => { // Mendestrukturisasi `className`, `type`, dan `props` lainnya, ref diteruskan ke input
    return (
      <input
        type={type} // Menetapkan tipe input (misalnya "text", "password", dll.)
        className={cn( // Menggunakan fungsi `cn` untuk menggabungkan kelas CSS secara kondisional
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", 
          className // Menambahkan class tambahan yang diteruskan melalui props
        )}
        ref={ref} // Menetapkan ref ke elemen input untuk akses DOM
        {...props} // Menyebarkan properti lainnya ke elemen input (misalnya placeholder, onChange, dll.)
      />
    )
  }
)
Input.displayName = "Input" // Menetapkan nama tampilan untuk komponen (berguna untuk debugging di React DevTools)

/* Mengekspor komponen Input */
export { Input }
