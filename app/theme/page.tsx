import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ThemePage() {
  const colors = [
    { name: "background", class: "bg-background" },
    { name: "foreground", class: "bg-foreground" },
    { name: "card", class: "bg-card" },
    { name: "card-foreground", class: "bg-card-foreground" },
    { name: "popover", class: "bg-popover" },
    { name: "popover-foreground", class: "bg-popover-foreground" },
    { name: "primary", class: "bg-primary" },
    { name: "primary-foreground", class: "bg-primary-foreground" },
    { name: "secondary", class: "bg-secondary" },
    { name: "secondary-foreground", class: "bg-secondary-foreground" },
    { name: "muted", class: "bg-muted" },
    { name: "muted-foreground", class: "bg-muted-foreground" },
    { name: "accent", class: "bg-accent" },
    { name: "accent-foreground", class: "bg-accent-foreground" },
    { name: "destructive", class: "bg-destructive" },
    { name: "destructive-foreground", class: "bg-destructive-foreground" },
    { name: "border", class: "bg-border" },
    { name: "input", class: "bg-input" },
    { name: "ring", class: "bg-ring" },
  ]

  const gradients = [
    { name: "Logo Gradient", class: "from-blue-400 to-purple-400" },
    { name: "Card Gradient", class: "from-orange-500 via-green-500 to-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Theme Guide</h1>
          <p className="text-muted-foreground">
            Complete theme specification and color palette used in the chat application
          </p>
        </div>

        <Separator />

        {/* Colors Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.map((color) => (
              <Card key={color.name}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-sm font-medium">{color.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`h-12 w-full rounded-md ${color.class}`} />
                  <code className="text-sm mt-2 block text-muted-foreground">{color.class}</code>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gradients Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gradients.map((gradient) => (
              <Card key={gradient.name}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-sm font-medium">{gradient.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`h-12 w-full rounded-md bg-gradient-to-r ${gradient.class}`} />
                  <code className="text-sm mt-2 block text-muted-foreground">bg-gradient-to-r {gradient.class}</code>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Components Preview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Available button variants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Room Card</CardTitle>
                <CardDescription>Chat room card example</CardDescription>
              </CardHeader>
              <CardContent>
                <Card className="bg-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <span className="text-xl">💬</span>
                      <span className="text-lg">General Chat</span>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Avatars */}
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>User avatar styles</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Typography</h2>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div>
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <code className="text-sm text-muted-foreground">text-4xl font-bold</code>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Heading 2</h2>
                <code className="text-sm text-muted-foreground">text-2xl font-bold</code>
              </div>
              <div>
                <h3 className="text-xl font-bold">Heading 3</h3>
                <code className="text-sm text-muted-foreground">text-xl font-bold</code>
              </div>
              <div>
                <p className="text-base">Regular text</p>
                <code className="text-sm text-muted-foreground">text-base</code>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Muted text</p>
                <code className="text-sm text-muted-foreground">text-sm text-muted-foreground</code>
              </div>
              <div>
                <p className="text-lg font-medium">Medium text</p>
                <code className="text-sm text-muted-foreground">text-lg font-medium</code>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

