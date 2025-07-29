import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Toaster } from 'sonner'
import { ThemeProvider } from "./components/theme/theme-provaider"
export function App() {

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="pizzaShop">

        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>

    </div>
  )
}