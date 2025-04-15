"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Database, FileText, ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: FileText,
    },
    {
      title: "Preprocess",
      href: "/dashboard/preprocess",
      icon: Database,
    },
    {
      title: "Visualize",
      href: "/dashboard/visualize",
      icon: BarChart2,
    },
    {
      title: "Image Labeling",
      href: "/dashboard/image-labeling",
      icon: ImageIcon,
    },
  ]

  return (
    <nav className="w-64 border-r bg-background p-4">
      <div className="space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            className={cn("w-full justify-start", pathname === item.href && "bg-muted")}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  )
}
