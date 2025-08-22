import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Toaster } from 'sonner'
import { ThemeProvider } from "./components/theme/theme-provaider"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query"
export function App() {

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="pizzaShop">

        <Toaster richColors />
        <QueryClientProvider client={queryClient}>

          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>

    </div>
  )
}